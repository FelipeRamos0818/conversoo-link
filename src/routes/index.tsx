import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
});

const FONT_MONO = "'JetBrains Mono', ui-monospace, monospace";
const FONT_BODY = "'Outfit', system-ui, sans-serif";

const WPP = "https://wa.me/5551992604341";
const INSTA = "https://instagram.com/conversoo.automacoes";

function Index() {
  return (
    <>
      <style>{css}</style>

      <div className="aurora-wrap">
        <div className="aurora a1" />
        <div className="aurora a2" />
        <div className="aurora a3" />
        <div className="aurora a4" />
        <div className="aurora a5" />
      </div>
      <div className="grade" />
      <div className="veu" />
      <div className="scan" />

      <main className="cv-main">
        {/* HERO */}
        <section className="hero">
          <div className="orb-stage">
            <svg viewBox="0 0 150 150" fill="none">
              <defs>
                <radialGradient id="coreG" cx="40%" cy="35%" r="70%">
                  <stop offset="0%" stopColor="#c4b5fd" />
                  <stop offset="45%" stopColor="#7c3aed" />
                  <stop offset="100%" stopColor="#db2777" />
                </radialGradient>
                <radialGradient id="haloG" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="rgba(124,58,237,.5)" />
                  <stop offset="100%" stopColor="rgba(124,58,237,0)" />
                </radialGradient>
                <linearGradient id="ringG" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#a78bfa" />
                  <stop offset="100%" stopColor="#f0abfc" />
                </linearGradient>
              </defs>
              <circle cx="75" cy="75" r="70" fill="url(#haloG)" />
              <g className="ring-a">
                <ellipse cx="75" cy="75" rx="58" ry="58" stroke="url(#ringG)" strokeWidth="1" opacity=".35" />
                <circle className="orbit-1" cx="133" cy="75" r="2.4" fill="#f0abfc" />
              </g>
              <g className="ring-b">
                <ellipse cx="75" cy="75" rx="48" ry="60" stroke="#a78bfa" strokeWidth="1" opacity=".4" transform="rotate(35 75 75)" />
                <circle className="orbit-2" cx="75" cy="15" r="2" fill="#c4b5fd" />
              </g>
              <g className="ring-c">
                <ellipse cx="75" cy="75" rx="62" ry="44" stroke="#ec4899" strokeWidth="1" opacity=".3" transform="rotate(-25 75 75)" />
                <circle className="orbit-3" cx="137" cy="75" r="1.8" fill="#f9a8d4" />
              </g>
              <g className="core-glow">
                <circle cx="75" cy="75" r="30" fill="url(#coreG)" />
                <circle cx="75" cy="75" r="30" fill="none" stroke="rgba(255,255,255,.25)" strokeWidth="1" />
                <ellipse cx="66" cy="64" rx="10" ry="7" fill="rgba(255,255,255,.3)" />
              </g>
              <g className="eye-scan">
                <rect x="60" y="72" width="30" height="3" rx="1.5" fill="rgba(255,255,255,.85)" />
                <rect x="66" y="78" width="18" height="2" rx="1" fill="rgba(255,255,255,.5)" />
              </g>
            </svg>
          </div>
          <div className="kicker">conversoo.automações</div>
          <h1 className="cv-h1">Conversoo Automações</h1>
          <div className="sub">Tecnologia que trabalha enquanto você cresce.</div>
          <div className="pills">
            <a className="pill" href={INSTA} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
              Instagram
            </a>
            <a className="pill" href={WPP} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.43z" /></svg>
              WhatsApp
            </a>
          </div>
        </section>

        {/* COPY */}
        <p className="copy rise">
          Tudo que você vê aqui, <b>a gente construiu</b>. Plataformas, automações e agentes de IA. Se você tem um problema no seu negócio, a gente provavelmente já sabe como resolver.
        </p>

        {/* PLATAFORMAS */}
        <div className="rise">
          <div className="seclabel"><span className="br" /><span>Plataformas</span><div className="line" /></div>

          <a className="destaque" href="https://bolao.conversoo.cloud" target="_blank" rel="noreferrer">
            <div className="ic"><svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9a6 6 0 0 0 12 0V4H6z" /><path d="M6 5H4a2 2 0 0 0 0 4h2M18 5h2a2 2 0 0 1 0 4h-2" /><path d="M12 15v3M9 21h6" /></svg></div>
            <div className="tx"><h3>Bolão da Copa 2026 <span className="badge b-live"><span className="dot" />LIVE</span></h3><p>Palpites, ranking e pontuação automática com seus amigos</p></div>
          </a>

          <div className="grid">
            <a className="gcard glass" href="https://querapostar.conversoo.cloud" target="_blank" rel="noreferrer">
              <div className="ic" style={{ background: "linear-gradient(135deg,#1e1b4b,#312e81)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#a5b4fc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></svg></div>
              <h4>Quer Apostar?</h4><div className="desc">Apostas personalizadas entre amigos em qualquer tema</div>
              <span className="badge b-live"><span className="dot" />LIVE</span>
            </a>
            <a className="gcard glass" href="https://glam-glow-gate.lovable.app" target="_blank" rel="noreferrer">
              <div className="ic" style={{ background: "linear-gradient(135deg,#4a1040,#7c1d6f)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#f0abfc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2.2 4.5L19 7l-3.5 3.4.8 4.8L12 13l-4.3 2.2.8-4.8L5 7l4.8-.5z" fill="rgba(240,171,252,.12)" /><path d="M12 13v9" /></svg></div>
              <h4>Glowly</h4><div className="desc">Agendamento para salões e estéticas com IA</div>
              <span className="badge b-beta">BETA</span>
            </a>
            <a className="gcard glass" href="https://quintaloka.conversoo.cloud" target="_blank" rel="noreferrer">
              <div className="ic" style={{ background: "linear-gradient(135deg,#2d1200,#451a03)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M8 21h8M12 17v4M7 4h10l-1 7a4 4 0 0 1-8 0z" /><path d="M5 4h14" /><circle cx="18" cy="6" r="1.3" fill="#a855f7" stroke="none" /></svg></div>
              <h4>Quinta Loka</h4><div className="desc">Jantas com amigos: sorteio, cardápio por IA e divisão de gastos</div>
              <span className="badge b-live"><span className="dot" />LIVE</span>
            </a>
            <a className="gcard glass" href="https://catalogo.aromasamore.com.br" target="_blank" rel="noreferrer">
              <div className="ic" style={{ background: "linear-gradient(135deg,#4a1535,#7c1d55)" }}><svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3s-5 4-5 9a5 5 0 0 0 10 0c0-5-5-9-5-9z" fill="rgba(253,164,175,.12)" /><path d="M12 11c-1.5 1-1.5 3 0 4" /></svg></div>
              <h4>Amoré Catálogo</h4><div className="desc">Catálogo digital + automação de vendas</div>
              <span className="badge b-case">CASE</span>
            </a>
          </div>

          <a className="destaque" href="https://hub.aromasamore.com.br" target="_blank" rel="noreferrer" style={{ marginTop: ".7rem", borderColor: "rgba(251,146,60,.28)", background: "linear-gradient(135deg,rgba(251,146,60,.1),rgba(124,58,237,.05))" }}>
            <div className="ic" style={{ background: "linear-gradient(135deg,#1c1917,#292524)", borderColor: "rgba(251,146,60,.22)" }}><svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#fb923c" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="3" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M19 5l-2 2M7 17l-2 2" /></svg></div>
            <div className="tx"><h3 style={{ color: "var(--texto)" }}>Amoré Hub <span className="badge b-case">CASE</span></h3><p>Gestão interna de produção</p></div>
          </a>
        </div>

        {/* AGENTES */}
        <div className="rise">
          <div className="seclabel"><span className="br" /><span>Agentes IA ativos</span><div className="line" /></div>
          <div className="agentes">
            <a className="agente glass" href="https://conversoo-grow-page.lovable.app" target="_blank" rel="noreferrer">
              <div className="av" style={{ background: "rgba(124,58,237,.16)", border: "1px solid rgba(124,58,237,.32)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="8" width="14" height="11" rx="3" /><path d="M12 8V5M12 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" /><circle cx="9.5" cy="13" r="1" fill="#c4b5fd" stroke="none" /><circle cx="14.5" cy="13" r="1" fill="#c4b5fd" stroke="none" /></svg><span className="sd" style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }} /></div>
              <div><div className="nm">Lia</div><div className="rl">Atendimento e diagnóstico comercial</div></div><span className="lb">CONVERSOO</span>
            </a>
            <a className="agente glass" href="https://glam-glow-gate.lovable.app" target="_blank" rel="noreferrer">
              <div className="av" style={{ background: "rgba(245,158,11,.11)", border: "1px solid rgba(245,158,11,.24)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#f0abfc" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M20 14a8 8 0 1 1-9-11 6 6 0 0 0 9 11z" fill="rgba(240,171,252,.12)" /></svg><span className="sd" style={{ background: "#f59e0b", boxShadow: "0 0 6px #f59e0b" }} /></div>
              <div><div className="nm">Luna</div><div className="rl">Agendamento e atendimento</div></div><span className="lb">GLOWLY</span>
            </a>
            <a className="agente glass" href="https://catalogo.aromasamore.com.br" target="_blank" rel="noreferrer">
              <div className="av" style={{ background: "rgba(236,72,153,.11)", border: "1px solid rgba(236,72,153,.24)" }}><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fda4af" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8s3 2 3 5a3 3 0 0 1-6 0c0-3 3-5 3-5z" fill="rgba(253,164,175,.15)" /><path d="M8 19c1.3 1.3 2.7 2 4 2s2.7-.7 4-2" /></svg><span className="sd" style={{ background: "#10b981", boxShadow: "0 0 6px #10b981" }} /></div>
              <div><div className="nm">Pã</div><div className="rl">Vendas e relacionamento, centenas de leads/semana</div></div><span className="lb">AMORÉ</span>
            </a>
          </div>
        </div>

        {/* LANDING PAGES */}
        <div className="rise">
          <div className="seclabel"><span className="br" /><span>Landing pages</span><div className="line" /></div>
          <div className="linhas">
            <a className="linha glass" href="https://conversoo-grow-page.lovable.app" target="_blank" rel="noreferrer"><div className="em" style={{ background: "rgba(124,58,237,.13)", border: "1px solid rgba(124,58,237,.22)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c4b5fd" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M5 19l3-3M14 6c4 0 4 4 4 4s-4 4-8 4l-2-2c0-4 4-6 6-6z" fill="rgba(196,181,253,.1)" /><circle cx="14.5" cy="9.5" r="1" /></svg></div><div className="nm">Conversoo — Site Institucional</div><span className="tg" style={{ background: "rgba(124,58,237,.1)", border: "1px solid rgba(124,58,237,.25)", color: "#c4b5fd" }}>CONVERSOO</span></a>
            <a className="linha glass" href="https://energizante.aromasamore.com.br" target="_blank" rel="noreferrer"><div className="em" style={{ background: "rgba(236,72,153,.1)", border: "1px solid rgba(236,72,153,.22)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f9a8d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M13 2L4 14h6l-1 8 9-12h-6z" fill="rgba(249,168,212,.15)" /></svg></div><div className="nm">Amoré — Linha Energizante</div><span className="tg" style={{ background: "rgba(236,72,153,.09)", border: "1px solid rgba(236,72,153,.22)", color: "#f9a8d4" }}>AMORÉ</span></a>
            <a className="linha glass" href="https://equilibrio.aromasamore.com.br" target="_blank" rel="noreferrer"><div className="em" style={{ background: "rgba(16,185,129,.1)", border: "1px solid rgba(16,185,129,.22)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#6ee7b7" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9 6c4-2 9-2 11-3 .5 4 0 11-4 14a7 7 0 0 1-5 3z" fill="rgba(110,231,183,.12)" /><path d="M11 20c0-4 2-8 5-10" /></svg></div><div className="nm">Amoré — Linha Equilíbrio</div><span className="tg" style={{ background: "rgba(16,185,129,.09)", border: "1px solid rgba(16,185,129,.22)", color: "#6ee7b7" }}>AMORÉ</span></a>
          </div>
        </div>

        {/* CTA WHATSAPP */}
        <div className="rise">
          <div className="seclabel"><span className="br" /><span>Automação WhatsApp</span><div className="line" /></div>
          <div className="cta">
            <div className="cta-glow" />
            <h3>Agente IA no WhatsApp 24h</h3>
            <p>Atendimento humanizado integrado ao WhatsApp do seu negócio. Responde leads, agenda, confirma e reativa clientes, sem você precisar estar online.</p>
            <a href={WPP} target="_blank" rel="noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="#fff"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.43zM12.05 21.5a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.76.99 1-3.66-.23-.38a9.6 9.6 0 1 1 8.24 4.6z" /></svg>Quero para meu negócio</a>
          </div>
        </div>

        {/* CONTATO */}
        <div className="rise">
          <div className="seclabel"><span className="br" /><span>Contato</span><div className="line" /></div>
          <div className="linhas">
            <a className="linha glass" href={WPP} target="_blank" rel="noreferrer"><div className="em" style={{ background: "rgba(16,185,129,.1)", border: "1px solid rgba(16,185,129,.24)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="#6ee7b7"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.43zM12.05 21.5a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.76.99 1-3.66-.23-.38a9.6 9.6 0 1 1 8.24 4.6z" /></svg></div><div className="nm">Falar no WhatsApp</div><span className="tg" style={{ background: "rgba(16,185,129,.09)", border: "1px solid rgba(16,185,129,.24)", color: "#6ee7b7" }}>DIRETO</span></a>
            <a className="linha glass" href={INSTA} target="_blank" rel="noreferrer"><div className="em" style={{ background: "rgba(236,72,153,.1)", border: "1px solid rgba(236,72,153,.24)" }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#f9a8d4" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="#f9a8d4" stroke="none" /></svg></div><div className="nm">@conversoo.automacoes</div><span className="tg" style={{ background: "rgba(236,72,153,.09)", border: "1px solid rgba(236,72,153,.24)", color: "#f9a8d4" }}>INSTAGRAM</span></a>
          </div>
        </div>

        <footer className="cv-footer"><span className="blink-dot" />© 2026 CONVERSOO — ALL SYSTEMS OPERATIONAL · 51 99260-4341</footer>
      </main>
    </>
  );
}

const css = `
.aurora-wrap { position:fixed; inset:0; z-index:0; overflow:hidden; background:#070512; }
.aurora { position:absolute; border-radius:50%; filter:blur(75px); }
.a1 { width:420px; height:420px; background:#7c3aed; opacity:.6; top:-120px; left:-100px; animation:drift1 16s ease-in-out infinite; }
.a2 { width:380px; height:380px; background:#ec4899; opacity:.5; top:22%; right:-140px; animation:drift2 20s ease-in-out infinite; }
.a3 { width:360px; height:360px; background:#4f46e5; opacity:.5; bottom:-100px; left:-70px; animation:drift3 18s ease-in-out infinite; }
.a4 { width:280px; height:280px; background:#db2777; opacity:.35; top:60%; left:25%; animation:drift1 24s ease-in-out infinite; }
.a5 { width:300px; height:300px; background:#6d28d9; opacity:.4; top:38%; left:-60px; animation:drift2 22s ease-in-out infinite; }
@keyframes drift1 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(40px,55px) scale(1.15)} }
@keyframes drift2 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(-55px,40px) scale(1.1)} }
@keyframes drift3 { 0%,100%{transform:translate(0,0) scale(1)} 50%{transform:translate(45px,-40px) scale(1.18)} }

.grade { position:fixed; inset:0; z-index:1; pointer-events:none; opacity:.4;
  background-image:linear-gradient(rgba(160,120,255,0.06) 1px,transparent 1px),linear-gradient(90deg,rgba(160,120,255,0.06) 1px,transparent 1px);
  background-size:40px 40px;
  -webkit-mask-image:radial-gradient(ellipse at 50% 25%,#000,transparent 70%);
  mask-image:radial-gradient(ellipse at 50% 25%,#000,transparent 70%); }
.veu { position:fixed; inset:0; z-index:1; pointer-events:none;
  background:radial-gradient(ellipse at 50% 0%,rgba(7,5,18,0.1),rgba(7,5,18,0.74) 70%); }
.scan { position:fixed; left:0; right:0; height:160px; z-index:5; pointer-events:none;
  background:linear-gradient(to bottom,transparent,rgba(180,150,255,0.08),transparent);
  animation:scandown 2.4s ease-out 1 forwards; }
@keyframes scandown { 0%{top:-160px;opacity:1} 100%{top:110vh;opacity:0} }

.cv-main { position:relative; z-index:2; max-width:460px; margin:0 auto; padding:2.6rem 1.2rem 2.4rem; font-family:${FONT_BODY}; color:#f6f3ff; }
body { background:#070512; }

.rise { opacity:0; transform:translateY(22px); animation:rise .7s cubic-bezier(.2,.7,.3,1) forwards; }
.rise:nth-child(2){animation-delay:1.3s} .rise:nth-child(3){animation-delay:1.42s}
.rise:nth-child(4){animation-delay:1.54s} .rise:nth-child(5){animation-delay:1.66s}
.rise:nth-child(6){animation-delay:1.78s} .rise:nth-child(7){animation-delay:1.9s}
@keyframes rise { to{opacity:1;transform:none} }

.hero { text-align:center; margin-bottom:2.2rem; }
.orb-stage { width:150px; height:150px; margin:0 auto 1.2rem; position:relative; animation:orbBoot 1.2s cubic-bezier(.2,.8,.2,1) both; }
@keyframes orbBoot { 0%{transform:scale(0);opacity:0} 60%{transform:scale(1.12)} 100%{transform:scale(1);opacity:1} }
.orb-stage svg { position:absolute; inset:0; width:100%; height:100%; }
.ring-a { animation:spin 14s linear infinite; transform-origin:75px 75px; }
.ring-b { animation:spinR 10s linear infinite; transform-origin:75px 75px; }
.ring-c { animation:spin 20s linear infinite; transform-origin:75px 75px; }
@keyframes spin { to{transform:rotate(360deg)} }
@keyframes spinR { to{transform:rotate(-360deg)} }
.core-glow { animation:coreGlow 3.2s ease-in-out infinite; transform-origin:75px 75px; }
@keyframes coreGlow { 0%,100%{opacity:.85;transform:scale(1)} 50%{opacity:1;transform:scale(1.06)} }
.orbit-1 { animation:spin 8s linear infinite; transform-origin:75px 75px; }
.orbit-2 { animation:spinR 12s linear infinite; transform-origin:75px 75px; }
.orbit-3 { animation:spin 16s linear infinite; transform-origin:75px 75px; }
.eye-scan { animation:eyeScan 4s ease-in-out infinite; }
@keyframes eyeScan { 0%,100%{transform:translateY(-4px);opacity:.4} 50%{transform:translateY(4px);opacity:1} }

.kicker { font-family:${FONT_MONO}; font-size:.66rem; color:#b9a3ff; letter-spacing:4px; text-transform:lowercase; margin-bottom:.6rem; }
.cv-h1 { font-size:1.8rem; font-weight:800; letter-spacing:-.5px; background:linear-gradient(90deg,#fff,#d6c9ff 45%,#fbb6ce); -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent; margin-bottom:.5rem; }
.sub { font-size:.92rem; color:#c8bee6; font-weight:300; }
.pills { display:flex; gap:8px; justify-content:center; margin-top:1.3rem; flex-wrap:wrap; }
.pill { display:inline-flex; align-items:center; gap:7px; text-decoration:none; border-radius:100px; border:1px solid rgba(180,150,255,.3); background:rgba(124,58,237,.14); color:#dccdff; padding:.5rem 1.05rem; font-size:.8rem; font-weight:500; transition:.2s; -webkit-tap-highlight-color:transparent; }
.pill:active { background:rgba(124,58,237,.3); transform:scale(.96); }
.pill svg { width:15px; height:15px; }

.copy { margin:0 auto 2rem; max-width:400px; text-align:center; font-size:.92rem; line-height:1.65; color:#c8bee6; }
.copy b { color:#f6f3ff; font-weight:600; }

.seclabel { display:flex; align-items:center; gap:10px; margin:2.1rem 0 1rem; }
.seclabel .br { width:6px; height:6px; border-radius:1px; background:#b9a3ff; box-shadow:0 0 8px #b9a3ff; transform:rotate(45deg); flex-shrink:0; animation:blink 2s infinite; }
.seclabel span { font-family:${FONT_MONO}; font-size:.63rem; letter-spacing:2.5px; text-transform:uppercase; color:#c2b2e8; white-space:nowrap; }
.seclabel .line { flex:1; height:1px; background:linear-gradient(90deg,rgba(160,120,255,.45),transparent); }

.glass { background:linear-gradient(135deg,rgba(124,90,200,0.1),rgba(124,90,200,0.04)); border:1px solid rgba(180,150,255,0.14); }
@supports ((-webkit-backdrop-filter:blur(2px)) or (backdrop-filter:blur(2px))) {
  .glass { background:rgba(124,90,200,0.08); -webkit-backdrop-filter:blur(14px); backdrop-filter:blur(14px); }
}

.destaque { display:flex; gap:14px; align-items:center; text-decoration:none; padding:1.1rem; border-radius:18px; border:1px solid rgba(16,185,129,.32); background:linear-gradient(135deg,rgba(16,185,129,.12),rgba(124,58,237,.06)); transition:.2s; margin-bottom:.7rem; position:relative; overflow:hidden; -webkit-tap-highlight-color:transparent; }
.destaque::before { content:''; position:absolute; inset:0; border-radius:18px; background:linear-gradient(135deg,rgba(110,231,183,.08),transparent 60%); animation:sheen 4s ease-in-out infinite; }
@keyframes sheen { 0%,100%{opacity:.3} 50%{opacity:.7} }
.destaque:active { transform:scale(.985); }
.destaque .ic { width:54px; height:54px; flex-shrink:0; border-radius:14px; background:linear-gradient(135deg,#064e3b,#065f46); display:flex; align-items:center; justify-content:center; border:1px solid rgba(110,231,183,.25); position:relative; z-index:1; }
.destaque .tx { position:relative; z-index:1; }
.destaque h3 { font-size:1rem; font-weight:700; color:#fff; display:flex; align-items:center; gap:8px; margin-bottom:3px; flex-wrap:wrap; }
.destaque p { font-size:.8rem; color:#c8bee6; line-height:1.4; }

.grid { display:grid; grid-template-columns:1fr 1fr; gap:.7rem; }
.gcard { position:relative; overflow:hidden; display:flex; flex-direction:column; gap:11px; text-decoration:none; padding:1.15rem 1rem; border-radius:16px; transition:.2s; -webkit-tap-highlight-color:transparent; }
.gcard:active { transform:scale(.97); }
.gcard .ic { width:46px; height:46px; border-radius:13px; display:flex; align-items:center; justify-content:center; border:1px solid rgba(255,255,255,.09); }
.gcard h4 { font-size:.93rem; font-weight:600; color:#f6f3ff; }
.gcard .desc { font-size:.76rem; color:#9a8cc2; line-height:1.45; flex:1; }

.badge { font-family:${FONT_MONO}; font-size:.57rem; border-radius:6px; padding:3px 8px; display:inline-flex; align-items:center; gap:5px; letter-spacing:1px; font-weight:600; width:fit-content; }
.b-live { background:rgba(16,185,129,.16); color:#6ee7b7; border:1px solid rgba(16,185,129,.38); }
.b-beta { background:rgba(245,158,11,.16); color:#fcd34d; border:1px solid rgba(245,158,11,.38); }
.b-case { background:rgba(167,139,250,.18); color:#c4b5fd; border:1px solid rgba(167,139,250,.38); }
.dot { width:6px; height:6px; border-radius:50%; background:#10b981; box-shadow:0 0 7px #10b981; animation:blink 1.4s infinite; }
@keyframes blink { 0%,100%{opacity:1} 50%{opacity:.3} }

.agentes,.linhas { display:flex; flex-direction:column; gap:.55rem; }
.agente { display:flex; align-items:center; gap:12px; text-decoration:none; padding:.85rem .95rem; border-radius:14px; transition:.2s; -webkit-tap-highlight-color:transparent; }
.agente:active { transform:scale(.985); }
.agente .av { position:relative; width:42px; height:42px; border-radius:12px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.agente .av .sd { position:absolute; bottom:-2px; right:-2px; width:10px; height:10px; border-radius:50%; border:2px solid #070512; animation:blink 1.6s infinite; }
.agente .nm { font-size:.91rem; font-weight:600; color:#f6f3ff; }
.agente .rl { font-size:.74rem; color:#9a8cc2; line-height:1.3; }
.agente .lb { margin-left:auto; font-family:${FONT_MONO}; font-size:.6rem; letter-spacing:1px; color:#9d8fc4; flex-shrink:0; }

.linha { display:flex; align-items:center; gap:12px; text-decoration:none; padding:.85rem .95rem; border-radius:13px; transition:.2s; -webkit-tap-highlight-color:transparent; }
.linha:active { transform:scale(.985); }
.linha .em { width:38px; height:38px; border-radius:10px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
.linha .nm { font-size:.85rem; font-weight:600; color:#c8bee6; }
.linha .tg { margin-left:auto; font-family:${FONT_MONO}; font-size:.58rem; letter-spacing:1.2px; padding:3px 8px; border-radius:5px; flex-shrink:0; }

.cta { position:relative; overflow:hidden; border-radius:18px; padding:1.6rem; border:1px solid rgba(124,58,237,.35); background:linear-gradient(135deg,rgba(124,58,237,.2),rgba(236,72,153,.12)); }
.cta-glow { position:absolute; top:-50px; left:-50px; width:190px; height:190px; background:radial-gradient(circle,rgba(160,120,255,.3),transparent 70%); pointer-events:none; animation:ctaPulse 4s ease-in-out infinite; }
@keyframes ctaPulse { 0%,100%{opacity:.5;transform:scale(1)} 50%{opacity:.9;transform:scale(1.15)} }
.cta h3 { font-size:1.12rem; font-weight:700; color:#fff; margin-bottom:.5rem; position:relative; }
.cta p { font-size:.85rem; color:#c8bee6; line-height:1.55; margin-bottom:1.1rem; position:relative; }
.cta a { position:relative; display:flex; align-items:center; justify-content:center; gap:8px; text-decoration:none; width:100%; padding:.92rem 1rem; border-radius:12px; background:linear-gradient(135deg,#7c3aed,#ec4899); color:#fff; font-weight:600; font-size:.9rem; box-shadow:0 4px 22px -6px rgba(236,72,153,.55); transition:.2s; -webkit-tap-highlight-color:transparent; }
.cta a:active { transform:scale(.98); }

.cv-footer { margin-top:2.4rem; text-align:center; font-family:${FONT_MONO}; font-size:.6rem; color:#5e4f86; letter-spacing:1.5px; }
.cv-footer .blink-dot { display:inline-block; width:5px; height:5px; border-radius:50%; background:#10b981; box-shadow:0 0 6px #10b981; margin-right:6px; vertical-align:middle; animation:blink 1.4s infinite; }

/* "Reduzir movimento": removemos só o que é grande ou de varredura (entrada
   e scan full-screen, que é o que pode incomodar de verdade) e garantimos que
   o conteúdo apareça sem depender de animação. As micro-animações ambientais,
   lentas e sutis (aurora, orbe, brilhos, pulsos) continuam — sem o marretão
   '*{animation:none!important}', que deixava a página inteira parada. */
@media (prefers-reduced-motion:reduce){
  .rise{opacity:1;transform:none;animation:none}
  .orb-stage{animation:none}
  .scan{display:none}
}
`;
