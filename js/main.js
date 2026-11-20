/* ============================================================
   M Yusuf Fajar Zaelani — CV Website interactions
   Vanilla JS, no dependencies.
   ============================================================ */
(function () {
  'use strict';

  /* ---------- Theme (light / dark) ---------- */
  var root = document.documentElement;
  var themeToggle = document.getElementById('theme-toggle');
  var stored = null;
  try { stored = localStorage.getItem('theme'); } catch (e) {}
  var prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  root.setAttribute('data-theme', stored || (prefersDark ? 'dark' : 'light'));

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      var next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  /* ---------- Mobile navigation ---------- */
  var hamburger = document.getElementById('hamburger');
  var nav = document.getElementById('nav');
  if (hamburger && nav) {
    hamburger.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(open));
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  }

  /* ---------- Scroll reveal ---------- */
  var revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealEls.forEach(function (el) { io.observe(el); });
  } else {
    revealEls.forEach(function (el) { el.classList.add('visible'); });
  }

  /* ---------- Active nav link on scroll ---------- */
  var sections = document.querySelectorAll('main section[id]');
  var navLinks = Array.prototype.slice.call(document.querySelectorAll('.nav a'));
  if ('IntersectionObserver' in window && navLinks.length) {
    var spy = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          var id = entry.target.getAttribute('id');
          navLinks.forEach(function (a) {
            a.classList.toggle('active', a.getAttribute('href') === '#' + id);
          });
        }
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    sections.forEach(function (s) { spy.observe(s); });
  }

  /* ---------- Projects by business function ---------- */
  var projectFilters = document.querySelector('.project-filters');
  if (projectFilters) {
    var projectCards = document.querySelectorAll('#project-grid .proj-card');
    var filterButtons = projectFilters.querySelectorAll('button');
    var projectCount = document.getElementById('project-count');
    function filterProjects(category) {
      var visibleCount = 0;
      projectCards.forEach(function (card) {
        var matches = category === 'all' || card.getAttribute('data-categories').split(' ').indexOf(category) !== -1;
        card.hidden = !matches;
        if (matches) {
          visibleCount++;
          card.classList.add('visible');
        }
      });
      filterButtons.forEach(function (button) {
        button.setAttribute('aria-pressed', String(button.getAttribute('data-project-filter') === category));
      });
      projectCount.textContent = 'Showing ' + visibleCount + ' of ' + projectCards.length + ' projects';
    }
    filterButtons.forEach(function (button) {
      var category = button.getAttribute('data-project-filter');
      var count = 0;
      projectCards.forEach(function (card) {
        if (category === 'all' || card.getAttribute('data-categories').split(' ').indexOf(category) !== -1) count++;
      });
      button.textContent += ' (' + count + ')';
      button.addEventListener('click', function () { filterProjects(category); });
    });
    projectFilters.hidden = false;
    projectCount.hidden = false;
    filterProjects('all');
  }

  /* ---------- Lightbox for project screenshots ---------- */
  var lightbox = document.getElementById('lightbox');
  var lightboxImg = document.getElementById('lightbox-img');
  var closeBtn = lightbox ? lightbox.querySelector('.lightbox-close') : null;

  function openLightbox(src, alt) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = alt || '';
    lightbox.classList.add('open');
    lightbox.setAttribute('aria-hidden', 'false');
  }
  function closeLightbox() {
    if (!lightbox) return;
    lightbox.classList.remove('open');
    lightbox.setAttribute('aria-hidden', 'true');
    lightboxImg.src = '';
  }

  document.querySelectorAll('.proj-media').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var full = btn.getAttribute('data-full');
      var img = btn.querySelector('img');
      openLightbox(full, img ? img.alt : '');
    });
  });
  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox || e.target === closeBtn) closeLightbox();
    });
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closeLightbox();
    });
  }

  /* ---------- Footer year ---------- */
  var yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
})();
