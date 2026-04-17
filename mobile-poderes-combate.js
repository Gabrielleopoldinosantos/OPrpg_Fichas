// ============================================================
// MOBILE-PODERES-COMBATE.JS  (v2 — corrigido)
// Injeta layout mobile nas tabs Poderes e Combate & Inventário.
// Corrige: poderes não aparecendo + reordenação touch no inventário.
// Carregue DEPOIS de script.js no index.html.
// ============================================================

(function () {
  const BREAK = 480;
  function isMobile() { return window.innerWidth <= BREAK; }

  // ── Criar wrapper mobile para a tab Poderes ────────────────
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
        <button class="m-add-btn" onclick="addHab();setTimeout(renderMobileHabs,80)">+ Habilidade</button>
        <button class="m-add-btn" style="border-style:solid;border-color:var(--gold);color:var(--gold);" onclick="abrirModalHab()">📖 Do Livro</button>
        <div id="mHabList"></div>
      </div>
      <div class="sub-panel" id="mSubRits">
        <button class="m-add-btn rit" onclick="addRit();setTimeout(renderMobileRits,80)">+ Ritual</button>
        <button class="m-add-btn rit" style="border-style:solid;" onclick="abrirModalRit()">📖 Do Livro</button>
        <div id="mRitList"></div>
      </div>
      <div class="sub-panel" id="mSubPara">
        <button class="m-add-btn para" onclick="addParanormal();setTimeout(renderMobilePara,80)">+ Poder</button>
        <button class="m-add-btn para" style="border-style:solid;" onclick="abrirModalParanormal()">📖 Do Livro</button>
        <div id="mParaList"></div>
      </div>`;
    tab.appendChild(w);
  }

  // ── Criar wrapper mobile para a tab Combate ────────────────
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
        <button class="m-add-btn" onclick="addAtk();setTimeout(renderMobileAtks,80)">+ Ataque</button>
        <div id="mAtkList"></div>
      </div>
      <div class="sub-panel" id="mSubInv">
        <div id="mPesoBar"></div>
        <div id="mInvList"></div>
        <button class="m-add-btn" onclick="addItem();setTimeout(renderMobileInv,80)">+ Item</button>
      </div>
      <div class="sub-panel" id="mSubLog">
        <div id="mLogList" class="m-log-list"></div>
      </div>`;
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
    const cont = document.getElementById('habCont');
    const items = cont ? Array.from(cont.children) : [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhuma habilidade adicionada</p>';
      return;
    }
    items.forEach((orig, i) => {
      const nome = orig.querySelector('.hab-nome')?.value || 'Habilidade';
      const desc = orig.querySelector('.hab-desc')?.value || '';
      const card = document.createElement('div');
      card.className = 'm-card';
      card.innerHTML = `
        <div class="m-card-header" onclick="mCardToggle(this)">
          <div class="m-card-icon m-card-icon-gold">✦</div>
          <div class="m-card-info">
            <div class="m-card-name">${_esc(nome)}</div>
            <div class="m-card-meta">Habilidade</div>
          </div>
          <span class="m-card-chevron">▶</span>
          <button class="btn-del" onclick="event.stopPropagation();_mDelHab(${i})" style="font-size:0.7em;padding:3px 7px;">🗑</button>
        </div>
        <div class="m-card-body">
          <p style="white-space:pre-wrap;">${_esc(desc)}</p>
        </div>`;
      list.appendChild(card);
    });

    // Registra deletadores após render
    window._mDelHab = function(i) {
      const c = document.getElementById('habCont');
      if (c && c.children[i]) { c.children[i].remove(); }
      if (typeof triggerSalvar === 'function') triggerSalvar();
      renderMobileHabs();
    };
  };

  // ── RENDER: Rituais ────────────────────────────────────────
  window.renderMobileRits = function () {
    if (!isMobile()) return;
    const list = document.getElementById('mRitList');
    if (!list) return;
    const cont = document.getElementById('ritCont');
    const items = cont ? Array.from(cont.children) : [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhum ritual adicionado</p>';
      return;
    }
    items.forEach((orig, i) => {
      const nome  = orig.querySelector('.rit-nome')?.value  || 'Ritual';
      const elem  = orig.querySelector('.rit-elem')?.value  || '';
      const circ  = orig.querySelector('.rit-circ')?.value  || '1';
      const peInput = orig.querySelector('.rit-version[data-tab="normal"] input[type="number"]');
      const peN   = peInput?.value || '?';
      const execSel = orig.querySelector('.rit-version[data-tab="normal"] select');
      const execN = execSel?.value || '—';
      const selects = orig.querySelectorAll('.rit-version[data-tab="normal"] select');
      const alcN  = selects[1]?.value || '—';
      const durN  = selects[2]?.value || '—';
      const descN = orig.querySelector('.rit-version[data-tab="normal"] textarea')?.value || '';
      const descD = orig.querySelector('.rit-version[data-tab="discente"] textarea')?.value || '—';
      const descV = orig.querySelector('.rit-version[data-tab="verdadeiro"] textarea')?.value || '—';
      const elemCls = (elem||'').toLowerCase()
        .normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/[^a-z]/g,'');

      const card = document.createElement('div');
      card.className = 'm-card';
      card.innerHTML = `
        <div class="m-card-header" onclick="mCardToggle(this)">
          <div class="m-card-icon m-card-icon-purp">🌀</div>
          <div class="m-card-info">
            <div class="m-card-name">${_esc(nome)}</div>
            <div class="m-card-meta">${circ.replace('°','')}° Círculo · ${_esc(elem)}</div>
          </div>
          <span class="m-card-badge m-card-badge-purp">${_esc(peN)} PE</span>
          <span class="m-card-chevron">▶</span>
          <button class="btn-del" onclick="event.stopPropagation();_mDelRit(${i})" style="font-size:0.7em;padding:3px 7px;">🗑</button>
        </div>
        <div class="m-card-body">
          <div class="m-elem-pills"><span class="m-elem-pill m-elem-${elemCls}">${_esc(elem)}</span></div>
          <div class="m-rit-stats">
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">Exec</span><span class="m-rit-stat-val">${_esc(execN)}</span></div>
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">Alc</span><span class="m-rit-stat-val">${_esc(alcN)}</span></div>
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">Dur</span><span class="m-rit-stat-val">${_esc(durN)}</span></div>
            <div class="m-rit-stat"><span class="m-rit-stat-lbl">PE</span><span class="m-rit-stat-val">${_esc(peN)}</span></div>
          </div>
          <div class="m-rit-tabs">
            <button class="m-rit-tab active" onclick="mRitSwitch(this,'normal',${i})">Normal</button>
            <button class="m-rit-tab" onclick="mRitSwitch(this,'discente',${i})">Discente</button>
            <button class="m-rit-tab" onclick="mRitSwitch(this,'verdadeiro',${i})">Verdadeiro</button>
          </div>
          <div id="mRitDesc_normal_${i}" class="m-rit-version active"><p style="white-space:pre-wrap;">${_esc(descN)}</p></div>
          <div id="mRitDesc_discente_${i}" class="m-rit-version"><p style="white-space:pre-wrap;">${_esc(descD)}</p></div>
          <div id="mRitDesc_verdadeiro_${i}" class="m-rit-version"><p style="white-space:pre-wrap;">${_esc(descV)}</p></div>
          <div class="m-card-actions">
            <button class="m-card-action-btn primary" onclick="_mConjurar(${i})">⚡ Conjurar</button>
          </div>
        </div>`;
      list.appendChild(card);
    });

    window._mDelRit = function(i) {
      const c = document.getElementById('ritCont');
      if (c && c.children[i]) c.children[i].remove();
      if (typeof triggerSalvar === 'function') triggerSalvar();
      renderMobileRits();
    };
    window._mConjurar = function(i) {
      const c = document.getElementById('ritCont');
      const orig = c?.children[i];
      if (!orig) return;
      const btn = orig.querySelector('.coll-body button[onclick*="conjurarRitual"]');
      if (btn) btn.click();
      else if (typeof conjurarRitual === 'function') {
        const body = orig.querySelector('.coll-body');
        if (body) conjurarRitual(body.querySelector('button') || body);
      }
    };
  };

  window.mRitSwitch = function (btn, tab, idx) {
    const body = btn.closest('.m-card-body');
    body.querySelectorAll('.m-rit-tab').forEach(b => b.classList.remove('active'));
    body.querySelectorAll('.m-rit-version').forEach(v => v.classList.remove('active'));
    btn.classList.add('active');
    const v = document.getElementById(`mRitDesc_${tab}_${idx}`);
    if (v) v.classList.add('active');
  };

  // ── RENDER: Paranormais ────────────────────────────────────
  window.renderMobilePara = function () {
    if (!isMobile()) return;
    const list = document.getElementById('mParaList');
    if (!list) return;
    const cont = document.getElementById('paranormalCont');
    const items = cont ? Array.from(cont.children) : [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhum poder adicionado</p>';
      return;
    }
    items.forEach((orig, i) => {
      const nome = orig.querySelector('.paranormal-nome')?.value || 'Poder';
      const desc = orig.querySelector('.paranormal-desc')?.value || '';
      const card = document.createElement('div');
      card.className = 'm-card';
      card.innerHTML = `
        <div class="m-card-header" onclick="mCardToggle(this)">
          <div class="m-card-icon m-card-icon-red">👻</div>
          <div class="m-card-info">
            <div class="m-card-name">${_esc(nome)}</div>
            <div class="m-card-meta">Paranormal</div>
          </div>
          <span class="m-card-chevron">▶</span>
          <button class="btn-del" onclick="event.stopPropagation();_mDelPara(${i})" style="font-size:0.7em;padding:3px 7px;">🗑</button>
        </div>
        <div class="m-card-body"><p style="white-space:pre-wrap;">${_esc(desc)}</p></div>`;
      list.appendChild(card);
    });

    window._mDelPara = function(i) {
      const c = document.getElementById('paranormalCont');
      if (c && c.children[i]) c.children[i].remove();
      if (typeof triggerSalvar === 'function') triggerSalvar();
      renderMobilePara();
    };
  };

  // ── RENDER: Ataques ────────────────────────────────────────
  window.renderMobileAtks = function () {
    if (!isMobile()) return;
    const list = document.getElementById('mAtkList');
    if (!list) return;
    const cont = document.getElementById('atkCont');
    const items = cont ? Array.from(cont.children) : [];
    list.innerHTML = '';
    if (!items.length) {
      list.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Nenhum ataque adicionado</p>';
      return;
    }
    items.forEach((orig, i) => {
      const nome   = orig.querySelector('.atk-nome')?.value  || 'Ataque';
      const habil  = orig.querySelector('.atk-habil')?.value || 'luta';
      const ba     = orig.querySelector('.ba')?.value  || '0';
      const dados  = orig.querySelector('.atk-ds')?.value || '1d6';
      const bd     = orig.querySelector('.bd')?.value  || '0';

      const card = document.createElement('div');
      card.className = `m-atk-card ${habil}`;
      card.innerHTML = `
        <div class="m-atk-header">
          <span class="m-atk-name">${_esc(nome)}</span>
          <span class="m-atk-type">${habil.toUpperCase()}</span>
          <button class="btn-del" onclick="_mDelAtk(${i})" style="font-size:0.7em;padding:3px 7px;margin-left:6px;">🗑</button>
        </div>
        <div class="m-atk-body">
          <div class="m-atk-field"><label>Bônus Ataque</label>
            <input type="number" value="${_esc(ba)}" oninput="_syncAtk(${i},'ba',this.value)">
          </div>
          <div class="m-atk-field"><label>Dado Dano</label>
            <select onchange="_syncAtk(${i},'ds',this.value)">
              ${['1d4','1d6','1d8','1d10','1d12','2d6','2d8','3d6'].map(d=>`<option${d===dados?' selected':''}>${d}</option>`).join('')}
            </select>
          </div>
          <div class="m-atk-field"><label>Bônus Dano</label>
            <input type="number" value="${_esc(bd)}" oninput="_syncAtk(${i},'bd',this.value)">
          </div>
          <div class="m-atk-field"><label>Perícia</label>
            <select onchange="_syncAtk(${i},'habil',this.value)">
              <option${habil==='luta'?' selected':''} value="luta">Luta</option>
              <option${habil==='pontaria'?' selected':''} value="pontaria">Pontaria</option>
            </select>
          </div>
        </div>
        <div class="m-atk-actions">
          <button class="m-atk-btn primary-atk" onclick="_mRolarA(${i})">🎲 Atacar</button>
          <button class="m-atk-btn" onclick="_mRolarD(${i})">🎲 Dano</button>
        </div>`;
      list.appendChild(card);
    });

    window._mDelAtk = function(i) {
      const c = document.getElementById('atkCont');
      if (c && c.children[i]) c.children[i].remove();
      if (typeof triggerSalvar === 'function') triggerSalvar();
      renderMobileAtks();
    };
    window._syncAtk = function(i, field, val) {
      const orig = document.getElementById('atkCont')?.children[i];
      if (!orig) return;
      if (field === 'ba') { const el = orig.querySelector('.ba'); if (el) el.value = val; }
      if (field === 'ds') { const el = orig.querySelector('.atk-ds'); if (el) el.value = val; }
      if (field === 'bd') { const el = orig.querySelector('.bd'); if (el) el.value = val; }
      if (field === 'habil') {
        const el = orig.querySelector('.atk-habil');
        if (el) { el.value = val; if (typeof atuAtkMeta === 'function') atuAtkMeta(el); }
      }
      if (typeof triggerSalvar === 'function') triggerSalvar();
    };
    window._mRolarA = function(i) {
      const orig = document.getElementById('atkCont')?.children[i];
      if (!orig) return;
      const btn = orig.querySelector('.btn-ra');
      if (btn) btn.click();
    };
    window._mRolarD = function(i) {
      const orig = document.getElementById('atkCont')?.children[i];
      if (!orig) return;
      const btn = orig.querySelector('.btn-rd');
      if (btn) btn.click();
    };
  };

  // ── RENDER: Inventário com reordenação por toque ──────────
  window.renderMobileInv = function () {
    if (!isMobile()) return;
    const pesoDiv = document.getElementById('mPesoBar');
    const listDiv = document.getElementById('mInvList');
    if (!pesoDiv || !listDiv) return;

    // Barra de peso
    const usado = typeof calcPesoInventario === 'function' ? calcPesoInventario() : 0;
    const cap   = typeof calcCapacidadeInventario === 'function' ? calcCapacidadeInventario() : 2;
    const pct   = Math.max(0, Math.min(100, Math.round((usado / Math.max(1, cap)) * 100)));
    const livre = cap - usado;
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

    const cont = document.getElementById('invCont');
    const items = cont ? Array.from(cont.children) : [];
    listDiv.innerHTML = '';

    if (!items.length) {
      listDiv.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Inventário vazio</p>';
      return;
    }

    // Container com suporte a reordenação via touch
    const table = document.createElement('div');
    table.className = 'm-inv-table';
    table.id = 'mInvTable';
    table.innerHTML = `<div class="m-inv-thead">
      <div></div><div>Item</div>
      <div style="text-align:center">Qtd</div>
      <div style="text-align:center">Cat</div>
      <div></div>
    </div>`;

    items.forEach((orig, i) => {
      const nome = orig.querySelector('.inv-ni')?.value  || '—';
      const qtd  = orig.querySelector('.inv-qtd')?.value || '1';
      const cat  = orig.querySelector('.inv-cat')?.value || 'I';

      const row = document.createElement('div');
      row.className = 'm-inv-row';
      row.dataset.idx = i;
      row.setAttribute('draggable','false'); // vai usar touch
      row.innerHTML = `
        <span class="m-inv-handle" data-idx="${i}" title="Segurar para reordenar">⠿</span>
        <span class="m-inv-name">${_esc(nome)}</span>
        <span class="m-inv-qty">${_esc(qtd)}</span>
        <span class="m-inv-cat">${_esc(cat)}</span>
        <button class="m-inv-del" onclick="_mDelInv(${i})">×</button>`;
      table.appendChild(row);
    });

    listDiv.appendChild(table);

    // Deletar item
    window._mDelInv = function(i) {
      const c = document.getElementById('invCont');
      if (c && c.children[i]) {
        c.children[i].remove();
        if (typeof atuInventarioPeso === 'function') atuInventarioPeso();
        if (typeof triggerSalvar === 'function') triggerSalvar();
      }
      renderMobileInv();
    };

    // Iniciar reordenação por touch
    initTouchSort(table);
  };

  // ── Touch Sort para o inventário ───────────────────────────
  function initTouchSort(table) {
    let dragEl = null;
    let ghost = null;
    let startY = 0;
    let offsetY = 0;

    table.querySelectorAll('.m-inv-handle').forEach(handle => {
      handle.addEventListener('touchstart', onTouchStart, { passive: false });
    });

    function onTouchStart(e) {
      const touch = e.touches[0];
      dragEl = handle_to_row(e.currentTarget);
      if (!dragEl) return;
      e.preventDefault();

      startY = touch.clientY;
      const rect = dragEl.getBoundingClientRect();
      offsetY = touch.clientY - rect.top;

      // Cria ghost visual
      ghost = dragEl.cloneNode(true);
      ghost.style.cssText = `
        position: fixed;
        left: ${rect.left}px;
        top: ${rect.top}px;
        width: ${rect.width}px;
        z-index: 99999;
        opacity: 0.85;
        background: var(--gold-lt);
        border: 2px dashed var(--gold);
        border-radius: 8px;
        pointer-events: none;
        transition: none;
        box-shadow: 0 8px 20px rgba(0,0,0,0.25);
      `;
      document.body.appendChild(ghost);
      dragEl.style.opacity = '0.3';

      document.addEventListener('touchmove', onTouchMove, { passive: false });
      document.addEventListener('touchend', onTouchEnd, { passive: false });
    }

    function onTouchMove(e) {
      if (!ghost || !dragEl) return;
      e.preventDefault();
      const touch = e.touches[0];
      ghost.style.top = (touch.clientY - offsetY) + 'px';

      // Detectar onde inserir
      const rows = Array.from(table.querySelectorAll('.m-inv-row:not([data-dragging])'));
      const afterEl = rows.find(row => {
        if (row === dragEl) return false;
        const r = row.getBoundingClientRect();
        return touch.clientY < r.top + r.height / 2;
      });
      dragEl.dataset.dragging = '1';
      if (afterEl) {
        table.insertBefore(dragEl, afterEl);
      } else {
        // Append antes do elemento thead (que não é .m-inv-row)
        const lastRow = table.querySelector('.m-inv-row:last-child');
        if (lastRow && lastRow !== dragEl) table.appendChild(dragEl);
      }
      delete dragEl.dataset.dragging;
    }

    function onTouchEnd(e) {
      if (!dragEl) return;
      dragEl.style.opacity = '';
      if (ghost) { ghost.remove(); ghost = null; }

      // Reordenar o invCont real conforme nova ordem visual
      const invCont = document.getElementById('invCont');
      const newOrder = Array.from(table.querySelectorAll('.m-inv-row')).map(r => parseInt(r.dataset.idx));
      const origItems = Array.from(invCont.children);
      const reordered = newOrder.map(i => origItems[i]).filter(Boolean);
      reordered.forEach(el => invCont.appendChild(el));

      dragEl = null;
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);

      if (typeof atuInventarioPeso === 'function') atuInventarioPeso();
      if (typeof triggerSalvar === 'function') triggerSalvar();
      // Re-renderiza para atualizar índices
      setTimeout(renderMobileInv, 50);
    }

    function handle_to_row(handle) {
      return handle.closest('.m-inv-row');
    }
  }

  // ── RENDER: Log ────────────────────────────────────────────
  window.renderMobileLog = function () {
    if (!isMobile()) return;
    const logDiv = document.getElementById('mLogList');
    if (!logDiv) return;
    const orig = document.getElementById('logDiv');
    if (!orig) return;
    logDiv.innerHTML = '';
    const items = Array.from(orig.children).slice(0, 20);
    if (!items.length) {
      logDiv.innerHTML = '<p style="font-family:\'Share Tech Mono\';font-size:0.6em;color:var(--ink3);text-align:center;padding:20px 0;">Sem rolagens</p>';
      return;
    }
    items.forEach(item => {
      const res  = item.querySelector('.log-res')?.textContent || '?';
      const cs   = item.classList.contains('cs');
      const cf   = item.classList.contains('cf');
      const time = item.textContent.match(/\d{2}:\d{2}/)?.[0] || '';
      // Pega texto excluindo o resultado e horário
      const clone = item.cloneNode(true);
      clone.querySelector('.log-res')?.remove();
      const txt  = (clone.textContent || '').trim().replace(/\d{2}:\d{2}/,'').trim();

      const row = document.createElement('div');
      row.className = 'm-log-item';
      row.innerHTML = `
        <span class="m-log-result${cs?' cs':cf?' cf':''}">${_esc(res)}</span>
        <div class="m-log-info">
          <div class="m-log-name">${_esc(txt.split('\n')[0]||'')}</div>
          <div class="m-log-detail">${_esc(txt.split('\n')[1]||'')}</div>
        </div>
        <span class="m-log-time">${_esc(time)}</span>`;
      logDiv.appendChild(row);
    });
  };

  // ── Utilitário de escape HTML ──────────────────────────────
  function _esc(str) {
    return String(str||'')
      .replace(/&/g,'&amp;')
      .replace(/</g,'&lt;')
      .replace(/>/g,'&gt;')
      .replace(/"/g,'&quot;');
  }
  window._esc = _esc;

  // ── Hook nas funções principais ────────────────────────────
  function hookFn(name, after) {
    if (typeof window[name] !== 'function') return;
    const orig = window[name];
    window[name] = function () {
      const result = orig.apply(this, arguments);
      setTimeout(after, 80);
      return result;
    };
  }

  function hookAllRenders() {
    hookFn('addHab',       renderMobileHabs);
    hookFn('addRit',       renderMobileRits);
    hookFn('addParanormal',renderMobilePara);
    hookFn('addAtk',       renderMobileAtks);
    hookFn('addItem',      renderMobileInv);
    hookFn('inserirHab',   renderMobileHabs);
    hookFn('inserirRitual', renderMobileRits);
    hookFn('inserirParanormalLivro', renderMobilePara);

    // Hook no preencher
    if (typeof window.preencher === 'function') {
      const origP = window.preencher;
      window.preencher = function (f) {
        origP.apply(this, arguments);
        setTimeout(() => {
          renderMobileHabs();
          renderMobileRits();
          renderMobilePara();
          renderMobileAtks();
          renderMobileInv();
          renderMobileLog();
        }, 300);
      };
    }
  }

  // ── CSS adicional para handle de toque ────────────────────
  function injectTouchCSS() {
    const s = document.createElement('style');
    s.textContent = `
      .m-inv-handle {
        cursor: grab;
        font-size: 1.2em;
        color: var(--ink3);
        padding: 0 6px;
        user-select: none;
        touch-action: none;
        flex-shrink: 0;
        opacity: 0.6;
        line-height: 1;
        display: flex;
        align-items: center;
      }
      .m-inv-handle:active { opacity: 1; color: var(--gold); }
      /* Ajusta grid do thead e rows para incluir handle */
      .m-inv-thead,
      .m-inv-row {
        grid-template-columns: 22px 1fr 38px 44px 28px !important;
      }
    `;
    document.head.appendChild(s);
  }

  // ── Inicialização ──────────────────────────────────────────
  function init() {
    if (!isMobile()) return;
    injectTouchCSS();
    criarWrapperPoderes();
    criarWrapperCombate();
    hookAllRenders();
    renderMobileHabs();
    renderMobileRits();
    renderMobilePara();
    renderMobileAtks();
    renderMobileInv();
    renderMobileLog();
  }

  window.addEventListener('load', () => setTimeout(init, 400));

  window.addEventListener('resize', () => {
    if (isMobile()) {
      if (!document.getElementById('mobile-poderes-wrapper')) {
        criarWrapperPoderes();
        criarWrapperCombate();
        hookAllRenders();
        injectTouchCSS();
      }
      renderMobileHabs();
      renderMobileRits();
      renderMobilePara();
      renderMobileAtks();
      renderMobileInv();
    }
  });

})();