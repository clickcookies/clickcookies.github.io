// Footer Component
function renderFooter() {
  const footer = document.getElementById('site-footer');
  const year = new Date().getFullYear();
  footer.innerHTML = `
    <div class="footer-bg-cookies" aria-hidden="true">
      ${Array(12).fill(0).map((_,i) => `<span class="bg-cookie" style="--i:${i}">🍪</span>`).join('')}
    </div>
    <div class="footer-container">
      <div class="footer-brand">
        <a href="#hero" class="footer-logo" aria-label="Click Cookies">
          <span class="logo-icon">🍪</span>
          <span class="logo-text">Click<span class="logo-accent">Cookies</span></span>
        </a>
        <p class="footer-tagline">The world's most addictive cookie clicker game. Bake billions of cookies one click at a time!</p>
        <div class="footer-socials">
          <a href="https://clickcookies.github.io" class="social-btn" aria-label="GitHub">
            <svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>
          </a>          
        </div>
      </div>

      <div class="footer-links-grid">
        <div class="footer-col">
          <h4 class="footer-col-title">Game</h4>
          <ul>
            <li><a href="/#game">Play Now</a></li>
            <li><a href="/#cookies">Cookie Types</a></li>
            <li><a href="/#upgrades">Upgrades</a></li>
            <li><a href="/#achievements">Achievements</a></li>
            <li><a href="/#leaderboard">Leaderboard</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-col-title">Learn</h4>
          <ul>
            <li><a href="/#how-to-play">How to Play</a></li>
            <li><a href="/#tips">Tips & Tricks</a></li>
            <li><a href="/#faq">FAQ</a></li>
            <li><a href="/#about">About</a></li>
          </ul>
        </div>
        <div class="footer-col">
          <h4 class="footer-col-title">Legal</h4>
          <ul>
            <li><a href="/privacy">Privacy Policy</a></li>
            <li><a href="/terms">Terms of Service</a></li>
            <li><a href="/cookies-policy">Cookie Policy</a></li>
            <li><a href="/contact">Contact</a></li>
            <li><a href="/about">About</a></li>   
          </ul>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; ${year} <a href="https://clickcookies.github.io">ClickCookies.github.io</a> — All rights reserved. Bake responsibly 🍪</p>
      <p class="footer-meta">Made with 🍪 and endless clicking</p>
    </div>
  `;
}

document.addEventListener('DOMContentLoaded', renderFooter);
