// ═══════════════════════════════════════════════════════
//  SCORE CALCULATOR JS
// ═══════════════════════════════════════════════════════

const state = {
  m1p:0, m1b:0, m2:0, m3c:0, m3b:0, m4a:0, m4s:0, m5:0,
  m6:0, m7:0, m8:0, m9r:0, m9i:0, m10t:0, m10k:0, m11e:0,
  m11b:0, m12k:0, m12g:0, m13:0, m14:0, m15:0
};

// Per-mission point calculations
const missionCalc = {
  m01: () => (state.m1p * 10) + state.m1b,
  m02: () => state.m2 * 10,
  m03: () => state.m3c + state.m3b,
  m04: () => state.m4a + state.m4s,
  m05: () => state.m5,
  m06: () => state.m6 * 10,
  m07: () => state.m7,
  m08: () => state.m8 * 10,
  m09: () => state.m9r + state.m9i,
  m10: () => state.m10t + state.m10k,
  m11: () => state.m11e + state.m11b,
  m12: () => state.m12k + state.m12g,
  m13: () => state.m13,
  m14: () => state.m14 * 5,
  m15: () => state.m15 * 10,
};

function u(k, v) {
  state[k] = parseInt(v) || 0;
  calc();
}

function calc() {
  let missions = 0;
  for (const key in missionCalc) {
    const pts = missionCalc[key]();
    missions += pts;
    const el = document.getElementById('pts-' + key);
    if (el) {
      el.textContent = pts;
      const card = document.getElementById('M' + key.slice(1).toUpperCase().replace(/^0/, ''));
      // Update card M01–M15
    }
  }

  // Update per-mission displays
  for (let i = 1; i <= 15; i++) {
    const id = 'pts-m' + String(i).padStart(2, '0');
    const el = document.getElementById(id);
    if (el) {
      const mKey = 'm' + String(i).padStart(2, '0');
      const pts = missionCalc[mKey] ? missionCalc[mKey]() : 0;
      el.textContent = pts;

      // Highlight mission card if has points
      const cardId = 'M' + String(i).padStart(2, '0');
      const card = document.getElementById(cardId);
      if (card) card.classList.toggle('has-points', pts > 0);
    }
  }

  const inspect   = parseInt(document.getElementById('inspect').value)   || 0;
  const precision = parseInt(document.getElementById('precision').value) || 0;
  const total     = missions + inspect + precision;

  document.getElementById('total').textContent = total;
  document.getElementById('breakdown-missions').textContent  = missions;
  document.getElementById('breakdown-inspect').textContent   = inspect;
  document.getElementById('breakdown-precision').textContent = precision;

  updateMarkers();

  // Pulse animation on change
  const scoreEl = document.getElementById('total');
  scoreEl.style.transform = 'scale(1.08)';
  setTimeout(() => { scoreEl.style.transform = ''; }, 200);
}

function resetAll() {
  if (!confirm('Reset all mission values?')) return;
  for (const k in state) state[k] = 0;

  // Reset all selects
  document.querySelectorAll('.mc select').forEach(s => s.selectedIndex = 0);
  document.querySelectorAll('.mc input[type="number"]').forEach(i => i.value = 0);

  // Reset controls
  document.getElementById('inspect').selectedIndex   = 0;
  document.getElementById('precision').selectedIndex = 0;

  calc();
}

// ─── SAVE MODAL ───────────────────────────────────────
function openSaveModal() {
  const total = document.getElementById('total').textContent;
  document.getElementById('modal-score').textContent = total;
  document.getElementById('saveModal').classList.add('open');
}

function closeSaveModal() {
  document.getElementById('saveModal').classList.remove('open');
  document.getElementById('scoreNote').value = '';
}

async function saveScore() {
  const total   = parseInt(document.getElementById('total').textContent);
  const note    = document.getElementById('scoreNote').value.trim();
  const inspect = document.getElementById('inspect').value;
  const precision = document.getElementById('precision').value;

  try {
    const res = await fetch('/api/scores/save', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ total, state: { ...state }, inspect, precision, note })
    });

    const data = await res.json();

    if (data.success) {
      closeSaveModal();
      showToast('Score saved! ✅', 'success');
      loadHistory();
    } else {
      showToast('Failed to save score.', 'error');
    }
  } catch (err) {
    showToast('Network error saving score.', 'error');
  }
}

// ─── HISTORY ──────────────────────────────────────────
async function loadHistory() {
  const listEl = document.getElementById('historyList');
  listEl.innerHTML = '<div class="history-empty">Loading...</div>';

  try {
    const res = await fetch('/api/scores/list');
    const scores = await res.json();

    if (!scores.length) {
      listEl.innerHTML = '<div class="history-empty">No saved scores yet.</div>';
      return;
    }

    listEl.innerHTML = scores.map(s => {
      const d = new Date(s.timestamp);
      const dateStr = d.toLocaleDateString() + ' ' + d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      return `
        <div class="history-item">
          <div class="hi-meta">
            <div class="hi-score">${s.total} pts</div>
            <div class="hi-note">${s.note || '—'}</div>
            <div class="hi-date">${dateStr} · ${s.user}</div>
          </div>
          <button class="hi-delete" onclick="deleteScore('${s.id}')" title="Delete">🗑</button>
        </div>
      `;
    }).join('');

  } catch (err) {
    listEl.innerHTML = '<div class="history-empty">Error loading history.</div>';
  }
}

async function deleteScore(id) {
  if (!confirm('Delete this score?')) return;
  try {
    await fetch('/api/scores/delete/' + id, { method: 'DELETE' });
    loadHistory();
  } catch {
    showToast('Could not delete score.', 'error');
  }
}

// ─── EXCEL EXPORT ─────────────────────────────────────
function exportToExcel() {
  if (typeof XLSX === 'undefined') {
    showToast('XLSX library not loaded.', 'error');
    return;
  }

  const wb   = XLSX.utils.book_new();
  const now  = new Date();
  const total = document.getElementById('total').textContent;
  const inspect   = document.getElementById('inspect').value;
  const precisionEl = document.getElementById('precision');
  const precisionText = precisionEl.options[precisionEl.selectedIndex].text;

  const data = [
    ['FLL Unearthed Score Calculator — The Flintstones'],
    ['Date & Time:', now.toLocaleString()],
    ['Total Score:', total],
    [],
    ['Mission', 'Status', 'Points'],
    ['Equipment Inspection', inspect === '20' ? 'Passed' : 'Failed', inspect],
    ['Precision Tokens', precisionText, document.getElementById('precision').value],
    ['M01: Surface Excavation', `Deposits: ${state.m1p}, Brush: ${state.m1b > 0 ? 'Yes' : 'No'}`, missionCalc.m01()],
    ['M02: Map Reveal', `Sections: ${state.m2}`, missionCalc.m02()],
    ['M03: Mine Cart Explorer', `Cart: ${state.m3c > 0 ? 'Yes' : 'No'}, Bonus: ${state.m3b > 0 ? 'Yes' : 'No'}`, missionCalc.m03()],
    ['M04: Careful Rescue', `Artifact: ${state.m4a > 0 ? 'Yes' : 'No'}, Supports: ${state.m4s > 0 ? 'Yes' : 'No'}`, missionCalc.m04()],
    ['M05: Who Lived Here?', state.m5 > 0 ? 'Complete' : 'Incomplete', missionCalc.m05()],
    ['M06: Smelter', `Blocks: ${state.m6}`, missionCalc.m06()],
    ['M07: Weight Lifting', state.m7 > 0 ? 'Yes' : 'No', missionCalc.m07()],
    ['M08: Storage', `Items: ${state.m8}`, missionCalc.m08()],
    ['M09: What\'s For Sale?', `Roof: ${state.m9r > 0 ? 'Yes' : 'No'}, Products: ${state.m9i > 0 ? 'Yes' : 'No'}`, missionCalc.m09()],
    ['M10: Tip the Scale', `Scale: ${state.m10t > 0 ? 'Yes' : 'No'}, Pan: ${state.m10k > 0 ? 'Yes' : 'No'}`, missionCalc.m10()],
    ['M11: Fishing Artifacts', `Artifacts: ${state.m11e > 0 ? 'Yes' : 'No'}, Flag: ${state.m11b > 0 ? 'Yes' : 'No'}`, missionCalc.m11()],
    ['M12: Rescue Operation', `Sand: ${state.m12k > 0 ? 'Yes' : 'No'}, Ship: ${state.m12g > 0 ? 'Yes' : 'No'}`, missionCalc.m12()],
    ['M13: Statue Rebuild', state.m13 > 0 ? 'Yes' : 'No', missionCalc.m13()],
    ['M14: Forum', `Artifacts: ${state.m14}`, missionCalc.m14()],
    ['M15: Area Marking', `Areas: ${state.m15}`, missionCalc.m15()],
  ];

  const ws = XLSX.utils.aoa_to_sheet(data);
  ws['!cols'] = [{ wch: 28 }, { wch: 30 }, { wch: 10 }];
  XLSX.utils.book_append_sheet(wb, ws, 'FLL Score');

  const fname = `FLL_Score_${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())}_${pad(now.getHours())}-${pad(now.getMinutes())}.xlsx`;
  XLSX.writeFile(wb, fname);
  showToast('Excel exported! 📊', 'success');
}

function pad(n) { return String(n).padStart(2, '0'); }

// ─── TOAST NOTIFICATIONS ──────────────────────────────
function showToast(msg, type = 'info') {
  const container = document.querySelector('.flash-container') || (() => {
    const c = document.createElement('div');
    c.className = 'flash-container';
    document.body.appendChild(c);
    return c;
  })();

  const toast = document.createElement('div');
  toast.className = `flash flash-${type}`;
  toast.textContent = msg;
  container.appendChild(toast);

  setTimeout(() => toast.remove(), 4000);
  toast.addEventListener('click', () => toast.remove());
}

// ─── MODAL KEYBOARD ───────────────────────────────────
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeSaveModal();
});

document.getElementById('saveModal')?.addEventListener('click', e => {
  if (e.target === document.getElementById('saveModal')) closeSaveModal();
});

// ─── MAP JUMP ─────────────────────────────────────────
function jumpTo(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  el.classList.add('flash-highlight');
  setTimeout(() => el.classList.remove('flash-highlight'), 1200);
}

// Update map markers green when a mission has points
function updateMarkers() {
  const markerMap = {
    'M01': () => missionCalc.m01() > 0,
    'M02': () => missionCalc.m02() > 0,
    'M03': () => missionCalc.m03() > 0,
    'M04': () => missionCalc.m04() > 0,
    'M05': () => missionCalc.m05() > 0,
    'M06': () => missionCalc.m06() > 0,
    'M07': () => missionCalc.m07() > 0,
    'M08': () => missionCalc.m08() > 0,
    'M09': () => missionCalc.m09() > 0,
    'M10': () => missionCalc.m10() > 0,
    'M11': () => missionCalc.m11() > 0,
    'M12': () => missionCalc.m12() > 0,
    'M13': () => missionCalc.m13() > 0,
    'M14': () => missionCalc.m14() > 0,
    'M15': () => missionCalc.m15() > 0,
  };

  document.querySelectorAll('.mat-marker').forEach((marker, i) => {
    const num = String(i + 1).padStart(2, '0');
    const key = 'M' + num;
    if (markerMap[key] && markerMap[key]()) {
      marker.classList.add('done');
    } else {
      marker.classList.remove('done');
    }
  });
}

// ─── SCROLL TO MISSION ────────────────────────────────
function scrollToMission(id) {
  const el = document.getElementById(id);
  if (!el) return;

  // Scroll card into view
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Flash highlight on card
  el.style.transition = 'background 0.2s';
  el.style.background = 'rgba(212,169,41,0.18)';
  setTimeout(() => { el.style.background = ''; }, 900);

  // Pulse the clicked marker
  const num = id.replace('M', '').replace(/^0/, '');
  document.querySelectorAll('.mat-marker').forEach(m => {
    if (m.textContent.trim() === id.replace('M', '')) {
      m.classList.add('active');
      setTimeout(() => m.classList.remove('active'), 700);
    }
  });
}

// ─── MAP SCROLL ───────────────────────────────────────
function scrollToMission(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'center' });

  // Highlight card briefly
  el.style.transition = 'box-shadow 0.3s, border-color 0.3s';
  el.style.borderColor = 'var(--gold)';
  el.style.boxShadow = '0 0 0 3px rgba(212,169,41,0.4)';
  setTimeout(() => {
    el.style.borderColor = '';
    el.style.boxShadow = '';
  }, 1400);

  // Highlight corresponding marker
  const num = id.replace('M', '').replace(/^0/, '');
  document.querySelectorAll('.mat-marker').forEach(m => {
    m.classList.toggle('active', m.textContent.trim() === id.replace('M', ''));
  });
  setTimeout(() => document.querySelectorAll('.mat-marker').forEach(m => m.classList.remove('active')), 1400);
}

// ─── INIT ─────────────────────────────────────────────
calc();
loadHistory();
