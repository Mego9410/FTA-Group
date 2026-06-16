// Frank Taylor & Associates — Group Hub
// Quiet reveal-on-scroll + footer year.

(function () {
  document.getElementById('year').textContent = new Date().getFullYear();

  // Mobile burger menu
  var nav = document.querySelector('.nav');
  var toggle = document.querySelector('.nav-toggle');
  var menu = document.getElementById('nav-menu');

  if (nav && toggle && menu) {
    var setOpen = function (open) {
      nav.classList.toggle('open', open);
      toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
      toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    };

    toggle.addEventListener('click', function (e) {
      e.stopPropagation();
      setOpen(!nav.classList.contains('open'));
    });

    menu.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { setOpen(false); });
    });

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && nav.classList.contains('open')) {
        setOpen(false);
        toggle.focus();
      }
    });

    document.addEventListener('click', function (e) {
      if (nav.classList.contains('open') && !nav.contains(e.target)) {
        setOpen(false);
      }
    });
  }

  var els = document.querySelectorAll('.reveal');

  if (!('IntersectionObserver' in window) ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('in');
        io.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

  els.forEach(function (el) { io.observe(el); });
})();
