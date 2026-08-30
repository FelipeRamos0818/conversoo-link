import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categorias, type Item } from "../data";

// >>> Trocar aqui o número real (DDI + DDD + número, só dígitos) e o Instagram.
const WPP_NUMERO = "5551992604341";
const WPP_MSG = "Olá! Vim pela página da Conversoo e quero saber mais.";
const INSTAGRAM = "https://instagram.com/conversoo.automacoes";

const WPP_URL = `https://wa.me/${WPP_NUMERO}?text=${encodeURIComponent(WPP_MSG)}`;

function IconeWpp({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.16-.17.2-.35.22-.64.08-.3-.15-1.26-.46-2.39-1.48-.88-.79-1.48-1.76-1.65-2.06-.18-.3-.02-.46.13-.6.13-.14.3-.35.44-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.03 1.02-1.03 2.48 0 1.46 1.06 2.87 1.21 3.07.15.2 2.1 3.2 5.08 4.49.71.3 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2-1.41.25-.7.25-1.29.18-1.42-.08-.12-.27-.2-.57-.34M12.05 21.8a9.87 9.87 0 0 1-5.03-1.38l-.36-.22-3.74.99 1-3.65-.24-.38a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.89-9.88a9.82 9.82 0 0 1 6.99 2.9 9.83 9.83 0 0 1 2.89 6.99c0 5.45-4.44 9.89-9.89 9.89M20.52 3.45A11.82 11.82 0 0 0 12.05 0C5.46 0 .1 5.36.1 11.95c0 2.1.55 4.14 1.6 5.94L0 24l6.34-1.65a11.88 11.88 0 0 0 5.68 1.45h.01c6.58 0 11.94-5.36 11.94-11.95a11.86 11.86 0 0 0-3.45-8.4" />
    </svg>
  );
}

export const Route = createFileRoute("/")({
  component: Novo,
});

function ItemRow({ item }: { item: Item }) {
  const inner = (
    <>
      <span className="nv-thumb">
        <img src={item.prev} alt="" loading="lazy" width="46" height="46" />
      </span>
      <span className="nv-item-txt">
        <span className="nv-item-nome">{item.nome}</span>
        {item.subtitulo && <span className="nv-item-sub">{item.subtitulo}</span>}
      </span>
      {item.badge && (
        <span className={"nv-badge" + (item.badge === "BETA" ? " beta" : "")}>
          {item.badge}
        </span>
      )}
    </>
  );

  if (!item.href) {
    return <div className="nv-item nv-item--nolink">{inner}</div>;
  }
  return (
    <a className="nv-item" href={item.href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}

function Novo() {
  const [openId, setOpenId] = useState<string | null>(null);

  return (
    <>
      <style>{css}</style>
      <main className="nv-main">
        <header className="nv-header">
          <h1 className="nv-brand">Conversoo</h1>
          <p className="nv-tagline">Tudo que a gente construiu, em um lugar só.</p>
          <a className="nv-cta" href={WPP_URL} target="_blank" rel="noopener noreferrer">
            <IconeWpp className="nv-cta-ico" />
            Falar com a gente
          </a>
        </header>

        {categorias.map((cat) => {
          const open = openId === cat.id;
          return (
            <section key={cat.id} className={"nv-card" + (open ? " nv-open" : "")}>
              <button
                type="button"
                className="nv-head"
                aria-expanded={open}
                onClick={() => setOpenId(open ? null : cat.id)}
              >
                <span className="nv-banner-wrap">
                  <img className="nv-banner" src={cat.imagem} alt="" />
                </span>
                <span className="nv-headrow">
                  <span className="nv-headtxt">
                    <span className="nv-cat-title">{cat.titulo}</span>
                    <span className="nv-cat-sub">{cat.subtitulo}</span>
                  </span>
                  <svg className="nv-chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </span>
              </button>

              <div className="nv-panel">
                <div className="nv-panel-inner">
                  <div className="nv-list">
                    {cat.itens.map((item) => (
                      <ItemRow key={item.nome} item={item} />
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <footer className="nv-footer">
          <div className="nv-footer-links">
            <a href={WPP_URL} target="_blank" rel="noopener noreferrer">
              <IconeWpp className="nv-footer-ico" />
              WhatsApp
            </a>
            <a href={INSTAGRAM} target="_blank" rel="noopener noreferrer">
              <svg className="nv-footer-ico" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" />
                <circle cx="12" cy="12" r="4.2" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" stroke="none" />
              </svg>
              Instagram
            </a>
          </div>
          <p className="nv-copy">© 2026 Conversoo</p>
        </footer>
      </main>

      <a
        className="nv-fab"
        href={WPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
      >
        <IconeWpp className="nv-fab-ico" />
      </a>
    </>
  );
}

const css = `
html, body { background:#070512; overflow-x:hidden; }
.nv-main {
  position:relative; z-index:1; width:100%; max-width:480px; margin:0 auto;
  /* folga no pé pro FAB não cobrir o rodapé no fim do scroll */
  padding:2.4rem 1.1rem 6rem;
  font-family:'Outfit', system-ui, sans-serif; color:#f6f3ff;
  min-height:100vh; background:#070512;
}

.nv-header { text-align:center; margin-bottom:1.8rem; }
.nv-brand {
  font-size:1.9rem; font-weight:800; letter-spacing:-.5px; margin:0;
  background:linear-gradient(90deg,#fff,#c4b5fd 55%,#f0abfc);
  -webkit-background-clip:text; background-clip:text; -webkit-text-fill-color:transparent;
}
.nv-tagline { margin:.45rem 0 0; font-size:.9rem; font-weight:300; color:#c8bee6; }

/* CTA principal: pílula em gradiente roxo, mesma família dos cards */
.nv-cta {
  display:inline-flex; align-items:center; justify-content:center; gap:8px;
  margin-top:1.05rem; padding:.62rem 1.25rem; border-radius:999px;
  font-size:.88rem; font-weight:600; color:#fff; text-decoration:none;
  background:linear-gradient(100deg,#7c5ac8,#a78bfa 55%,#c084fc);
  border:1px solid rgba(196,181,253,.45);
  box-shadow:0 6px 22px -10px rgba(124,90,200,.9);
  transition:transform .2s ease, box-shadow .2s ease, filter .2s ease;
  -webkit-tap-highlight-color:transparent;
}
.nv-cta:hover { filter:brightness(1.07); box-shadow:0 10px 26px -10px rgba(167,139,250,.95); }
.nv-cta:active { transform:scale(.98); }
.nv-cta-ico { width:17px; height:17px; flex-shrink:0; }

/* Card de categoria (vidro) */
.nv-card {
  border-radius:20px; overflow:hidden; margin-bottom:1rem;
  border:1px solid rgba(180,150,255,0.16);
  background:linear-gradient(135deg,rgba(124,90,200,0.12),rgba(124,90,200,0.05));
  transition:border-color .25s ease;
}
@supports ((-webkit-backdrop-filter:blur(2px)) or (backdrop-filter:blur(2px))) {
  .nv-card { background:rgba(124,90,200,0.08); -webkit-backdrop-filter:blur(14px); backdrop-filter:blur(14px); }
}
.nv-card.nv-open { border-color:rgba(180,150,255,0.34); }

/* Cabeçalho clicável */
.nv-head {
  display:block; width:100%; min-width:0; padding:0; border:0; background:transparent;
  text-align:left; cursor:pointer; color:inherit; font:inherit;
  -webkit-tap-highlight-color:transparent;
}
/* Banner: wrapper para poder sobrepor gradiente + overlay na imagem. */
.nv-banner-wrap {
  position:relative; display:block; width:100%; max-width:100%; aspect-ratio:16/9;
  overflow:hidden; background:#0d0a1e;
  border-top-left-radius:20px; border-top-right-radius:20px;
}
.nv-banner {
  position:absolute; inset:0; width:100%; height:100%; object-fit:cover; display:block;
  /* escurece e dessatura levemente p/ igualar a intensidade entre as 3 imagens */
  filter:brightness(.88) saturate(.92);
}
/* overlay roxo escuro bem sutil sobre toda a imagem (uniformiza temperatura) */
.nv-banner-wrap::before {
  content:''; position:absolute; inset:0; pointer-events:none;
  background:linear-gradient(160deg, rgba(30,14,60,.22), rgba(12,8,26,.30));
}
/* gradiente na base: a imagem "derrete" na cor do card em vez de cortar seco */
.nv-banner-wrap::after {
  content:''; position:absolute; left:0; right:0; bottom:0; height:42%; pointer-events:none;
  background:linear-gradient(to bottom, rgba(13,10,26,0) 0%, rgba(13,10,26,.65) 55%, #0e0a1a 100%);
}
.nv-headrow {
  display:flex; align-items:center; gap:12px; padding:.95rem 1.1rem;
}
.nv-headtxt { display:flex; flex-direction:column; gap:2px; flex:1; min-width:0; }
.nv-cat-title { font-size:1.05rem; font-weight:700; color:#f6f3ff; }
.nv-cat-sub { font-size:.8rem; color:#a99ccb; line-height:1.35; }
.nv-chevron {
  width:20px; height:20px; flex-shrink:0; color:#c4b5fd;
  transition:transform .3s ease;
}
.nv-card.nv-open .nv-chevron { transform:rotate(180deg); }

/* Painel expansível (anima altura via grid-template-rows) */
.nv-panel {
  display:grid; grid-template-rows:0fr;
  transition:grid-template-rows .35s cubic-bezier(.3,.7,.3,1);
}
.nv-card.nv-open .nv-panel { grid-template-rows:1fr; }
.nv-panel-inner { overflow:hidden; }
.nv-list {
  display:flex; flex-direction:column; gap:.5rem;
  padding:.3rem .7rem 1rem;
}

/* Item */
.nv-item {
  display:flex; align-items:center; gap:12px; text-decoration:none; color:inherit;
  min-width:0; padding:.6rem .65rem; border-radius:13px;
  border:1px solid rgba(255,255,255,0.05); background:rgba(255,255,255,0.02);
  transition:background .2s ease, border-color .2s ease, transform .2s ease;
  -webkit-tap-highlight-color:transparent;
}
.nv-item:hover { background:rgba(124,90,200,0.12); border-color:rgba(180,150,255,0.28); }
.nv-item:active { transform:scale(.99); }
.nv-item--nolink { cursor:default; }
.nv-thumb {
  width:46px; height:46px; flex-shrink:0; border-radius:11px; overflow:hidden;
  background:#0d0a1e; border:1px solid rgba(180,150,255,0.22);
}
.nv-thumb img { width:100%; height:100%; object-fit:cover; object-position:top; display:block; }
.nv-item-txt { flex:1 1 auto; min-width:0; display:flex; flex-direction:column; gap:1px; }
.nv-item-nome { font-size:.9rem; font-weight:600; color:#f6f3ff; overflow-wrap:anywhere; }
.nv-item-sub { font-size:.75rem; color:#9a8cc2; line-height:1.3; overflow-wrap:anywhere; }
.nv-badge {
  flex-shrink:0; font-family:'JetBrains Mono', ui-monospace, monospace;
  font-size:.56rem; font-weight:600; letter-spacing:1px; padding:3px 8px; border-radius:6px;
  background:rgba(167,139,250,.28); color:#dccbff; border:1px solid rgba(167,139,250,.6);
}
.nv-badge.beta { background:rgba(245,158,11,.24); color:#ffd97a; border-color:rgba(245,158,11,.55); }

.nv-footer { margin-top:1.6rem; text-align:center; }
.nv-footer-links { display:flex; justify-content:center; gap:.55rem; }
.nv-footer-links a {
  display:inline-flex; align-items:center; gap:7px; text-decoration:none;
  padding:.45rem .95rem; border-radius:999px;
  font-size:.78rem; font-weight:500; color:#c8bee6;
  border:1px solid rgba(180,150,255,0.16); background:rgba(255,255,255,0.02);
  transition:background .2s ease, border-color .2s ease, color .2s ease;
  -webkit-tap-highlight-color:transparent;
}
.nv-footer-links a:hover {
  background:rgba(124,90,200,0.12); border-color:rgba(180,150,255,0.34); color:#f6f3ff;
}
.nv-footer-ico { width:15px; height:15px; flex-shrink:0; color:#c4b5fd; }
.nv-copy {
  margin:1rem 0 0;
  font-family:'JetBrains Mono', ui-monospace, monospace;
  font-size:.62rem; letter-spacing:1.2px; color:#5e4f86;
}

/* Botão flutuante de WhatsApp */
.nv-fab {
  position:fixed; z-index:20;
  right:max(1rem, env(safe-area-inset-right));
  bottom:calc(1rem + env(safe-area-inset-bottom));
  display:flex; align-items:center; justify-content:center;
  width:54px; height:54px; border-radius:50%;
  background:#25D366; color:#06301a;
  border:1px solid rgba(196,181,253,.35);
  box-shadow:0 10px 28px -10px rgba(0,0,0,.85), 0 0 0 6px rgba(124,90,200,.14);
  transition:transform .2s ease, box-shadow .2s ease;
  -webkit-tap-highlight-color:transparent;
}
.nv-fab:hover { transform:scale(1.06); box-shadow:0 12px 32px -10px rgba(0,0,0,.9), 0 0 0 9px rgba(124,90,200,.18); }
.nv-fab:active { transform:scale(.96); }
.nv-fab-ico { width:27px; height:27px; }

@media (prefers-reduced-motion:reduce){
  .nv-panel, .nv-chevron, .nv-cta, .nv-fab { transition:none; }
}
`;
