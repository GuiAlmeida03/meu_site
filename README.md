# Guilherme Henrique — Portfólio profissional

Este repositório é o **código-fonte do meu portfólio**: uma vitrine objetiva da minha trajetória, projetos e competências para **empresas, times de tecnologia e recrutamento** que queiram avaliar meu perfil antes ou depois de um contato.

**Site publicado:** [https://GuiAlmeida03.github.io/meu_site/](https://GuiAlmeida03.github.io/meu_site/)

---

## O que você encontra aqui

O portfólio apresenta, de forma clara e navegável:

- **Identidade e proposta de valor** — quem sou e em que contextos atuo (desenvolvimento com foco em **inteligência artificial** e **ciência de dados**).
- **Projetos** — amostras de trabalho relevantes para conversas técnicas e alinhamento de expectativas.
- **Competências** — habilidades e ferramentas que utilizo no dia a dia.
- **Contato** — canais para retorno rápido (incluindo links no próprio site).

O objetivo é **reduzir fricção** para quem avalia candidatos: tudo está em um só lugar, responsivo e pensado para leitura rápida.

---

## O que este projeto demonstra (para avaliação técnica)

| Aspecto | Detalhe |
|--------|---------|
| **Frontend moderno** | Interface em **React 18** com build em **Vite**, priorizando performance e experiência de desenvolvimento. |
| **UI consistente** | Estilização com **Tailwind CSS** (incluindo tema escuro), tipografia via **Google Fonts** e ícones com **Lucide React**. |
| **Organização** | Componentes por seção (`Navbar`, `Hero`, `About`, `Projects`, `Skills`, `Footer`) e hook reutilizável para animações de revelação no scroll. |
| **Entrega contínua** | Deploy automatizado para **GitHub Pages** (`gh-pages`), com caminho base configurado para hospedagem em subpath do domínio `github.io`. |

Se você é **tech lead** ou **desenvolvedor** revisando o repositório: o código pretende ser **legível e fácil de estender** — bom ponto de partida para discutir decisões de arquitetura e produto em uma entrevista.

---

## Stack

- React 18, Vite 5  
- Tailwind CSS 3, PostCSS, Autoprefixer  
- Lucide React  

---

## Como executar localmente

Útil para **avaliadores técnicos** que preferem rodar o projeto na máquina.

```bash
npm install
npm run dev
```

Build de produção e pré-visualização:

```bash
npm run build
npm run preview
```

---

## Estrutura principal do código

```
src/
├── components/     # Seções do portfólio (layout, conteúdo, navegação)
├── hooks/          # Lógica reutilizável (ex.: animação ao scroll)
├── App.jsx
├── main.jsx
└── index.css
```

Configuração de build e estilo: `vite.config.js`, `tailwind.config.js`, `postcss.config.js`.

---

## Próximo passo para empresas e recrutadores

Se o portfólio fizer sentido para a vaga ou o projeto da sua empresa, **entre em contato** pelos canais indicados no site ou pelo meu perfil no GitHub: [@GuiAlmeida03](https://github.com/GuiAlmeida03).

Estou aberto a conversas sobre **oportunidades de trabalho**, **freelance** ou **parcerias** alinhadas a dados, IA e desenvolvimento de software.

---

*README voltado a tomadores de decisão e equipes de contratação. O conteúdo editorial do portfólio (textos, links e projetos) é atualizado diretamente no código-fonte das seções em `src/components/`.*
