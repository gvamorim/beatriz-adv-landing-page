# BVC Advocacia Consultiva — Landing Page

Site institucional de Beatriz Vieira Costa (OAB/MG 241.090), fundadora da BVC
Advocacia Consultiva, com foco em assessoria preventiva para RH, NR-1,
compliance trabalhista, treinamentos e palestras corporativas.

Landing page estática, totalmente em **PT-BR**, construída com Astro + Tailwind
e publicada automaticamente no GitHub Pages a cada push na branch `main`.

## Tecnologias

- **[Astro](https://astro.build)** — gerador de sites estáticos (latest)
- **[Tailwind CSS](https://tailwindcss.com)** — estilização utility-first (latest)
- **CSS + Intersection Observer** — animações de scroll sem bibliotecas extras

## Estrutura

```text
src/
  components/          Nav, Hero, Founder, Intro, Services, Approach,
                       Banner, NR1, Palestras, ServicesDetail, MainCTA,
                       Footer, Icon, Reveal
  layouts/             BaseLayout.astro
  pages/               index.astro (single page com âncoras)
  scripts/             reveal.ts (IntersectionObserver + menu mobile)
  styles/              global.css (tokens, botões, cards, animações)
  lib/                 links.ts (WhatsApp, LinkedIn, Instagram, navegação)
public/                highlight.png, lecture.png, course.png, favicon.svg
.github/workflows/     deploy.yml (publicação automática no GitHub Pages)
```

Âncoras do menu rápido: `#inicio`, `#fundadora`, `#servicos`, `#palestras`,
`#nr1`, `#contato`.

## Pré-requisitos

- Node.js (versão mais recente recomendada — testado em Node 20)
- npm (ou yarn/pnpm)

## Rodando localmente

Instale as dependências e inicie o servidor de desenvolvimento:

```bash
npm install
npm run dev
```

O site abre em **[http://localhost:4321/beatrizadv/](http://localhost:4321/beatrizadv/)**
(ou na porta que o Astro indicar no terminal). Alterações em arquivos são
recarregadas automaticamente.

## Build de produção

```bash
npm run build     # gera dist/
npm run preview   # serve dist/ localmente para validação
```

## Deploy (GitHub Pages)

O deploy é automatizado: a cada push na branch `main`, o workflow
**Deploy to GitHub Pages** (`.github/workflows/deploy.yml`) executa nos
servidores do GitHub — instala dependências, roda `npm run build` e publica o
conteúdo de `dist/` no GitHub Pages.

Para habilitar:

1. No repositório, acesse **Settings → Pages**.
2. Em **Build and deployment**, selecione **Source: GitHub Actions**.
3. Confira `astro.config.mjs` — os campos `site` e `base` devem apontar para o
   usuário/repositório corretos.

## Seções

### Início (`#inicio`)
Hero com proposta de valor, citação assinada por Beatriz e indicadores
(Prev., 100%, PME, RH+).

### Sobre a Fundadora (`#fundadora`)
Foto institucional (`public/highlight.png`), OAB MG 241.090, biografia e áreas
de expertise: Direito Trabalhista Preventivo, Direito Penal e Perícia
Grafotécnica.

### Serviços (`#servicos`)
Grade com 6 frentes: Assessoria Consultiva Contínua, Treinamentos, NR-1,
Compliance, Palestras e Organização de Processos Internos. Cada card leva ao
bloco de detalhe correspondente.

### Palestras (`#palestras`)
Galeria com imagens `public/lecture.png` e `public/course.png`, dois cards de
preço (Palestra R$ 450 · Workshop/Curso a combinar), motivos para contratar e
grade de temas com opção de tema customizado.

### NR-1 (`#nr1`)
Adequação à NR-1 (riscos psicossociais, PGRS), checklist de implantação e
apoio da BVC.

### Contato (`#contato`)
CTA final com diagnóstico gratuito + rodapé com redes sociais:

- WhatsApp: +55 (31) 98480-5500
- LinkedIn: <https://www.linkedin.com/in/beatrizvieiracosta/>
- Instagram: <https://www.instagram.com/beatrizvc.adv>

## Diretrizes de design

- Totalmente em PT-BR.
- Feel de escritório boutique internacional.
- Paleta quente (bege, marrom, caramelo).
- Cantos arredondados em todos os cards e botões (sem bordas retas).
- Botões elegantes com espaçamento de letras.
- Animações de fade/scroll via Intersection Observer.
- Sem emojis — toda iconografia é SVG linear.
