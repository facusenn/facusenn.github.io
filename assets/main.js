(function () {
  var ICONS = {
    web: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 9h18M7 6.5h.01M10 6.5h.01"/>',
    chip: '<rect x="7" y="7" width="10" height="10" rx="1"/><path d="M9 3v4M15 3v4M9 17v4M15 17v4M3 9h4M3 15h4M17 9h4M17 15h4"/>',
    leaf: '<path d="M5 19c0-8 5-14 15-15-1 10-7 15-15 15z"/><path d="M5 19l8-8"/>',
    water: '<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
  };

  function escapeHtml(s) {
    return String(s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }

  function renderProjects() {
    var list = document.getElementById('projects-list');
    if (!list || !window.PROJECTS) return;
    list.innerHTML = window.PROJECTS.map(function (p) {
      var media = p.image
        ? '<img src="' + escapeHtml(p.image) + '" alt="" loading="lazy">'
        : '<svg viewBox="0 0 24 24" aria-hidden="true">' + (ICONS[p.icon] || ICONS.web) + '</svg>';
      var title = p.link
        ? '<a href="' + escapeHtml(p.link) + '" target="_blank" rel="noopener">' + escapeHtml(p.title) + '</a>'
        : escapeHtml(p.title);
      return (
        '<li class="project">' +
        '<div class="project__media">' + media + '</div>' +
        '<div class="project__body">' +
        '<h3>' + title + '</h3>' +
        '<span class="project__year">' + escapeHtml(p.year) + '</span>' +
        '<p>' + escapeHtml(p.description) + '</p>' +
        '<ul class="project__tags">' +
        (p.tags || []).map(function (t) { return '<li>' + escapeHtml(t) + '</li>'; }).join('') +
        '</ul></div></li>'
      );
    }).join('');
  }

  function setupTheme() {
    var btn = document.getElementById('theme-toggle');
    var root = document.documentElement;
    btn.addEventListener('click', function () {
      var current = root.getAttribute('data-theme') ||
        (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark');
      var next = current === 'light' ? 'dark' : 'light';
      root.setAttribute('data-theme', next);
      try { localStorage.setItem('theme', next); } catch (e) {}
    });
  }

  function setupMenu() {
    var btn = document.getElementById('menu-toggle');
    var nav = document.getElementById('nav');
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open);
    });
    nav.addEventListener('click', function (e) {
      if (e.target.tagName === 'A') {
        nav.classList.remove('is-open');
        btn.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.getElementById('year').textContent = new Date().getFullYear();
  renderProjects();
  setupTheme();
  setupMenu();
})();
