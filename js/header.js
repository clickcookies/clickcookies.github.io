// Header Component
function renderHeader() {
  const header = document.getElementById('site-header');
  header.innerHTML = `
    <nav class="navbar" role="navigation" aria-label="Main navigation">
      <div class="nav-container">
        <a href="#hero" class="nav-logo" aria-label="Click Cookies Home">
          <span class="logo-icon">🍪</span>
          <span class="logo-text">Click<span class="logo-accent">Cookies</span></span>
        </a>
        <button class="nav-toggle" id="navToggle" aria-label="Toggle navigation" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="navLinks" role="list">
          <li><a href="#game" class="nav-link">Play Game</a></li>
          <li><a href="#cookies" class="nav-link">Cookie Types</a></li>
          <li><a href="#upgrades" class="nav-link">Upgrades</a></li>
          <li><a href="#achievements" class="nav-link">Achievements</a></li>
          <li><a href="#leaderboard" class="nav-link">Leaderboard</a></li>
          <li><a href="#about" class="nav-link">About</a></li>
          <li><a href="#game" class="nav-cta">Play Now 🎮</a></li>
        </ul>
      </div>
    </nav>
  `;

  // Mobile toggle
  const toggle = document.getElementById('navToggle');
  const links = document.getElementById('navLinks');
  toggle.addEventListener('click', () => {
    const expanded = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', !expanded);
    links.classList.toggle('open');
    toggle.classList.toggle('active');
  });

  // Sticky shadow on scroll
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // Smooth active link
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.classList.remove('active');
    });
  });
}

document.addEventListener('DOMContentLoaded', renderHeader);
