// ============================================================
// MOBILE-PODERES-COMBATE.JS
// Injeta o layout mobile (sub-abas + m-cards) nas tabs
// Poderes e Combate & Inventário.
// Carregue DEPOIS de script.js no index.html:
//   <script src="mobile-poderes-combate.js"></script>
// ============================================================

(function () {
  const BREAK = 480;

  function isMobile() { return window.innerWidth <= BREAK; }

  // ── Cria wrapper mobile para a tab Poderes ─────────────────
  function criarWrapperPoderes() {
    if (document.getElementById('mobile-poderes-wrapper')) return;
    const tab = document.getElementById('tab-poderes');
    if (!tab) return;

    const w = document.createElement('div');
    w.id = 'mobile-poderes-wrapper';
    w.innerHTML = `
      <div class="sub-tabs" id="subTabsPoderes">
        <button class="sub-tab-btn active" onclick="subSwitch('poderes','habs',this)">Habilidades</button>
        <button class="sub-tab-btn" onclick="subSwitch('poderes','rits',this)">Rituais</button>
        <button class="sub-tab-btn" onclick="subSwitch('poderes','para',this)">Paranormais</button>
      </div>

      <div class="sub-panel active" id="mSubHabs">
        <button class="m-add-btn" onclick="addHab();renderMobileHabs()">+ Habilidade</button>
        <div class="m-add-btn" onclick="abrirModalHab()" style="border-style:solid;border-color:var(--gold);color:var(--gold);">
          📖 Do Livro
        </div>
        <div id="mHabList"></div>
      </div>

      <div class="sub-panel" id="mSubRits">
        <button class="m-add-btn rit" onclick="addRit();renderMobileRits()">+ Ritual</button>
        <div class="m-add-btn rit" onclick="abrirModalRit()" style="border-style:solid;">
          📖 Do Livro
        </div>
        <div id="mRitList"></div>
      </div>

      <div class="sub-panel" id="mSubPara">
        <button class="m-add-btn para" onclick="addParanormal();renderMobilePara()">+ Poder</button>
        <div class="m-add-btn para" onclick="abrirModalParanormal()" style="border-style:solid;">
          📖 Do Livro
        </div>
        <div id="mParaList"></div>
      </div>
    `;
    tab.appendChild(w);
  }

  // ── Cria wrapper mobile para a tab Combate ─────────────────
  function criarWrapperCombate() {
    if (document.getElementById('mobile-combate-wrapper')) return;
    const tab = document.getElementById('tab-combate');
    if (!tab) return;

    const w = document.createElement('div');
    w.id = 'mobile-combate-wrapper';
    w.innerHTML = `
      <div class="sub-tabs" id="subTabsCombate">
        <button class="sub-tab-btn active" onclick="subSwitch('combate','atks',this)">Ataques</button>
        <button class="sub-tab-btn" onclick="subSwitch('combate','inv',this)">Inventário</button>
        <button class="sub-tab-btn" onclick="subSwitch('combate','log',this)">Rolagens</button>
      </div>

      <div class="sub-panel active" id="mSubAtks">
        <button class="m-add-btn" onclick="addAtk();renderMobileAtks()">+ Ataque</button>
        <div id="mAtkList"></div>
      </div>

      <div class="sub-panel" id="mSubInv">
        <div id="mPesoBar"></div>
        <div id="mInvList"></div>
        <button class="m-add-btn" onclick="addItem();renderMobileInv()">+ Item</button>
      </div>

      <div class="sub-panel" id="mSubLog">
        <div id="mLogList" class="m-log-list"></div>
      </div>
    `;
    tab.appendChild(w);
  }

  // ── Sub-tab switcher ───────────────────────────────────────
  window.subSwitch = function (tab, sub, btn) {
    const wrapId = tab === 'poderes' ? 'mobile-poderes-wrapper' : 'mobile-combate-wrapper';
    const wrap = document.getElementById(wrapId);
    if (!wrap) return;
    wrap.querySelectorAll('.sub-panel').forEach(p => p.classList.remove('active'));
    wrap.querySelectorAll('.sub-tab-btn').forEach(b => b.classList.remove('active'));
    const panelMap = {
      habs: 'mSubHabs', rits: 'mSubRits', para: 'mSubPara',
      atks: 'mSubAtks', inv: 'mSubInv', log: 'mSubLog'
    };
    const panel = document.getElementById(panelMap[sub]);
    if (panel) panel.classList.add('active');
    btn.classList.add('active');
    // Renderizar ao trocar
    if (sub === 'habs') renderMobileHabs();
    if (sub === 'rits') renderMobileRits();
    if (sub === 'para') renderMobilePara();
    if (sub === 'atks') renderMobileAtks();
    if (sub === 'inv')  renderMobileInv();
    if (sub === 'log')  renderMobileLog();
  };

  // ── Toggle de m-card ───────────────────────────────────────
  window.mCardToggle = function (el) {
    el.closest('.m-card').classList.toggle('open');
  };

  // ── RENDER: Habilidades ────────────────────────────────────
  window.renderMobileHabs = function () {
    if (!isMobile()) return;
    const list = document.getElementById('mHabList');
    if (!list) return;
    const items = document.getElementById('habCont')?.children || [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhuma habilidade</p>';
      return;
    }
    Array.from(items).forEach((orig, i) => {
      const nome = orig.querySelector('.hab-nome')?.value || 'Habilidade';
      const desc = orig.querySelector('.hab-desc')?.value || '';
      const card = document.createElement('div');
      card.className = 'm-card';
      card.innerHTML = `
        <div class="m-card-header" onclick="mCardToggle(this)">
          <div class="m-card-icon m-card-icon-gold">✦</div>
          <div class="m-card-info">
            <div class="m-card-name">${nome}</div>
            <div class="m-card-meta">Habilidade</div>
          </div>
          <span class="m-card-chevron">▶</span>
          <button class="btn-del" onclick="event.stopPropagation();orig${i}Remove()" style="font-size:0.7em;padding:3px 7px;">🗑</button>
        </div>
        <div class="m-card-body">
          <p>${desc}</p>
        </div>`;
      list.appendChild(card);
      // fechar ao deletar
      window[`orig${i}Remove`] = () => {
        orig.remove();
        triggerSalvar();
        renderMobileHabs();
      };
    });
  };

  // ── RENDER: Rituais ────────────────────────────────────────
  window.renderMobileRits = function () {
    if (!isMobile()) return;
    const list = document.getElementById('mRitList');
    if (!list) return;
    const items = document.getElementById('ritCont')?.children || [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhum ritual</p>';
      return;
    }
    Array.from(items).forEach((orig, i) => {
      const nome = orig.querySelector('.rit-nome')?.value || 'Ritual';
      const elem = orig.querySelector('.rit-elem')?.value || '';
      const circ = orig.querySelector('.rit-circ')?.value || '1';
      const execN = orig.querySelector('.rit-version[data-tab="normal"] select:nth-child(1)')?.value || '—';
      const alcN  = orig.querySelector('.rit-version[data-tab="normal"] select:nth-child(2)')?.value || '—';
      const durN  = orig.querySelector('.rit-version[data-tab="normal"] select:nth-child(3)')?.value || '—';
      const peN   = orig.querySelector('.rit-version[data-tab="normal"] input[type="number"]')?.value || '?';
      const descN = orig.querySelector('.rit-version[data-tab="normal"] textarea')?.value || '';
      const elemCls = elem.toLowerCase().replace('ê','e').replace('é','e').replace(/[^a-z]/g, '');
      const card = document.createElement('div');
      card.className = 'm-card';
      card.innerHTML = `
        <div class="m-card-header" onclick="mCardToggle(this)">
          <div class="m-card-icon m-card-icon-purp">🌀</div>
          <div class="m-card-info">
            <div class="m-card-name">${nome}</div>
            <div class="m-card-meta">${circ}° Círculo · ${elem}</div>
          </div>
          <span class="m-card-badge m-card-badge-purp">${peN} PE</span>
          <span class="m-card-chevron">▶</span>
          <button class="btn-del" onclick="event.stopPropagation();origRit${i}Remove()" style="font-size:0.7em;padding:3px 7px;">🗑</button>
        </div>
        <div class="m-card-body">
          <div class="m-elem-pills"><span class="m-elem-pill m-elem-${elemCls}">${elem}</span></div>
          <div class="m-rit-stats">
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">Exec</span><span class="m-rit-stat-val">${execN}</span></div>
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">Alc</span><span class="m-rit-stat-val">${alcN}</span></div>
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">Dur</span><span class="m-rit-stat-val">${durN}</span></div>
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">PE</span><span class="m-rit-stat-val">${peN}</span></div>
          </div>
          <div class="m-rit-tabs">
            <button class="m-rit-tab active" onclick="mRitSwitch(this,'normal',${i})">Normal</button>
            <button class="m-rit-tab" onclick="mRitSwitch(this,'discente',${i})">Discente</button>
            <button class="m-rit-tab" onclick="mRitSwitch(this,'verdadeiro',${i})">Verdadeiro</button>
          </div>
          <div id="mRitDesc_normal_${i}" class="m-rit-version active"><p>${descN}</p></div>
          <div id="mRitDesc_discente_${i}" class="m-rit-version">
            <p>${orig.querySelector('.rit-version[data-tab="discente"] textarea')?.value || '—'}</p>
          </div>
          <div id="mRitDesc_verdadeiro_${i}" class="m-rit-version">
            <p>${orig.querySelector('.rit-version[data-tab="verdadeiro"] textarea')?.value || '—'}</p>
          </div>
          <div class="m-card-actions">
            <button class="m-card-action-btn primary" onclick="conjurarRitualMobile(${i})">⚡ Conjurar</button>
          </div>
        </div>`;
      list.appendChild(card);
      window[`origRit${i}Remove`] = () => { orig.remove(); triggerSalvar(); renderMobileRits(); };
    });
  };

  window.mRitSwitch = function (btn, tab, idx) {
    const body = btn.closest('.m-card-body');
    body.querySelectorAll('.m-rit-tab').forEach(b => b.classList.remove('active'));
    body.querySelectorAll('.m-rit-version').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    const v = document.getElementById(`mRitDesc_${tab}_${idx}`);
    if (v) v.classList.add('active');
  };

  window.conjurarRitualMobile = function (idx) {
    const orig = document.getElementById('ritCont')?.children[idx];
    if (!orig) return;
    const btn = orig.querySelector('.coll-body button[onclick*="conjurarRitual"]');
    if (btn) btn.click();
    else if (typeof conjurarRitual === 'function') conjurarRitual(orig.querySelector('.coll-body'));
  };

  // ── RENDER: Paranormais ────────────────────────────────────
  window.renderMobilePara = function () {
    if (!isMobile()) return;
    const list = document.getElementById('mParaList');
    if (!list) return;
    const items = document.getElementById('paranormalCont')?.children || [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhum poder</p>';
      return;
    }
    Array.from(items).forEach((orig, i) => {
      const nome = orig.querySelector('.paranormal-nome')?.value || 'Poder';
      const desc = orig.querySelector('.paranormal-desc')?.value || '';
      const card = document.createElement('div');
      card.className = 'm-card';
      card.innerHTML = `
        <div class="m-card-header" onclick="mCardToggle(this)">
          <div class="m-card-icon m-card-icon-red">👻</div>
          <div class="m-card-info">
            <div class="m-card-name">${nome}</div>
            <div class="m-card-meta">Paranormal</div>
          </div>
          <span class="m-card-chevron">▶</span>
          <button class="btn-del" onclick="event.stopPropagation();origPara${i}Remove()" style="font-size:0.7em;padding:3px 7px;">🗑</button>
        </div>
        <div class="m-card-body"><p>${desc}</p></div>`;
      list.appendChild(card);
      window[`origPara${i}Remove`] = () => { orig.remove(); triggerSalvar(); renderMobilePara(); };
    });
  };

  // ── RENDER: Ataques ────────────────────────────────────────
  window.renderMobileAtks = function () {
    if (!isMobile()) return;
    const list = document.getElementById('mAtkList');
    if (!list) return;
    const items = document.getElementById('atkCont')?.children || [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhum ataque</p>';
      return;
    }
    Array.from(items).forEach((orig, i) => {
      const nome   = orig.querySelector('.atk-nome')?.value || 'Ataque';
      const habil  = orig.querySelector('.atk-habil')?.value || 'luta';
      const ba     = orig.querySelector('.ba')?.value || '0';
      const dados  = orig.querySelector('.atk-ds')?.value || '1d6';
      const bd     = orig.querySelector('.bd')?.value || '0';
      const card = document.createElement('div');
      card.className = `m-atk-card ${habil}`;
      card.innerHTML = `
        <div class="m-atk-header">
          <span class="m-atk-name">${nome}</span>
          <span class="m-atk-type">${habil.toUpperCase()}</span>
          <button class="btn-del" onclick="this.closest('.m-atk-card').remove();origAtk${i}.remove();triggerSalvar();renderMobileAtks()" style="font-size:0.7em;padding:3px 7px;margin-left:6px;">🗑</button>
        </div>
        <div class="m-atk-body">
          <div class="m-atk-field"><label>Bônus Ataque</label><input type="number" value="${ba}" oninput="syncAtkField(${i},'ba',this.value)"></div>
          <div class="m-atk-field"><label>Dado Dano</label>
            <select onchange="syncAtkField(${i},'ds',this.value)">
              ${['1d4','1d6','1d8','1d10','1d12','2d6','2d8','3d6'].map(d=>`<option${d===dados?' selected':''}>${d}</option>`).join('')}
            </select>
          </div>
          <div class="m-atk-field"><label>Bônus Dano</label><input type="number" value="${bd}" oninput="syncAtkField(${i},'bd',this.value)"></div>
          <div class="m-atk-field"><label>Perícia</label>
            <select onchange="syncAtkField(${i},'habil',this.value)">
              <option${habil==='luta'?' selected':''}>luta</option>
              <option${habil==='pontaria'?' selected':''}>pontaria</option>
            </select>
          </div>
        </div>
        <div class="m-atk-actions">
          <button class="m-atk-btn primary-atk" onclick="rolarA_orig(${i})">🎲 Atacar</button>
          <button class="m-atk-btn" onclick="rolarD_orig(${i})">🎲 Dano</button>
        </div>`;
      list.appendChild(card);
      // guardar referência ao original
      window[`origAtk${i}`] = orig;
    });
  };

  window.syncAtkField = function (idx, field, val) {
    const orig = document.getElementById('atkCont')?.children[idx];
    if (!orig) return;
    if (field === 'ba') { const el = orig.querySelector('.ba'); if (el) el.value = val; }
    if (field === 'ds') { const el = orig.querySelector('.atk-ds'); if (el) el.value = val; }
    if (field === 'bd') { const el = orig.querySelector('.bd'); if (el) el.value = val; }
    if (field === 'habil') { const el = orig.querySelector('.atk-habil'); if (el) { el.value = val; atuAtkMeta(el); } }
    triggerSalvar();
  };

  window.rolarA_orig = function (idx) {
    const orig = document.getElementById('atkCont')?.children[idx];
    if (!orig) return;
    const btn = orig.querySelector('.btn-ra');
    if (btn) btn.click();
  };
  window.rolarD_orig = function (idx) {
    const orig = document.getElementById('atkCont')?.children[idx];
    if (!orig) return;
    const btn = orig.querySelector('.btn-rd');
    if (btn) btn.click();
  };

  // ── RENDER: Inventário ─────────────────────────────────────
  window.renderMobileInv = function () {
    if (!isMobile()) return;
    const pesoDiv = document.getElementById('mPesoBar');
    const listDiv = document.getElementById('mInvList');
    if (!pesoDiv || !listDiv) return;

    const usado  = typeof calcPesoInventario === 'function' ? calcPesoInventario() : 0;
    const cap    = typeof calcCapacidadeInventario === 'function' ? calcCapacidadeInventario() : 2;
    const pct    = Math.max(0, Math.min(100, Math.round((usado / Math.max(1, cap)) * 100)));
    const livre  = cap - usado;
    const danger = usado > cap;

    pesoDiv.innerHTML = `
      <div class="m-peso-bar">
        <div class="m-peso-top">
          <span class="m-peso-lbl">Carga</span>
          <span class="m-peso-num">${usado} <span>/ ${cap}</span></span>
        </div>
        <div class="m-peso-track"><div class="m-peso-fill${danger?' danger':''}" style="width:${pct}%"></div></div>
        <div class="m-peso-sub"><span>${livre} livre${livre!==1?'s':''}</span><span>For × 5</span></div>
      </div>`;

    const items = document.getElementById('invCont')?.children || [];
    listDiv.innerHTML = '';
    if (!items.length) {
      listDiv.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Inventário vazio</p>';
      return;
    }
    const table = document.createElement('div');
    table.className = 'm-inv-table';
    table.innerHTML = `<div class="m-inv-thead"><div>Item</div><div style="text-align:center">Qtd</div><div style="text-align:center">Cat</div><div></div></div>`;
    Array.from(items).forEach((orig, i) => {
      const nome = orig.querySelector('.inv-ni')?.value || '—';
      const qtd  = orig.querySelector('.inv-qtd')?.value || '1';
      const cat  = orig.querySelector('.inv-cat')?.value || 'I';
      const row  = document.createElement('div');
      row.className = 'm-inv-row';
      row.innerHTML = `
        <span class="m-inv-name">${nome}</span>
        <span class="m-inv-qty">${qtd}</span>
        <span class="m-inv-cat">${cat}</span>
        <button class="m-inv-del" onclick="origInv${i}Remove()">×</button>`;
      table.appendChild(row);
      window[`origInv${i}Remove`] = () => { orig.remove(); atuInventarioPeso(); triggerSalvar(); renderMobileInv(); };
    });
    listDiv.appendChild(table);
  };

  // ── RENDER: Log ────────────────────────────────────────────
  window.renderMobileLog = function () {
    if (!isMobile()) return;
    const logDiv = document.getElementById('mLogList');
    if (!logDiv) return;
    const orig = document.getElementById('logDiv');
    if (!orig) return;
    logDiv.innerHTML = '';
    const items = Array.from(orig.children).slice(0, 15);
    if (!items.length) {
      logDiv.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Sem rolagens</p>';
      return;
    }
    items.forEach(item => {
      const res  = item.querySelector('.log-res')?.textContent || '?';
      const cs   = item.classList.contains('cs');
      const cf   = item.classList.contains('cf');
      const txt  = item.textContent.replace(res,'').replace(/\d+:\d+/,'').trim();
      const time = item.textContent.match(/\d{2}:\d{2}/)?.[0] || '';
      const row  = document.createElement('div');
      row.className = 'm-log-item';
      row.innerHTML = `
        <span class="m-log-result${cs?' cs':cf?' cf':''}">${res}</span>
        <div class="m-log-info">
          <div class="m-log-name">${txt.split('\n')[0]}</div>
          <div class="m-log-detail">${txt.split('\n')[1] || ''}</div>
        </div>
        <span class="m-log-time">${time}</span>`;
      logDiv.appendChild(row);
    });
  };

  // ── Inicialização ──────────────────────────────────────────
  function init() {
    if (!isMobile()) return;
    criarWrapperPoderes();
    criarWrapperCombate();
    renderMobileHabs();
    renderMobileRits();
    renderMobilePara();
    renderMobileAtks();
    renderMobileInv();
    renderMobileLog();

    // Hook nas funções de adicionar para re-renderizar
    const hookAdd = (origFn, renderFn) => {
      if (typeof window[origFn] !== 'function') return;
      const orig = window[origFn];
      window[origFn] = function () {
        orig.apply(this, arguments);
        setTimeout(renderFn, 50);
      };
    };
    hookAdd('addHab',       renderMobileHabs);
    hookAdd('addRit',       renderMobileRits);
    hookAdd('addParanormal',renderMobilePara);
    hookAdd('addAtk',       renderMobileAtks);
    hookAdd('addItem',      renderMobileInv);
    hookAdd('inserirHab',   renderMobileHabs);
    hookAdd('inserirRitual',renderMobileRits);
    hookAdd('inserirParanormalLivro', renderMobilePara);

    // Hook no preencher para re-renderizar após carga
    if (typeof preencher === 'function') {
      const origP = preencher;
      window.preencher = function (f) {
        origP.apply(this, arguments);
        setTimeout(() => {
          renderMobileHabs();
          renderMobileRits();
          renderMobilePara();
          renderMobileAtks();
          renderMobileInv();
          renderMobileLog();
        }, 200);
      };
    }
  }

  window.addEventListener('load', () => setTimeout(init, 300));
  window.addEventListener('resize', () => {
    if (isMobile()) {
      criarWrapperPoderes();
      criarWrapperCombate();
      renderMobileHabs();
      renderMobileAtks();
      renderMobileInv();
    }
  });
})();