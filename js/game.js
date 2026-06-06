// ===== COOKIE CLICKER GAME ENGINE =====

const COOKIE_TYPES = [
  {
    id: 'classic',
    name: 'Classic Cookie',
    emoji: '🍪',
    color: '#C8864A',
    bg: 'linear-gradient(135deg, #C8864A, #A0522D)',
    cps: 1,
    clickValue: 1,
    unlockAt: 0,
    desc: 'A timeless golden-brown cookie with chocolate chips. The original. The legend.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <circle cx="50" cy="50" r="46" fill="url(#cg1)" stroke="#8B4513" stroke-width="2"/>
      <defs>
        <radialGradient id="cg1" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#DBA05A"/>
          <stop offset="100%" stop-color="#A0522D"/>
        </radialGradient>
      </defs>
      <ellipse cx="35" cy="32" rx="6" ry="5" fill="#5C3317" opacity="0.85"/>
      <ellipse cx="60" cy="28" rx="5" ry="4" fill="#5C3317" opacity="0.85"/>
      <ellipse cx="68" cy="55" rx="6" ry="5" fill="#5C3317" opacity="0.85"/>
      <ellipse cx="40" cy="62" rx="5" ry="4" fill="#5C3317" opacity="0.85"/>
      <ellipse cx="55" cy="72" rx="4" ry="3.5" fill="#5C3317" opacity="0.85"/>
      <ellipse cx="25" cy="55" rx="4" ry="3.5" fill="#5C3317" opacity="0.85"/>
      <circle cx="50" cy="50" r="44" fill="none" stroke="#C8864A" stroke-width="1" opacity="0.3"/>
    </svg>`
  },
  {
    id: 'choco',
    name: 'Chocolate Fudge',
    emoji: '🍫',
    color: '#4A2800',
    bg: 'linear-gradient(135deg, #6B3A1F, #3D1C00)',
    cps: 5,
    clickValue: 5,
    unlockAt: 50,
    desc: 'Dense, rich, and utterly indulgent. A double-chocolate masterpiece drizzled in fudge.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cg2" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#7A4020"/>
          <stop offset="100%" stop-color="#3D1C00"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#cg2)" stroke="#2A0D00" stroke-width="2"/>
      <path d="M 30 35 Q 50 20 70 35 Q 80 50 70 65 Q 50 80 30 65 Q 20 50 30 35" fill="none" stroke="#5C2800" stroke-width="2.5" opacity="0.5"/>
      <circle cx="38" cy="42" r="5" fill="#1A0900" opacity="0.7"/>
      <circle cx="60" cy="38" r="4" fill="#1A0900" opacity="0.7"/>
      <circle cx="62" cy="60" r="5" fill="#1A0900" opacity="0.7"/>
      <circle cx="38" cy="62" r="4" fill="#1A0900" opacity="0.7"/>
      <circle cx="50" cy="50" r="4" fill="#1A0900" opacity="0.7"/>
      <path d="M 30 30 Q 40 25 50 28 Q 60 25 70 30" fill="none" stroke="#8B4513" stroke-width="1.5" opacity="0.4"/>
    </svg>`
  },
  {
    id: 'rainbow',
    name: 'Rainbow Sprinkle',
    emoji: '🌈',
    color: '#FF69B4',
    bg: 'linear-gradient(135deg, #FF9A9E, #FAD0C4, #FEE);',
    cps: 15,
    clickValue: 15,
    unlockAt: 500,
    desc: 'Explosion of color and joy! Frosted with rainbow sprinkles and pure happiness.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cg3" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#FFD5E5"/>
          <stop offset="100%" stop-color="#FFA0C8"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="#E8C4A0" stroke="#C8864A" stroke-width="2"/>
      <circle cx="50" cy="50" r="38" fill="url(#cg3)" opacity="0.9"/>
      <rect x="28" y="46" width="14" height="3.5" rx="2" fill="#FF4444" transform="rotate(-20,35,47.5)"/>
      <rect x="42" y="32" width="14" height="3.5" rx="2" fill="#FF9900" transform="rotate(10,49,33.5)"/>
      <rect x="58" y="40" width="14" height="3.5" rx="2" fill="#33CC33" transform="rotate(-30,65,41.5)"/>
      <rect x="36" y="60" width="12" height="3.5" rx="2" fill="#3399FF" transform="rotate(15,42,61.5)"/>
      <rect x="55" y="58" width="12" height="3.5" rx="2" fill="#CC44FF" transform="rotate(-10,61,59.5)"/>
      <rect x="44" y="55" width="10" height="3" rx="2" fill="#FF66AA" transform="rotate(25,49,56.5)"/>
      <rect x="60" y="52" width="10" height="3" rx="2" fill="#FF4444" transform="rotate(-15,65,53.5)"/>
      <rect x="30" y="58" width="10" height="3" rx="2" fill="#FFCC00" transform="rotate(30,35,59.5)"/>
    </svg>`
  },
  {
    id: 'galaxy',
    name: 'Galaxy Cookie',
    emoji: '🌌',
    color: '#6A0DAD',
    bg: 'linear-gradient(135deg, #1a0533, #0d0d2b)',
    cps: 50,
    clickValue: 50,
    unlockAt: 5000,
    desc: 'Baked in the cosmos itself. Infused with stardust and the secrets of the universe.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cg4" cx="40%" cy="35%">
          <stop offset="0%" stop-color="#8B2FC9"/>
          <stop offset="50%" stop-color="#2D1B69"/>
          <stop offset="100%" stop-color="#0D0528"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#cg4)" stroke="#4A0080" stroke-width="2"/>
      <circle cx="30" cy="35" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="65" cy="28" r="1" fill="white" opacity="0.8"/>
      <circle cx="72" cy="55" r="1.5" fill="white" opacity="0.9"/>
      <circle cx="40" cy="70" r="1" fill="white" opacity="0.7"/>
      <circle cx="55" cy="65" r="1.5" fill="white" opacity="0.8"/>
      <circle cx="25" cy="58" r="1" fill="#88CCFF" opacity="0.9"/>
      <circle cx="60" cy="42" r="1" fill="#FFAAFF" opacity="0.8"/>
      <circle cx="45" cy="30" r="1.5" fill="#AAFFCC" opacity="0.7"/>
      <ellipse cx="50" cy="50" rx="30" ry="8" fill="none" stroke="#CC88FF" stroke-width="1.5" opacity="0.4" transform="rotate(-20,50,50)"/>
      <ellipse cx="50" cy="50" rx="20" ry="5" fill="none" stroke="#FF88CC" stroke-width="1" opacity="0.3" transform="rotate(15,50,50)"/>
      <circle cx="50" cy="50" r="6" fill="#FFAAFF" opacity="0.6"/>
    </svg>`
  },
  {
    id: 'golden',
    name: 'Golden Cookie',
    emoji: '✨',
    color: '#FFD700',
    bg: 'linear-gradient(135deg, #FFD700, #FFA500)',
    cps: 200,
    clickValue: 200,
    unlockAt: 50000,
    desc: 'The legendary Golden Cookie. Ancient and mythical, said to grant immeasurable wealth.',
    svg: `<svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <radialGradient id="cg5" cx="35%" cy="30%">
          <stop offset="0%" stop-color="#FFF5A0"/>
          <stop offset="50%" stop-color="#FFD700"/>
          <stop offset="100%" stop-color="#B8860B"/>
        </radialGradient>
      </defs>
      <circle cx="50" cy="50" r="46" fill="url(#cg5)" stroke="#B8860B" stroke-width="2"/>
      <circle cx="50" cy="50" r="38" fill="none" stroke="#FFE566" stroke-width="1" opacity="0.6"/>
      <circle cx="50" cy="50" r="30" fill="none" stroke="#FFE566" stroke-width="0.5" opacity="0.4"/>
      <path d="M50 10 L53 40 L80 28 L60 50 L80 72 L53 60 L50 90 L47 60 L20 72 L40 50 L20 28 L47 40 Z" fill="#FFF5A0" opacity="0.3"/>
      <circle cx="35" cy="40" r="4" fill="#B8860B" opacity="0.6"/>
      <circle cx="62" cy="35" r="3.5" fill="#B8860B" opacity="0.6"/>
      <circle cx="65" cy="60" r="4" fill="#B8860B" opacity="0.6"/>
      <circle cx="38" cy="63" r="3.5" fill="#B8860B" opacity="0.6"/>
      <circle cx="50" cy="50" r="8" fill="#FFF5A0" opacity="0.5"/>
    </svg>`
  }
];

const UPGRADES = [
  { id: 'u1', name: 'Better Ovens', desc: 'Cookies are 2x more delicious', cost: 100, multiplier: 2, icon: '🔥', unlockAt: 50 },
  { id: 'u2', name: 'Grandma\'s Recipe', desc: 'Secret formula triples output', cost: 500, multiplier: 3, icon: '👵', unlockAt: 250 },
  { id: 'u3', name: 'Cookie Farm', desc: 'Grow your own cookie ingredients', cost: 2000, multiplier: 5, icon: '🌾', unlockAt: 1000 },
  { id: 'u4', name: 'Cosmic Flour', desc: 'Space-grade ingredients 10x boost', cost: 10000, multiplier: 10, icon: '🚀', unlockAt: 5000 },
  { id: 'u5', name: 'Time Machine', desc: 'Bake cookies from the future', cost: 50000, multiplier: 20, icon: '⏰', unlockAt: 25000 },
  { id: 'u6', name: 'Quantum Oven', desc: 'Bake in multiple dimensions', cost: 200000, multiplier: 50, icon: '⚛️', unlockAt: 100000 },
  { id: 'u7', name: 'Cookie Singularity', desc: 'Everything becomes cookies', cost: 1000000, multiplier: 100, icon: '🌀', unlockAt: 500000 },
];

const BUILDINGS = [
  { id: 'cursor', name: 'Auto Clicker', icon: '👆', baseCost: 15, baseCps: 0.1, count: 0 },
  { id: 'grandma', name: 'Grandma', icon: '👵', baseCost: 100, baseCps: 0.5, count: 0 },
  { id: 'farm', name: 'Cookie Farm', icon: '🌾', baseCost: 1100, baseCps: 4, count: 0 },
  { id: 'mine', name: 'Cookie Mine', icon: '⛏️', baseCost: 12000, baseCps: 10, count: 0 },
  { id: 'factory', name: 'Cookie Factory', icon: '🏭', baseCost: 130000, baseCps: 40, count: 0 },
  { id: 'lab', name: 'Cookie Lab', icon: '🔬', baseCost: 1400000, baseCps: 100, count: 0 },
];

const ACHIEVEMENTS = [
  { id: 'a1', name: 'First Bite', desc: 'Click your first cookie', icon: '🍪', req: (s) => s.totalClicks >= 1 },
  { id: 'a2', name: 'Cookie Monster', desc: 'Bake 100 cookies', icon: '😋', req: (s) => s.totalCookies >= 100 },
  { id: 'a3', name: 'Thousand Crumbs', desc: 'Bake 1,000 cookies', icon: '🎉', req: (s) => s.totalCookies >= 1000 },
  { id: 'a4', name: 'Cookie Baron', desc: 'Bake 10,000 cookies', icon: '👑', req: (s) => s.totalCookies >= 10000 },
  { id: 'a5', name: 'Bakery King', desc: 'Bake 100,000 cookies', icon: '🏆', req: (s) => s.totalCookies >= 100000 },
  { id: 'a6', name: 'Millionaire Baker', desc: 'Bake 1,000,000 cookies', icon: '💰', req: (s) => s.totalCookies >= 1000000 },
  { id: 'a7', name: 'Speed Clicker', desc: 'Click 50 times', icon: '⚡', req: (s) => s.totalClicks >= 50 },
  { id: 'a8', name: 'Upgrade Addict', desc: 'Buy 3 upgrades', icon: '🔧', req: (s) => s.upgradesBought >= 3 },
  { id: 'a9', name: 'Cookie Empire', desc: 'Own 10 buildings', icon: '🏙️', req: (s) => s.totalBuildings >= 10 },
  { id: 'a10', name: 'Galaxy Brain', desc: 'Unlock the Galaxy Cookie', icon: '🌌', req: (s) => s.totalCookies >= 5000 },
];

// Game State
let state = {
  cookies: 0,
  totalCookies: 0,
  cps: 0,
  clickValue: 1,
  multiplier: 1,
  totalClicks: 0,
  upgradesBought: 0,
  totalBuildings: 0,
  activeCookieId: 'classic',
  unlockedCookies: ['classic'],
  purchasedUpgrades: [],
  buildings: JSON.parse(JSON.stringify(BUILDINGS)),
  achievements: [],
  lastSave: Date.now(),
};

// Load saved state
function loadState() {
  try {
    const saved = localStorage.getItem('cookieClickerState');
    if (saved) {
      const parsed = JSON.parse(saved);
      Object.assign(state, parsed);
    }
  } catch(e) {}
}

// Save state
function saveState() {
  try {
    localStorage.setItem('cookieClickerState', JSON.stringify(state));
  } catch(e) {}
}

// Format large numbers
function formatNum(n) {
  if (n >= 1e12) return (n / 1e12).toFixed(2) + 'T';
  if (n >= 1e9) return (n / 1e9).toFixed(2) + 'B';
  if (n >= 1e6) return (n / 1e6).toFixed(2) + 'M';
  if (n >= 1e3) return (n / 1e3).toFixed(1) + 'K';
  return Math.floor(n).toString();
}

// Calculate CPS
function recalcCPS() {
  let cps = 0;
  state.buildings.forEach(b => {
    cps += b.count * b.baseCps;
  });
  state.cps = cps * state.multiplier;
  state.clickValue = getCurrentCookie().clickValue * state.multiplier;
}

function getCurrentCookie() {
  return COOKIE_TYPES.find(c => c.id === state.activeCookieId) || COOKIE_TYPES[0];
}

function getBuildingCost(b) {
  return Math.floor(b.baseCost * Math.pow(1.15, b.count));
}

// ===== RENDER GAME UI =====
function renderGame() {
  const gameSection = document.getElementById('game-area');
  if (!gameSection) return;

  gameSection.innerHTML = `
    <div class="game-wrapper">
      <!-- LEFT: Stats Panel -->
      <aside class="game-panel stats-panel">
        <div class="panel-header">🍪 Cookie Stats</div>
        <div class="stat-row"><span>Cookies</span><strong id="stat-cookies">0</strong></div>
        <div class="stat-row"><span>Per Second</span><strong id="stat-cps">0</strong></div>
        <div class="stat-row"><span>Per Click</span><strong id="stat-click">1</strong></div>
        <div class="stat-row"><span>Total Baked</span><strong id="stat-total">0</strong></div>
        <div class="stat-row"><span>Clicks</span><strong id="stat-clicks">0</strong></div>
        <div class="stat-row"><span>Multiplier</span><strong id="stat-mult">1x</strong></div>

        <div class="panel-header mt-16">🌟 Active Cookie</div>
        <div class="cookie-selector" id="cookieSelector"></div>

        <div class="panel-header mt-16">🏅 Achievements</div>
        <div class="achievements-mini" id="achievementsMini"></div>

        <div class="save-row">
          <button class="btn-save" onclick="saveState(); showToast('Game saved! 🍪')">💾 Save</button>
          <button class="btn-reset" onclick="confirmReset()">🔄 Reset</button>
        </div>
      </aside>

      <!-- CENTER: Main Cookie -->
      <main class="game-center">
        <div class="cookie-display-area">
          <div class="floating-particles" id="floatingParticles"></div>
          <div class="cookie-main-wrapper">
            <div class="cookie-glow" id="cookieGlow"></div>
            <div class="cookie-main" id="mainCookie" role="button" tabindex="0"
              aria-label="Click to bake cookies"
              onclick="clickCookie(event)"
              onkeydown="if(event.key==='Enter'||event.key===' ') clickCookie(event)">
              <div id="cookieSvg" class="cookie-svg-inner"></div>
            </div>
          </div>
          <div class="click-counter-display">
            <span id="bigCookieCount">0</span>
            <span class="cookie-label">cookies</span>
          </div>
          <div class="cps-display">⚡ <span id="cpsDisplay">0</span> per second</div>
        </div>

        <!-- Upgrades Panel -->
        <div class="upgrades-section">
          <h3 class="section-mini-title">🔧 Upgrades</h3>
          <div class="upgrades-grid" id="upgradesGrid"></div>
        </div>
      </main>

      <!-- RIGHT: Buildings -->
      <aside class="game-panel buildings-panel">
        <div class="panel-header">🏗️ Buildings</div>
        <div class="buildings-list" id="buildingsList"></div>
      </aside>
    </div>
  `;

  renderCookieSelector();
  renderUpgrades();
  renderBuildings();
  renderAchievements();
  updateCookieSvg();
  startGameLoop();
}

function updateCookieSvg() {
  const cookie = getCurrentCookie();
  const el = document.getElementById('cookieSvg');
  const glow = document.getElementById('cookieGlow');
  if (el) el.innerHTML = cookie.svg;
  if (glow) glow.style.background = `radial-gradient(circle, ${cookie.color}44 0%, transparent 70%)`;
}

function renderCookieSelector() {
  const el = document.getElementById('cookieSelector');
  if (!el) return;
  el.innerHTML = COOKIE_TYPES.map(c => {
    const locked = !state.unlockedCookies.includes(c.id);
    return `
      <div class="cookie-chip ${state.activeCookieId === c.id ? 'active' : ''} ${locked ? 'locked' : ''}"
        onclick="${locked ? `showToast('Unlock at ${formatNum(c.unlockAt)} total cookies!')` : `selectCookie('${c.id}')`}"
        title="${c.name}${locked ? ' (Locked: '+formatNum(c.unlockAt)+' cookies)' : ''}">
        ${locked ? '🔒' : c.emoji}
      </div>
    `;
  }).join('');
}

function selectCookie(id) {
  state.activeCookieId = id;
  recalcCPS();
  renderCookieSelector();
  updateCookieSvg();
  saveState();
}

function renderUpgrades() {
  const el = document.getElementById('upgradesGrid');
  if (!el) return;
  el.innerHTML = UPGRADES.map(u => {
    const bought = state.purchasedUpgrades.includes(u.id);
    const available = state.totalCookies >= u.unlockAt;
    const canAfford = state.cookies >= u.cost;
    if (!available) return '';
    return `
      <div class="upgrade-card ${bought ? 'bought' : ''} ${!canAfford && !bought ? 'cant-afford' : ''}"
        onclick="${bought ? '' : `buyUpgrade('${u.id}')`}"
        title="${u.desc}">
        <span class="upgrade-icon">${u.icon}</span>
        <div class="upgrade-info">
          <div class="upgrade-name">${u.name}</div>
          <div class="upgrade-cost">${bought ? '✅ Owned' : '🍪 ' + formatNum(u.cost)}</div>
        </div>
      </div>
    `;
  }).join('') || '<p class="muted-text">Keep clicking to unlock upgrades!</p>';
}

function renderBuildings() {
  const el = document.getElementById('buildingsList');
  if (!el) return;
  el.innerHTML = state.buildings.map(b => {
    const cost = getBuildingCost(b);
    const canAfford = state.cookies >= cost;
    return `
      <div class="building-row ${canAfford ? 'can-afford' : ''}" onclick="buyBuilding('${b.id}')">
        <span class="building-icon">${b.icon}</span>
        <div class="building-info">
          <div class="building-name">${b.name}</div>
          <div class="building-meta">🍪 ${formatNum(cost)} • ${b.baseCps}/s each</div>
        </div>
        <div class="building-count">${b.count}</div>
      </div>
    `;
  }).join('');
}

function renderAchievements() {
  const el = document.getElementById('achievementsMini');
  if (!el) return;
  el.innerHTML = ACHIEVEMENTS.map(a => {
    const earned = state.achievements.includes(a.id);
    return `<span class="achievement-badge ${earned ? 'earned' : 'locked'}" title="${a.name}: ${a.desc}">${earned ? a.icon : '🔒'}</span>`;
  }).join('');
}

// ===== GAME ACTIONS =====
function clickCookie(event) {
  state.cookies += state.clickValue;
  state.totalCookies += state.clickValue;
  state.totalClicks++;

  updateStats();
  spawnClickParticle(event);
  animateMainCookie();
  checkUnlocks();
  checkAchievements();
}

function buyUpgrade(id) {
  const u = UPGRADES.find(x => x.id === id);
  if (!u || state.purchasedUpgrades.includes(u.id)) return;
  if (state.cookies < u.cost) { showToast('Not enough cookies! 🍪'); return; }
  state.cookies -= u.cost;
  state.multiplier *= u.multiplier;
  state.purchasedUpgrades.push(u.id);
  state.upgradesBought++;
  recalcCPS();
  updateStats();
  renderUpgrades();
  renderBuildings();
  showToast(`${u.icon} ${u.name} purchased! x${u.multiplier} boost!`);
  checkAchievements();
  saveState();
}

function buyBuilding(id) {
  const b = state.buildings.find(x => x.id === id);
  if (!b) return;
  const cost = getBuildingCost(b);
  if (state.cookies < cost) { showToast('Not enough cookies! 🍪'); return; }
  state.cookies -= cost;
  b.count++;
  state.totalBuildings++;
  recalcCPS();
  updateStats();
  renderBuildings();
  checkAchievements();
  saveState();
}

function confirmReset() {
  if (confirm('Reset all progress? This cannot be undone! 🍪')) {
    localStorage.removeItem('cookieClickerState');
    location.reload();
  }
}

// ===== GAME LOOP =====
let lastTick = Date.now();
function startGameLoop() {
  setInterval(() => {
    const now = Date.now();
    const dt = (now - lastTick) / 1000;
    lastTick = now;

    const earned = state.cps * dt;
    state.cookies += earned;
    state.totalCookies += earned;

    updateStats();
    checkUnlocks();
    checkAchievements();
  }, 100);

  // Auto-save
  setInterval(saveState, 30000);
}

function updateStats() {
  const set = (id, v) => { const el = document.getElementById(id); if (el) el.textContent = v; };
  set('stat-cookies', formatNum(state.cookies));
  set('stat-cps', formatNum(state.cps));
  set('stat-click', formatNum(state.clickValue));
  set('stat-total', formatNum(state.totalCookies));
  set('stat-clicks', formatNum(state.totalClicks));
  set('stat-mult', state.multiplier.toFixed(0) + 'x');
  set('bigCookieCount', formatNum(state.cookies));
  set('cpsDisplay', formatNum(state.cps));
}

function checkUnlocks() {
  COOKIE_TYPES.forEach(c => {
    if (state.totalCookies >= c.unlockAt && !state.unlockedCookies.includes(c.id)) {
      state.unlockedCookies.push(c.id);
      showToast(`🎉 New cookie unlocked: ${c.name}!`);
      renderCookieSelector();
    }
  });
}

function checkAchievements() {
  let changed = false;
  ACHIEVEMENTS.forEach(a => {
    if (!state.achievements.includes(a.id) && a.req(state)) {
      state.achievements.push(a.id);
      showToast(`🏅 Achievement: ${a.name}!`);
      changed = true;
    }
  });
  if (changed) renderAchievements();
}

// ===== ANIMATIONS =====
function animateMainCookie() {
  const el = document.getElementById('mainCookie');
  if (!el) return;
  el.classList.remove('clicked');
  void el.offsetWidth;
  el.classList.add('clicked');
}

function spawnClickParticle(event) {
  const container = document.querySelector('.game-center');
  if (!container) return;
  const rect = container.getBoundingClientRect();

  const particle = document.createElement('div');
  particle.className = 'click-particle';
  particle.textContent = '+' + formatNum(state.clickValue);

  const x = event.clientX ? event.clientX - rect.left : 200;
  const y = event.clientY ? event.clientY - rect.top : 200;
  particle.style.left = x + 'px';
  particle.style.top = y + 'px';

  container.appendChild(particle);
  setTimeout(() => particle.remove(), 1000);
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.createElement('div');
  t.className = 'game-toast';
  t.textContent = msg;
  document.body.appendChild(t);
  setTimeout(() => t.classList.add('show'), 10);
  setTimeout(() => { t.classList.remove('show'); setTimeout(() => t.remove(), 300); }, 2500);
}

// ===== LEADERBOARD (demo) =====
const DEMO_LEADERS = [
  { name: 'CookieLord99', cookies: 9823456789 },
  { name: 'BakeMaster', cookies: 4523100000 },
  { name: 'ChocoDragon', cookies: 2100034500 },
  { name: 'GrannyBaker', cookies: 987654321 },
  { name: 'You', cookies: 0 },
];

function renderLeaderboard() {
  const el = document.getElementById('leaderboardTable');
  if (!el) return;
  const leaders = [...DEMO_LEADERS];
  leaders[4].cookies = Math.floor(state.totalCookies);
  leaders.sort((a,b) => b.cookies - a.cookies);
  el.innerHTML = leaders.map((l, i) => `
    <tr class="${l.name === 'You' ? 'you-row' : ''}">
      <td class="rank">${i === 0 ? '🥇' : i === 1 ? '🥈' : i === 2 ? '🥉' : '#'+(i+1)}</td>
      <td>${l.name}</td>
      <td class="score">${formatNum(l.cookies)} 🍪</td>
    </tr>
  `).join('');
}

// Init
document.addEventListener('DOMContentLoaded', () => {
  loadState();
  recalcCPS();
  renderGame();
  setTimeout(renderLeaderboard, 500);

  // Update leaderboard periodically
  setInterval(renderLeaderboard, 5000);
});
