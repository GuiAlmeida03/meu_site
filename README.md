# 🚀 Guilherme Henrique — Portfólio

Portfólio pessoal construído com React + Vite + Tailwind CSS, pronto para GitHub Pages.

## 📁 Estrutura de Pastas

```
portfolio/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx       # Navbar responsiva com scroll ativo
│   │   ├── Hero.jsx         # Seção inicial com canvas de partículas
│   │   ├── About.jsx        # Seção Sobre Mim
│   │   ├── Projects.jsx     # Cards de projetos
│   │   ├── Skills.jsx       # Competências com barras de progresso
│   │   └── Footer.jsx       # Rodapé + contato
│   ├── hooks/
│   │   └── useScrollReveal.js  # Hook de animação scroll
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js           # ⚠️ Altere o `base` para seu repositório!
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

## ⚙️ Configuração Inicial

### 1. Instalar dependências
```bash
npm install
```

### 2. Rodar em modo dev
```bash
npm run dev
```

---

## 🌐 Deploy no GitHub Pages

### Passo 1 — Configure o `vite.config.js`

Abra `vite.config.js` e altere `base` para o **nome exato do seu repositório**:

```js
// Exemplo: repositório "guilherme-portfolio"
export default defineConfig({
  plugins: [react()],
  base: '/guilherme-portfolio/',   // ← Altere aqui
})
```

### Passo 2 — Configure o `package.json`

Adicione o campo `homepage` ao `package.json`:

```json
"homepage": "https://SEU_USUARIO.github.io/NOME_DO_REPO/"
```

### Passo 3 — Faça o deploy

```bash
# Instala gh-pages se ainda não tiver
npm install --save-dev gh-pages

# Roda o build e publica na branch gh-pages
npm run deploy
```

### Passo 4 — Ative o GitHub Pages

1. Vá em **Settings** do repositório
2. Seção **Pages** → Source: **Deploy from a branch**
3. Branch: **gh-pages** → Pasta: **/ (root)**
4. Salve — em ~2 min seu site estará em: `https://SEU_USUARIO.github.io/NOME_DO_REPO/`

---

## ✏️ Personalizações Rápidas

| O que mudar | Arquivo |
|---|---|
| Links do GitHub e LinkedIn | `src/components/Footer.jsx` e `src/components/Hero.jsx` |
| Nome do repositório no deploy | `vite.config.js` → `base` |
| Projetos | `src/components/Projects.jsx` → array `projects` |
| Skills | `src/components/Skills.jsx` → array `skillGroups` |
| Cores e fontes | `tailwind.config.js` |

## 🛠️ Stack

- **React 18** + **Vite**
- **Tailwind CSS v3** (dark mode por padrão)
- **Lucide React** para ícones
- **Google Fonts**: Syne, DM Sans, JetBrains Mono
- **gh-pages** para deploy automático
