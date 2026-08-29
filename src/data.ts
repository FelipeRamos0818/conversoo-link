// Fonte de dados do link-in-bio (versão nova, rota /novo).
// A página atual (src/routes/index.tsx) NÃO usa este arquivo.
//
// hrefs reaproveitados dos links já hardcoded em src/routes/index.tsx.
// Imagens de categoria em public/cat/ (arquivos .webp).
// Previews dos itens em public/prev/.

export type Item = {
  nome: string;
  subtitulo: string;
  href: string;
  prev: string;
  badge: string;
};

export type Categoria = {
  id: string;
  titulo: string;
  subtitulo: string;
  imagem: string;
  itens: Item[];
};

export const categorias: Categoria[] = [
  {
    id: "landing-pages",
    titulo: "Landing Pages",
    subtitulo: "Páginas que apresentam o negócio e levam pro WhatsApp",
    imagem: "/cat/landing-pages.webp",
    itens: [
      {
        nome: "CB Advocacia",
        subtitulo: "Landing page e copy para escritório de advocacia bancária",
        href: "https://cb-advocacia.vercel.app/",
        prev: "/prev/cbadv.webp",
        badge: "CASE",
      },
      {
        nome: "Rafael Mendes",
        subtitulo: "Clínica de quiropraxia e terapias manuais",
        href: "https://lp-rafaelm.vercel.app/",
        prev: "/prev/rafael.webp",
        badge: "CASE",
      },
      {
        nome: "Curso de Penteados",
        subtitulo: "Página de venda para curso de penteados",
        href: "https://lp-michele.netlify.app/",
        prev: "/prev/penteados.webp",
        badge: "CASE",
      },
      {
        nome: "Marcato Studio",
        subtitulo: "Estúdio de tatuagem com presença profissional online",
        href: "https://marcato-chi.vercel.app/",
        prev: "/prev/marcato.webp",
        badge: "CASE",
      },
      {
        nome: "Dra. Adrine Betat",
        subtitulo: "Médica — atendimento individualizado e prevenção",
        href: "https://www.draadrinebetat.com.br/",
        prev: "/prev/adrine.webp",
        badge: "CASE",
      },
    ],
  },
  {
    id: "plataformas",
    titulo: "Plataformas",
    subtitulo: "Sistemas e produtos sob medida",
    imagem: "/cat/plataformas.webp",
    itens: [
      {
        nome: "Conversoo — Site Institucional",
        subtitulo: "A empresa por trás de tudo isso",
        href: "https://lp.conversoo.cloud/",
        prev: "/prev/conversoo.webp",
        badge: "CONVERSOO",
      },
      {
        nome: "A Fonte",
        subtitulo: "Estudo bíblico guiado via WhatsApp e web",
        href: "https://afonte.conversoo.cloud",
        prev: "/prev/afonte.webp",
        badge: "BETA",
      },
      {
        nome: "Glowly",
        subtitulo: "Plataforma de agendamento para beleza",
        href: "https://glam-glow-gate.lovable.app",
        prev: "/prev/glowly.webp",
        badge: "",
      },
      {
        nome: "Quer Apostar?",
        subtitulo: "Apostas sociais entre amigos, sem casa de aposta",
        href: "https://querapostar.conversoo.cloud",
        prev: "/prev/querapostar.webp",
        badge: "",
      },
      {
        nome: "Meu Organizador Financeiro",
        subtitulo: "App de finanças sob medida para casa e negócio",
        href: "https://lp-organizador-financeiro-production.up.railway.app",
        prev: "/prev/organizador.webp",
        badge: "",
      },
      {
        nome: "Quinta Loka",
        subtitulo: "App para organizar jantas entre amigos",
        href: "https://quintaloka.conversoo.cloud",
        prev: "/prev/quintaloka.webp",
        badge: "",
      },
      {
        nome: "Amoré Catálogo",
        subtitulo: "Catálogo digital com pedido direto no WhatsApp",
        href: "https://catalogo.aromasamore.com.br",
        prev: "/prev/amorecatalogo.webp",
        badge: "",
      },
    ],
  },
  {
    id: "agentes",
    titulo: "Agentes de IA",
    subtitulo: "Assistentes que atendem sozinhos no WhatsApp",
    imagem: "/cat/agentes.webp",
    itens: [
      {
        nome: "Pã",
        subtitulo: "Assistente WhatsApp da Amoré Aromas",
        href: "https://catalogo.aromasamore.com.br",
        prev: "/prev/amorehub.webp",
        badge: "",
      },
      {
        nome: "Luna",
        subtitulo: "Assistente de agendamento da Glowly",
        href: "https://glam-glow-gate.lovable.app",
        prev: "/prev/glowly.webp",
        badge: "",
      },
    ],
  },
];
