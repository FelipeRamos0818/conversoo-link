import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef } from "react";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Conversoo Automações" },
      {
        name: "description",
        content:
          "Plataformas, automações e agentes de IA. Tecnologia que trabalha enquanto você cresce.",
      },
    ],
  }),
});

/* ---------- Background canvas ---------- */
function StarfieldCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const stars = Array.from({ length: 180 }, () => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: Math.random() * 1.2 + 0.2,
      base: Math.random() * 0.5 + 0.2,
      speed: Math.random() * 0.002 + 0.0006,
      phase: Math.random() * Math.PI * 2,
    }));

    const nebColors = [
      "rgba(109,40,217,",
      "rgba(236,72,153,",
      "rgba(99,102,241,",
      "rgba(109,40,217,",
      "rgba(236,72,153,",
    ];
    const nebulas = Array.from({ length: 5 }, (_, i) => ({
      x: Math.random() * w,
      y: Math.random() * h,
      r: 220 + Math.random() * 260,
      color: nebColors[i],
      a: 0.03 + Math.random() * 0.07,
    }));

    const onResize = () => {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const draw = (t: number) => {
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "#05050f";
      ctx.fillRect(0, 0, w, h);

      for (const n of nebulas) {
        const grad = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r);
        grad.addColorStop(0, n.color + n.a + ")");
        grad.addColorStop(1, n.color + "0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      for (const s of stars) {
        const a = s.base + Math.sin(t * s.speed + s.phase) * 0.4;
        ctx.globalAlpha = Math.max(0.05, Math.min(1, a));
        ctx.fillStyle = "#dcd6ff";
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        background: "#05050f",
      }}
    />
  );
}

/* ---------- Helpers ---------- */
const FONT_BODY = "'Outfit', system-ui, sans-serif";
const FONT_MONO = "'JetBrains Mono', ui-monospace, monospace";

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        margin: "2rem 0 1rem",
      }}
    >
      <span
        style={{
          fontFamily: FONT_MONO,
          fontSize: "0.63rem",
          letterSpacing: 3,
          textTransform: "uppercase",
          color: "#5b4a8a",
        }}
      >
        {children}
      </span>
      <span
        style={{
          flex: 1,
          height: 1,
          background:
            "linear-gradient(90deg, rgba(109,40,217,0.35), transparent)",
        }}
      />
    </div>
  );
}

function Badge({
  kind,
  children,
}: {
  kind: "LIVE" | "BETA" | "CASE";
  children?: React.ReactNode;
}) {
  const styles: Record<string, React.CSSProperties> = {
    LIVE: {
      background: "rgba(16,185,129,0.1)",
      color: "#6ee7b7",
      border: "1px solid rgba(16,185,129,0.2)",
    },
    BETA: {
      background: "rgba(245,158,11,0.1)",
      color: "#fcd34d",
      border: "1px solid rgba(245,158,11,0.2)",
    },
    CASE: {
      background: "rgba(109,40,217,0.12)",
      color: "#c4b5fd",
      border: "1px solid rgba(109,40,217,0.2)",
    },
  };
  return (
    <span
      style={{
        ...styles[kind],
        fontFamily: FONT_MONO,
        fontSize: "0.6rem",
        borderRadius: 6,
        padding: "3px 7px",
        display: "inline-flex",
        alignItems: "center",
        gap: 5,
        letterSpacing: 1,
      }}
    >
      {kind === "LIVE" && (
        <span
          style={{
            width: 6,
            height: 6,
            borderRadius: "50%",
            background: "#10b981",
            animation: "blink 1.5s infinite",
          }}
        />
      )}
      {children || kind}
    </span>
  );
}

/* ---------- Page ---------- */
function Index() {
  return (
    <>
      <style>{css}</style>
      <StarfieldCanvas />
      <main
        style={{
          position: "relative",
          zIndex: 2,
          maxWidth: 500,
          margin: "0 auto",
          padding: "2.5rem 1.1rem 2rem",
          fontFamily: FONT_BODY,
          color: "#e9e2ff",
        }}
      >
        {/* HERO */}
        <section className="fade-up" style={{ textAlign: "center" }}>
          <div
            style={{
              position: "relative",
              width: 88,
              height: 88,
              margin: "0 auto 1.1rem",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: -10,
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(109,40,217,0.35), transparent 70%)",
                animation: "glowPulse 3s ease-in-out infinite",
              }}
            />
            <div
              className="conic-border"
              style={{
                position: "absolute",
                inset: 0,
                borderRadius: "50%",
                padding: 2,
              }}
            >
              <div
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: "50%",
                  background: "#05050f",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 30% 30%, #6D28D9, #4c1d95 60%, #EC4899)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: FONT_MONO,
                    fontSize: 22,
                    color: "#c4b5fd",
                    fontWeight: 500,
                  }}
                >
                  C
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              fontFamily: FONT_MONO,
              fontSize: "0.65rem",
              color: "#6D28D9",
              letterSpacing: 3,
              textTransform: "lowercase",
            }}
          >
            conversoo.automações
          </div>
          <h1
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 800,
              fontSize: "1.5rem",
              margin: "0.5rem 0 0.4rem",
              background:
                "linear-gradient(90deg,#f0e8ff,#c4b5fd,#f9a8d4)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Conversoo Automações
          </h1>
          <p
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 300,
              fontSize: "0.83rem",
              color: "#6b5c88",
              margin: 0,
            }}
          >
            Tecnologia que trabalha enquanto você cresce.
          </p>

          <div
            style={{
              display: "flex",
              gap: 8,
              justifyContent: "center",
              marginTop: "1.1rem",
              flexWrap: "wrap",
            }}
          >
            <Pill href="https://instagram.com/conversoo.automacoes">
              Instagram
            </Pill>
            <Pill href="https://wa.me/5551992604341">+55 51 99260-4341</Pill>
          </div>
        </section>

        {/* COPY */}
        <section
          className="fade-up"
          style={{
            margin: "2.2rem auto 0",
            maxWidth: 380,
            padding: "0 1rem",
            borderLeft: "2px solid rgba(109,40,217,0.3)",
            borderRadius: 0,
          }}
        >
          <p
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 400,
              fontSize: "0.88rem",
              color: "#7463a0",
              lineHeight: 1.7,
              textAlign: "center",
              margin: 0,
            }}
          >
            Tudo que você ver aqui, a gente construiu. Plataformas, automações
            e agentes de IA. Se você tem um problema no seu negócio, a gente
            provavelmente já sabe como resolver — fala com a gente.
          </p>
        </section>

        {/* PLATAFORMAS */}
        <SectionLabel>Plataformas</SectionLabel>

        <a
          href="https://bolao.conversoo.cloud/"
          target="_blank"
          rel="noreferrer"
          className="fade-up wide-card"
          style={{
            display: "flex",
            gap: 14,
            alignItems: "center",
            padding: "1rem",
            borderRadius: 18,
            border: "1px solid rgba(16,185,129,0.2)",
            background:
              "linear-gradient(135deg,rgba(16,185,129,0.05),rgba(109,40,217,0.04))",
            textDecoration: "none",
            color: "inherit",
            marginBottom: "0.8rem",
            transition: "all 0.25s ease",
          }}
        >
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 13,
              background: "linear-gradient(135deg,#064e3b,#065f46)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
              <circle cx="16" cy="13" r="8" stroke="#6ee7b7" strokeWidth="1.5" fill="none" />
              <path d="M16 5 L18 10 L23 10 L19 13.5 L20.5 19 L16 16 L11.5 19 L13 13.5 L9 10 L14 10 Z" fill="#6ee7b7" opacity="0.9" />
              <rect x="10" y="22" width="12" height="2" rx="1" fill="#6ee7b7" opacity="0.5" />
              <rect x="13" y="24" width="6" height="1.5" rx="0.75" fill="#6ee7b7" opacity="0.4" />
            </svg>
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 4 }}>
              <span style={{ fontWeight: 600, fontSize: "0.95rem", color: "#e9e2ff" }}>
                Bolão da Copa 2026
              </span>
              <Badge kind="LIVE" />
            </div>
            <div style={{ fontSize: "0.78rem", color: "#7463a0", lineHeight: 1.4 }}>
              Palpites, ranking e pontuação automática com seus amigos
            </div>
          </div>
        </a>

        {/* Grid 2x2 */}
        <div
          className="fade-up"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "0.7rem",
          }}
        >
          <GridCard
            href="https://querapostar.conversoo.cloud"
            iconBg="linear-gradient(135deg,#1e1b4b,#312e81)"
            name="Quer Apostar?"
            desc="Apostas personalizadas entre amigos em qualquer tema"
            badge={<Badge kind="LIVE" />}
            svg={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="9" stroke="#818cf8" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="16" r="2" fill="#818cf8" />
                <circle cx="16" cy="9" r="1" fill="#818cf8" opacity="0.6" />
                <circle cx="16" cy="23" r="1" fill="#818cf8" opacity="0.6" />
                <circle cx="9" cy="16" r="1" fill="#818cf8" opacity="0.6" />
                <circle cx="23" cy="16" r="1" fill="#818cf8" opacity="0.6" />
                <line x1="16" y1="10" x2="16" y2="14" stroke="#818cf8" strokeWidth="1" opacity="0.4" />
                <line x1="16" y1="18" x2="16" y2="22" stroke="#818cf8" strokeWidth="1" opacity="0.4" />
                <line x1="10" y1="16" x2="14" y2="16" stroke="#818cf8" strokeWidth="1" opacity="0.4" />
                <line x1="18" y1="16" x2="22" y2="16" stroke="#818cf8" strokeWidth="1" opacity="0.4" />
              </svg>
            }
          />
          <GridCard
            href="https://glam-glow-gate.lovable.app"
            iconBg="linear-gradient(135deg,#4a1040,#7c1d6f)"
            name="Glowly"
            desc="Agendamento para salões e estéticas com IA"
            badge={<Badge kind="BETA" />}
            svg={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <defs>
                  <linearGradient id="glyA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#fae8ff" />
                    <stop offset="100%" stopColor="#a855f7" />
                  </linearGradient>
                  <linearGradient id="glyB" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0%" stopColor="#e879f9" stopOpacity="0.8" />
                    <stop offset="100%" stopColor="#7e22ce" stopOpacity="0.6" />
                  </linearGradient>
                </defs>
                <path d="M11 16 L23 16 L17 28 Z" fill="url(#glyB)" />
                <path d="M17 28 L23 16 L17 20 Z" fill="url(#glyA)" opacity="0.7" />
                <path d="M13 8 L19 8 L23 16 L11 16 Z" fill="#e879f9" opacity="0.5" />
                <path d="M13 8 L19 8 L17 20 L11 16 Z" fill="#fae8ff" opacity="0.4" />
                <path d="M19 8 L23 16 L17 20 Z" fill="#c084fc" opacity="0.6" />
                <path d="M13 8 L19 8" stroke="white" strokeWidth="0.8" opacity="0.4" />
                <path d="M11 16 L23 16" stroke="white" strokeWidth="0.8" opacity="0.2" />
                <path d="M13 8 L19 8 L23 16 L17 28 L11 16 Z" stroke="#f0abfc" strokeWidth="1.2" fill="none" />
                <circle cx="19" cy="11" r="1.5" fill="white" opacity="0.8" />
              </svg>
            }
          />
          <GridCard
            href="https://catalogo.aromasamore.com.br"
            iconBg="linear-gradient(135deg,#4a1535,#7c1d55)"
            name="Amoré Catálogo"
            desc="Catálogo digital + automação de vendas"
            badge={<Badge kind="CASE" />}
            svg={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M16 8 C16 8 10 11 10 16.5 C10 20 12.5 23 16 23 C19.5 23 22 20 22 16.5 C22 11 16 8 16 8Z" fill="#fda4af" opacity="0.2" />
                <path d="M16 8 C16 8 10 11 10 16.5 C10 20 12.5 23 16 23 C19.5 23 22 20 22 16.5 C22 11 16 8 16 8Z" stroke="#fda4af" strokeWidth="1.5" fill="none" />
                <path d="M16 12 C16 12 13 14 13 16.5 C13 18.4 14.3 20 16 20" stroke="#fda4af" strokeWidth="1" opacity="0.5" strokeLinecap="round" />
                <circle cx="16" cy="16.5" r="1.5" fill="#fda4af" />
                <path d="M13 25 L16 23 L19 25" stroke="#fda4af" strokeWidth="1" strokeLinecap="round" opacity="0.5" />
              </svg>
            }
          />
          <GridCard
            href="https://hub.aromasamore.com.br"
            iconBg="linear-gradient(135deg,#1c1917,#292524)"
            name="Amoré Hub"
            desc="Gestão interna de produção"
            badge={<Badge kind="CASE" />}
            svg={
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="4.5" stroke="#fb923c" strokeWidth="1.5" fill="none" />
                <circle cx="16" cy="16" r="1.8" fill="#fb923c" />
                <path d="M16 7 L16 10M16 22 L16 25M7 16 L10 16M22 16 L25 16M9.5 9.5 L11.6 11.6M20.4 20.4 L22.5 22.5M22.5 9.5 L20.4 11.6M11.6 20.4 L9.5 22.5" stroke="#fb923c" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
        </div>

        {/* AGENTES IA */}
        <SectionLabel>Agentes IA ativos</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem" }}>
          <AgentRow
            href="https://conversoo-grow-page.lovable.app"
            name="Lia"
            role="Atendimento e diagnóstico comercial"
            label="Conversoo"
            dot="#10b981"
            avatarBg="rgba(109,40,217,0.12)"
            avatarBorder="rgba(109,40,217,0.2)"
            svg={
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="13" r="5.5" stroke="#c4b5fd" strokeWidth="1.5" fill="rgba(109,40,217,0.15)" />
                <circle cx="13.5" cy="12.5" r="1" fill="#c4b5fd" />
                <circle cx="18.5" cy="12.5" r="1" fill="#c4b5fd" />
                <path d="M13.5 15.5 Q16 17.5 18.5 15.5" stroke="#c4b5fd" strokeWidth="1" strokeLinecap="round" fill="none" />
                <path d="M10 20 Q16 24 22 20" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
                <line x1="16" y1="7.5" x2="16" y2="6" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="13" y1="8.2" x2="12.2" y2="6.9" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" />
                <line x1="19" y1="8.2" x2="19.8" y2="6.9" stroke="#c4b5fd" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            }
          />
          <AgentRow
            href="https://glam-glow-gate.lovable.app"
            name="Luna"
            role="Agendamento e atendimento"
            label="Glowly"
            dot="#f59e0b"
            avatarBg="rgba(245,158,11,0.08)"
            avatarBorder="rgba(245,158,11,0.15)"
            svg={
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path d="M22 16 C22 21 18.4 25 14 25 C9.6 25 6 21.4 6 17 C6 12.6 9.6 9 14 9 C12 11.5 12 15 14 17.5 C16 20 19.5 20.5 22 16Z" fill="#f0abfc" opacity="0.8" />
                <circle cx="20" cy="10" r="1" fill="#f0abfc" opacity="0.6" />
                <circle cx="24" cy="13" r="0.7" fill="#f0abfc" opacity="0.4" />
                <circle cx="22" cy="8" r="0.5" fill="#f0abfc" opacity="0.3" />
              </svg>
            }
          />
          <AgentRow
            href="https://catalogo.aromasamore.com.br"
            name="Pã"
            role="Vendas e relacionamento — centenas de leads/semana"
            label="Amoré"
            dot="#10b981"
            avatarBg="rgba(236,72,153,0.08)"
            avatarBorder="rgba(236,72,153,0.15)"
            svg={
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <path d="M16 10 C16 10 19 12 19 15 C19 17.2 17.7 19 16 19 C14.3 19 13 17.2 13 15 C13 12 16 10 16 10Z" fill="#fda4af" opacity="0.9" />
                <path d="M10 13 C10 13 12 14 12 16.5 C12 18 11 19.5 9.5 20" stroke="#fda4af" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M22 13 C22 13 20 14 20 16.5 C20 18 21 19.5 22.5 20" stroke="#fda4af" strokeWidth="1.2" strokeLinecap="round" fill="none" opacity="0.5" />
                <path d="M11 21 Q16 26 21 21" stroke="#fda4af" strokeWidth="1.5" strokeLinecap="round" fill="none" />
              </svg>
            }
          />
        </div>

        {/* LANDING PAGES */}
        <SectionLabel>Landing pages</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <LandingRow
            href="https://conversoo-grow-page.lovable.app"
            emoji="🚀"
            name="Conversoo — Site Institucional"
            tag="CONVERSOO"
          />
          <LandingRow
            href="https://energizante.aromasamore.com.br"
            emoji="⚡"
            name="Amoré — Linha Energizante"
            tag="AMORÉ"
          />
          <LandingRow
            href="https://equilibrio.aromasamore.com.br"
            emoji="🍃"
            name="Amoré — Linha Equilíbrio"
            tag="AMORÉ"
          />
        </div>

        {/* WHATSAPP */}
        <SectionLabel>Automação WhatsApp</SectionLabel>
        <div
          className="fade-up"
          style={{
            position: "relative",
            overflow: "hidden",
            borderRadius: 18,
            padding: "1.5rem",
            border: "1px solid rgba(109,40,217,0.25)",
            background:
              "linear-gradient(135deg,rgba(109,40,217,0.12),rgba(236,72,153,0.07))",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -40,
              left: -40,
              width: 160,
              height: 160,
              background:
                "radial-gradient(circle, rgba(109,40,217,0.15), transparent 70%)",
              pointerEvents: "none",
            }}
          />
          <h3
            style={{
              margin: 0,
              fontFamily: FONT_BODY,
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#f0e8ff",
            }}
          >
            Agente IA no WhatsApp 24h
          </h3>
          <p
            style={{
              fontFamily: FONT_BODY,
              fontWeight: 400,
              fontSize: "0.83rem",
              color: "#9985c4",
              lineHeight: 1.55,
              margin: "0.6rem 0 1.1rem",
            }}
          >
            Atendimento humanizado integrado ao WhatsApp do seu negócio.
            Responde leads, agenda, confirma e reativa clientes — sem você
            precisar estar online.
          </p>
          <a
            href="https://wa.me/5551992604341"
            target="_blank"
            rel="noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              width: "100%",
              padding: "0.85rem 1rem",
              borderRadius: 11,
              background: "linear-gradient(135deg,#6D28D9,#EC4899)",
              color: "#fff",
              fontFamily: FONT_BODY,
              fontWeight: 600,
              fontSize: "0.9rem",
              textDecoration: "none",
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
              <path d="M20.52 3.48A11.85 11.85 0 0 0 12.05 0C5.5 0 .17 5.33.17 11.88c0 2.09.55 4.13 1.6 5.93L0 24l6.34-1.66a11.86 11.86 0 0 0 5.7 1.45h.01c6.55 0 11.88-5.33 11.88-11.88 0-3.17-1.23-6.15-3.41-8.43zM12.05 21.5a9.6 9.6 0 0 1-4.9-1.34l-.35-.21-3.76.99 1-3.66-.23-.38a9.6 9.6 0 1 1 8.24 4.6zm5.45-7.18c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.66.15-.2.3-.76.97-.93 1.17-.17.2-.34.22-.63.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.64-2.05-.17-.3-.02-.46.13-.6.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.91-2.18-.24-.57-.49-.49-.66-.5l-.56-.01a1.07 1.07 0 0 0-.78.37c-.27.3-1.02 1-1.02 2.44s1.05 2.84 1.2 3.04c.15.2 2.06 3.15 5 4.42.7.3 1.25.48 1.67.62.7.22 1.34.19 1.85.12.56-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.34z" />
            </svg>
            Quero para meu negócio
          </a>
        </div>

        {/* CONTATO */}
        <SectionLabel>Contato</SectionLabel>
        <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
          <LandingRow
            href="https://wa.me/5551992604341"
            emoji="📱"
            name="+55 51 99260-4341"
            tag="WHATSAPP"
          />
          <LandingRow
            href="https://instagram.com/conversoo.automacoes"
            emoji="📷"
            name="@conversoo.automacoes"
            tag="INSTAGRAM"
          />
        </div>

        <footer
          style={{
            marginTop: "2.5rem",
            textAlign: "center",
            fontFamily: FONT_MONO,
            fontSize: "0.6rem",
            color: "#2e2548",
            letterSpacing: 1.5,
          }}
        >
          © 2026 CONVERSOO — ALL SYSTEMS OPERATIONAL
        </footer>
      </main>
    </>
  );
}

/* ---------- Sub components ---------- */
function Pill({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      style={{
        borderRadius: 100,
        border: "1px solid rgba(109,40,217,0.3)",
        background: "rgba(109,40,217,0.07)",
        color: "#a78bfa",
        padding: "0.45rem 0.95rem",
        fontFamily: FONT_BODY,
        fontSize: "0.78rem",
        fontWeight: 500,
        textDecoration: "none",
        transition: "all 0.2s ease",
      }}
    >
      {children}
    </a>
  );
}

function GridCard({
  href,
  iconBg,
  svg,
  name,
  desc,
  badge,
}: {
  href: string;
  iconBg: string;
  svg: React.ReactNode;
  name: string;
  desc: string;
  badge: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="grid-card"
      style={{
        position: "relative",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        gap: 10,
        padding: "1.2rem 1.1rem",
        borderRadius: 18,
        border: "1px solid rgba(255,255,255,0.06)",
        background: "rgba(255,255,255,0.025)",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {svg}
      </div>
      <div
        style={{
          fontFamily: FONT_BODY,
          fontWeight: 600,
          fontSize: "0.88rem",
          color: "#e9e2ff",
        }}
      >
        {name}
      </div>
      <div
        style={{
          fontFamily: FONT_BODY,
          fontWeight: 400,
          fontSize: "0.72rem",
          color: "#7463a0",
          lineHeight: 1.4,
          flex: 1,
        }}
      >
        {desc}
      </div>
      <div>{badge}</div>
    </a>
  );
}

function AgentRow({
  href,
  svg,
  name,
  role,
  label,
  dot,
  avatarBg,
  avatarBorder,
}: {
  href: string;
  svg: React.ReactNode;
  name: string;
  role: string;
  label: string;
  dot: string;
  avatarBg: string;
  avatarBorder: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="agent-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0.85rem 0.95rem",
        borderRadius: 13,
        border: "1px solid rgba(255,255,255,0.05)",
        background: "rgba(255,255,255,0.02)",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.25s ease",
      }}
    >
      <div style={{ position: "relative", flexShrink: 0 }}>
        <div
          style={{
            width: 40,
            height: 40,
            borderRadius: 11,
            background: avatarBg,
            border: `1px solid ${avatarBorder}`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {svg}
        </div>
        <span
          style={{
            position: "absolute",
            bottom: -2,
            right: -2,
            width: 8,
            height: 8,
            borderRadius: "50%",
            background: dot,
            border: "2px solid #05050f",
            animation: "blink 1.6s infinite",
          }}
        />
      </div>
      <div style={{ flex: 1, minWidth: 0 }}>
        <div style={{ fontFamily: FONT_BODY, fontWeight: 600, fontSize: "0.88rem", color: "#e9e2ff" }}>
          {name}
        </div>
        <div style={{ fontFamily: FONT_BODY, fontSize: "0.72rem", color: "#7463a0", lineHeight: 1.4 }}>
          {role}
        </div>
      </div>
      <span style={{ fontFamily: FONT_MONO, fontSize: "0.6rem", color: "#4d3e70", letterSpacing: 1 }}>
        {label}
      </span>
    </a>
  );
}

function LandingRow({
  href,
  emoji,
  name,
  tag,
}: {
  href: string;
  emoji: string;
  name: string;
  tag: string;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="landing-row"
      style={{
        display: "flex",
        alignItems: "center",
        gap: 12,
        padding: "0.75rem 0.9rem",
        borderRadius: 11,
        border: "1px solid rgba(255,255,255,0.04)",
        background: "rgba(255,255,255,0.015)",
        textDecoration: "none",
        color: "inherit",
        transition: "all 0.25s ease",
      }}
    >
      <div
        style={{
          width: 34,
          height: 34,
          borderRadius: 9,
          background: "rgba(236,72,153,0.08)",
          border: "1px solid rgba(236,72,153,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 16,
        }}
      >
        {emoji}
      </div>
      <div
        style={{
          flex: 1,
          fontFamily: FONT_BODY,
          fontWeight: 600,
          fontSize: "0.83rem",
          color: "#c8bfe0",
        }}
      >
        {name}
      </div>
      <span
        style={{
          fontFamily: FONT_MONO,
          fontSize: "0.58rem",
          letterSpacing: 1.2,
          background: "rgba(236,72,153,0.08)",
          border: "1px solid rgba(236,72,153,0.18)",
          color: "#f9a8d4",
          padding: "3px 6px",
          borderRadius: 5,
        }}
      >
        {tag}
      </span>
    </a>
  );
}

/* ---------- CSS ---------- */
const css = `
html, body { background:#05050f; margin:0; padding:0; }
body { color:#e9e2ff; font-family:'Outfit', system-ui, sans-serif; }

@keyframes blink {
  0%, 100% { opacity: 1; }
  50% { opacity: 0.35; }
}
@keyframes glowPulse {
  0%, 100% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.08); opacity: 1; }
}
@keyframes spin {
  to { transform: rotate(360deg); }
}
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(18px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-up { animation: fadeUp 0.6s ease both; }
.fade-up:nth-of-type(2) { animation-delay: 0.08s; }
.fade-up:nth-of-type(3) { animation-delay: 0.16s; }
.fade-up:nth-of-type(4) { animation-delay: 0.24s; }
.fade-up:nth-of-type(5) { animation-delay: 0.32s; }
.fade-up:nth-of-type(6) { animation-delay: 0.40s; }
.fade-up:nth-of-type(7) { animation-delay: 0.48s; }

.conic-border {
  background: conic-gradient(from 180deg, #6D28D9, #EC4899, #818cf8, #6D28D9);
  animation: spin 5s linear infinite;
}

.wide-card:hover {
  border-color: rgba(16,185,129,0.4) !important;
  transform: translateX(4px);
}
.grid-card:hover {
  border-color: rgba(109,40,217,0.45) !important;
  transform: translateY(-3px);
  background: linear-gradient(135deg,rgba(109,40,217,0.1),rgba(255,255,255,0.025)) !important;
}
.agent-row:hover {
  border-color: rgba(109,40,217,0.3) !important;
  background: rgba(109,40,217,0.06) !important;
  transform: translateX(4px);
}
.landing-row:hover {
  border-color: rgba(236,72,153,0.25) !important;
  background: rgba(236,72,153,0.04) !important;
  transform: translateX(4px);
}
`;