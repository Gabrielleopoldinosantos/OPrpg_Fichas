// ============================================================
// ESTADO-CRITICO-AUTO.JS — sistema de Morrendo / Enlouquecendo
// Adicione APÓS script.js no index.html com:
//   <script src="estado-critico-auto.js"></script>
// NÃO precisa modificar script.js ou style.css!
// ============================================================

(function () {
  // ── CSS inline ──────────────────────────────────────────
  const css = `
  @keyframes estadoPulse {
    0%,100%{box-shadow:0 0 0 0 rgba(0,0,0,0);}
    50%{box-shadow:0 0 10px 2px rgba(180,30,30,0.22);}
  }
  @keyframes estadoPulseP {
    0%,100%{box-shadow:0 0 0 0 rgba(0,0,0,0);}
    50%{box-shadow:0 0 10px 2px rgba(100,50,180,0.22);}
  }
  .estado-critico-bloco { transition:opacity 0.25s; }
  .btn-estado-curar:hover { filter:brightness(1.2); }
  [data-theme="dark"] .estado-critico-bloco[data-tipo="morrendo"] { background:#1a0808 !important; }
  [data-theme="dark"] .estado-critico-bloco[data-tipo="enlouquecendo"] { background:#100818 !important; }
  `;
  const styleEl = document.createElement('style');
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ── Config dos estados ───────────────────────────────────
  const ESTADOS = {
    morrendo: {
      atualId: 'pvAtual',
      label: 'MORRENDO',
      cor: '#d04030',
      corLt: '#fff4f4',
      corBorder: '#a32d2d',
      icone: '☠',
      pulseAnim: 'estadoPulse',
      checks: ['Falha na Estabilização','Hemorragia Crítica','Falência de Órgãos'],
      fimLabel: 'PERSONAGEM MORTO',
      fimDesc: 'O agente sucumbiu. Sua história chega ao fim aqui.',
      curarLabel: 'Estabilizar (volta a 1 PV)'
    },
    enlouquecendo: {
      atualId: 'sanAtual',
      label: 'ENLOUQUECENDO',
      cor: '#6a3aaa',
      corLt: '#f8f4ff',
      corBorder: '#533495',
      icone: '🪬',
      pulseAnim: 'estadoPulseP',
      checks: ['Dissociação da Realidade','Terror Incontrolável','Colapso Mental Total'],
      fimLabel: 'PERSONAGEM ENLOUQUECEU',
      fimDesc: 'A mente do agente se fragmentou. Sua mão não é mais sua mão.',
      curarLabel: 'Recuperar Consciência (volta a 1 SAN)'
    }
  };

  const _checks = { morrendo: [false,false,false], enlouquecendo: [false,false,false] };

  // ── Criar bloco HTML ─────────────────────────────────────
  function criarBloco(tipo) {
    const c = ESTADOS[tipo];
    const div = document.createElement('div');
    div.id = 'estado_' + tipo;
    div.className = 'estado-critico-bloco';
    div.dataset.tipo = tipo;
    div.style.cssText = `display:none;border:2px solid ${c.corBorder};background:${c.corLt};padding:10px 12px 8px;margin-top:8px;animation:${c.pulseAnim} 1.8s infinite;`;

    div.innerHTML = `
      <div style="font-family:'Special Elite',serif;font-size:0.8em;letter-spacing:3px;color:${c.cor};display:flex;align-items:center;gap:6px;margin-bottom:8px;text-transform:uppercase;">
        <span>${c.icone}</span><span>${c.label}</span>
      </div>
      <div class="estado-checks-wrap" style="display:flex;flex-direction:column;gap:5px;margin-bottom:8px;">
        ${c.checks.map((label, i) => `
          <label style="display:flex;align-items:center;gap:8px;cursor:pointer;font-family:'Share Tech Mono';font-size:0.64em;color:var(--ink2);letter-spacing:1px;">
            <input type="checkbox" class="estado-chk" data-tipo="${tipo}" data-idx="${i}"
              style="width:15px;height:15px;accent-color:${c.cor};cursor:pointer;flex-shrink:0;"
              onchange="window._onEstadoCheck('${tipo}',${i},this.checked)">
            ${label}
          </label>
        `).join('')}
      </div>
      <button id="btn_curar_${tipo}" onclick="window._curarEstado('${tipo}')"
        style="display:none;width:100%;background:${c.corBorder};border:none;color:#fff;font-family:'Share Tech Mono';font-size:0.6em;letter-spacing:2px;padding:7px 10px;cursor:pointer;text-transform:uppercase;">
        ✚ ${c.curarLabel}
      </button>
      <div id="estado_fim_${tipo}" style="display:none;text-align:center;padding:12px 8px;">
        <div style="font-family:'Special Elite',serif;font-size:0.95em;letter-spacing:4px;color:${c.cor};text-transform:uppercase;margin-bottom:4px;">${c.fimLabel}</div>
        <div style="font-family:'Share Tech Mono';font-size:0.58em;color:var(--ink3);letter-spacing:1px;line-height:1.6;">${c.fimDesc}</div>
      </div>
    `;
    return div;
  }

  // ── Handlers ─────────────────────────────────────────────
  window._onEstadoCheck = function(tipo, idx, checked) {
    _checks[tipo][idx] = checked;
    const todos = _checks[tipo].every(v => v);
    const btn = document.getElementById('btn_curar_' + tipo);
    const fim = document.getElementById('estado_fim_' + tipo);
    const wrap = document.querySelector(`#estado_${tipo} .estado-checks-wrap`);
    if (todos) {
      if (btn) btn.style.display = 'none';
      if (fim) fim.style.display = 'block';
      if (wrap) wrap.style.opacity = '0.4';
      _anuncio(tipo);
    } else {
      if (btn) btn.style.display = _checks[tipo].some(v => v) ? 'block' : 'none';
      if (fim) fim.style.display = 'none';
      if (wrap) wrap.style.opacity = '1';
    }
    if (typeof triggerSalvar === 'function') triggerSalvar();
  };

  window._curarEstado = function(tipo) {
    const c = ESTADOS[tipo];
    const atualEl = document.getElementById(c.atualId);
    if (atualEl) { atualEl.value = 1; }
    _checks[tipo] = [false,false,false];
    document.querySelectorAll(`#estado_${tipo} .estado-chk`).forEach(el => el.checked = false);
    const btn = document.getElementById('btn_curar_' + tipo);
    const fim = document.getElementById('estado_fim_' + tipo);
    const wrap = document.querySelector(`#estado_${tipo} .estado-checks-wrap`);
    if (btn) btn.style.display = 'none';
    if (fim) fim.style.display = 'none';
    if (wrap) wrap.style.opacity = '1';
    _verificar();
    if (typeof atuBarras === 'function') atuBarras();
    if (typeof triggerSalvar === 'function') triggerSalvar();
  };

  function _anuncio(tipo) {
    const c = ESTADOS[tipo];
    const ov = document.createElement('div');
    ov.style.cssText = `position:fixed;inset:0;z-index:99999;background:rgba(0,0,0,0.96);display:flex;align-items:center;justify-content:center;cursor:pointer;backdrop-filter:blur(8px);animation:dfi .35s ease;`;
    ov.innerHTML = `
      <div style="text-align:center;padding:44px 56px;border:2px solid ${c.corBorder};background:black;max-width:440px;animation:dsi .4s ease;color:white;">
        <div style="font-size:2.4em;margin-bottom:12px;">${c.icone}</div>
        <div style="font-family:'Special Elite',serif;font-size:1.45em;letter-spacing:5px;color:${c.cor};text-transform:uppercase;margin-bottom:8px;">${c.fimLabel}</div>
        <div style="width:50px;height:2px;background:${c.corBorder};margin:10px auto;"></div>
        <div style="font-family:'Share Tech Mono';font-size:0.68em;color:white;letter-spacing:1px;line-height:1.8;">${c.fimDesc}</div>
        <div style="font-family:'Share Tech Mono';font-size:0.54em;color:gray;margin-top:18px;letter-spacing:2px;">clique para fechar</div>
      </div>`;
    document.body.appendChild(ov);
    ov.addEventListener('click', () => ov.remove());
    setTimeout(() => ov.remove(), 12000);
  }

  function _verificar() {
    const pv = parseInt(document.getElementById('pvAtual')?.value) || 0;
    const san = parseInt(document.getElementById('sanAtual')?.value) || 0;
    const bPV = document.getElementById('estado_morrendo');
    const bSAN = document.getElementById('estado_enlouquecendo');
    if (!bPV || !bSAN) return;
    bPV.style.display = pv <= 0 ? 'block' : 'none';
    bSAN.style.display = san <= 0 ? 'block' : 'none';
    if (pv > 0) {
      _checks.morrendo = [false,false,false];
      document.querySelectorAll('#estado_morrendo .estado-chk').forEach(e => e.checked = false);
      const b = document.getElementById('btn_curar_morrendo');
      const f = document.getElementById('estado_fim_morrendo');
      const w = document.querySelector('#estado_morrendo .estado-checks-wrap');
      if (b) b.style.display = 'none'; if (f) f.style.display = 'none'; if (w) w.style.opacity = '1';
    }
    if (san > 0) {
      _checks.enlouquecendo = [false,false,false];
      document.querySelectorAll('#estado_enlouquecendo .estado-chk').forEach(e => e.checked = false);
      const b = document.getElementById('btn_curar_enlouquecendo');
      const f = document.getElementById('estado_fim_enlouquecendo');
      const w = document.querySelector('#estado_enlouquecendo .estado-checks-wrap');
      if (b) b.style.display = 'none'; if (f) f.style.display = 'none'; if (w) w.style.opacity = '1';
    }
  }

  // ── Injetar blocos nos stat-boxes ─────────────────────────
  function _injetar() {
    const boxes = document.querySelectorAll('.stat-box');
    boxes.forEach(box => {
      const lbl = box.querySelector('.stat-lbl');
      if (!lbl) return;
      const txt = lbl.textContent.toLowerCase();
      if (txt.includes('vida') && !document.getElementById('estado_morrendo')) {
        box.appendChild(criarBloco('morrendo'));
      }
      if (txt.includes('sanidade') && !document.getElementById('estado_enlouquecendo')) {
        box.appendChild(criarBloco('enlouquecendo'));
      }
    });
  }

  // ── Hook na função atuBarras original ────────────────────
  let _hookedAtuBarras = false;
  function _hookAtuBarras() {
    if (_hookedAtuBarras || typeof atuBarras !== 'function') return;
    const orig = atuBarras;
    window.atuBarras = function() {
      orig.apply(this, arguments);
      _verificar();
    };
    _hookedAtuBarras = true;
  }

  // ── Salvar/carregar estado nos checks ─────────────────────
  // Hook na função coletarFicha
  function _hookColetarFicha() {
    if (typeof coletarFicha !== 'function') return;
    const orig = coletarFicha;
    window.coletarFicha = function() {
      const data = orig.apply(this, arguments);
      data._morrendoChecks = [..._checks.morrendo];
      data._enlouquecendoChecks = [..._checks.enlouquecendo];
      return data;
    };
  }

  // Hook na função preencher
  function _hookPreencher() {
    if (typeof preencher !== 'function') return;
    const orig = preencher;
    window.preencher = function(f) {
      orig.apply(this, arguments);
      setTimeout(() => {
        _injetar();
        if (f._morrendoChecks) {
          _checks.morrendo = f._morrendoChecks;
          f._morrendoChecks.forEach((v, i) => {
            const els = document.querySelectorAll('#estado_morrendo .estado-chk');
            if (els[i]) els[i].checked = v;
          });
          const todos = f._morrendoChecks.every(v => v);
          const btn = document.getElementById('btn_curar_morrendo');
          const fim = document.getElementById('estado_fim_morrendo');
          const wrap = document.querySelector('#estado_morrendo .estado-checks-wrap');
          if (todos) { if (btn) btn.style.display='none'; if (fim) fim.style.display='block'; if (wrap) wrap.style.opacity='0.4'; }
          else if (f._morrendoChecks.some(v=>v)) { if (btn) btn.style.display='block'; }
        }
        if (f._enlouquecendoChecks) {
          _checks.enlouquecendo = f._enlouquecendoChecks;
          f._enlouquecendoChecks.forEach((v, i) => {
            const els = document.querySelectorAll('#estado_enlouquecendo .estado-chk');
            if (els[i]) els[i].checked = v;
          });
          const todos = f._enlouquecendoChecks.every(v => v);
          const btn = document.getElementById('btn_curar_enlouquecendo');
          const fim = document.getElementById('estado_fim_enlouquecendo');
          const wrap = document.querySelector('#estado_enlouquecendo .estado-checks-wrap');
          if (todos) { if (btn) btn.style.display='none'; if (fim) fim.style.display='block'; if (wrap) wrap.style.opacity='0.4'; }
          else if (f._enlouquecendoChecks.some(v=>v)) { if (btn) btn.style.display='block'; }
        }
        _verificar();
      }, 80);
    };
  }

  // ── Init após carregamento da página ─────────────────────
  window.addEventListener('load', () => {
    setTimeout(() => {
      _injetar();
      _hookAtuBarras();
      _hookColetarFicha();
      _hookPreencher();
      _verificar();

      // Re-verificar quando pvAtual ou sanAtual mudam
      ['pvAtual','sanAtual'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', _verificar);
      });

      // Observer para os botões de ajuste stat
      document.querySelectorAll('.stat-adj-btn').forEach(btn => {
        btn.addEventListener('click', () => setTimeout(_verificar, 50));
      });
    }, 200);
  });

})();