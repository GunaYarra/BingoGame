# 🎉 Soc Ops — Social Bingo

> **Break the ice. Make connections. Get BINGO!**

A fun, interactive Social Bingo game built for in-person mixers and team events. Players mingle, find colleagues who match quirky prompts, mark off their board, and race to get **5 in a row**!

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Node.js 22+](https://img.shields.io/badge/node-%3E%3D22-brightgreen)](https://nodejs.org/)
[![React 19](https://img.shields.io/badge/react-19-61dafb?logo=react)](https://react.dev/)
[![Deploy to GitHub Pages](https://img.shields.io/badge/deploy-GitHub%20Pages-181717?logo=github)](../../actions)

---

## ✨ Features

- 🃏 **Randomized 5×5 board** — every player gets a unique card
- 🆓 **Free space** — the centre square is always marked to kick things off
- 📱 **Mobile-first design** — looks great on any phone or tablet
- 🏆 **Instant BINGO detection** — rows, columns, and diagonals all count
- 💾 **Auto-save** — game state is preserved if you close the tab
- 🎨 **Fully customizable** — swap in your own prompts in minutes

---

## 🕹️ How to Play

1. **Open the app** on your phone or share the link with your team.
2. Press **Start Game** to receive your randomized bingo card.
3. **Mingle!** Find people who match a square's description.
4. **Tap the square** to mark it once you've found a match.
5. First to mark **5 in a row** (horizontally, vertically, or diagonally) wins! 🎊

---

## 🚀 Quick Start

### Prerequisites

- [Node.js 22](https://nodejs.org/) or higher

### Run locally

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

### Build for production

```bash
npm run build
```

The app deploys automatically to **GitHub Pages** on every push to `main`.

---

## 🎨 Customize Your Game

Want to tailor the prompts to your team or event?

👉 **[Follow the Lab Guide](.lab/GUIDE.md)** for step-by-step instructions on customizing questions, colours, and more.

Key files to know:

| File | What it controls |
|------|-----------------|
| `src/data/questions.ts` | The list of bingo prompts |
| `src/index.css` | Theme colours (`--color-accent`, etc.) |
| `src/components/StartScreen.tsx` | Welcome screen copy |

---

## 🛠️ Tech Stack

| Layer | Technology |
|-------|-----------|
| UI Framework | [React 19](https://react.dev/) |
| Styling | [Tailwind CSS v4](https://tailwindcss.com/) |
| Build Tool | [Vite](https://vitejs.dev/) |
| Language | [TypeScript](https://www.typescriptlang.org/) |
| Tests | [Vitest](https://vitest.dev/) + [Testing Library](https://testing-library.com/) |

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) before submitting a pull request.

---

## 📄 License

Released under the [MIT License](LICENSE).
