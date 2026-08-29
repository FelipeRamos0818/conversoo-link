import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { categorias, type Item } from "../data";

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

        <footer className="nv-footer">© 2026 Conversoo</footer>
      </main>
    </>
  );
}

const css = `
html, body { background:#070512; overflow-x:hidden; }
.nv-main {
  position:relative; z-index:1; width:100%; max-width:480px; margin:0 auto;
  padding:2.4rem 1.1rem 3rem;
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

.nv-footer {
  margin-top:1.6rem; text-align:center;
  font-family:'JetBrains Mono', ui-monospace, monospace;
  font-size:.62rem; letter-spacing:1.2px; color:#5e4f86;
}

@media (prefers-reduced-motion:reduce){
  .nv-panel, .nv-chevron { transition:none; }
}
`;
