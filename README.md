# 🎉 Soc Ops — Social Bingo

> Break the ice, spark conversations, and make new connections — one square at a time.

**Soc Ops** is a lightweight, mobile-friendly Social Bingo game designed for in-person mixers and team events. Each player gets a randomised 5×5 bingo card full of fun prompts. Mingle, find people who match, and race to get **5 in a row**!

[![Live Demo](https://img.shields.io/badge/▶%20Play%20Now-Live%20Demo-6366f1?style=for-the-badge)](https://gunayarra.github.io/BingoGame/)
[![License: MIT](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
[![Built with React](https://img.shields.io/badge/React-19-61dafb?style=for-the-badge&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4-38bdf8?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)

---

## 🕹️ How to Play

| Step | Action |
|------|--------|
| 1️⃣ | Open the app on your phone and hit **Start Game** |
| 2️⃣ | Walk around the room and chat with people |
| 3️⃣ | Found someone who *bikes to work* or *speaks 3 languages*? Tap that square! |
| 4️⃣ | Get **5 squares in a row** — horizontally, vertically, or diagonally — to win 🏆 |

The center square is a **FREE SPACE** — it's already marked for you!

---

## ✨ Features

- 🎲 **Randomized boards** — every player gets a unique card, so no two games are alike
- 📱 **Mobile-first design** — built for phones; works great on any screen size
- 💾 **Auto-save** — your progress is saved locally, so you can close the tab and come back
- ⚡ **Instant setup** — no login, no account, just open and play
- 🛠️ **Fully customizable** — swap in your own questions to match any event theme

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

The app deploys automatically to **GitHub Pages** whenever you push to `main`.

---

## 🎨 Customize the Game

Want to tailor the prompts for your team, conference, or event? Edit the questions in:

```
src/data/questions.ts
```

Each string in the array becomes a square on the bingo board. The board uses 24 of your questions plus the FREE SPACE in the center.

```ts
export const questions: string[] = [
  "bikes to work",
  "has lived in another country",
  "plays an instrument",
  // ✏️ Add your own prompts here!
];
```

> 💡 **Tip:** Aim for prompts that are fun, inclusive, and easy to verify in a quick conversation.

---

## 🧑‍💻 Development

```bash
npm run lint    # Check code style
npm run build   # Production build
npm run test    # Run tests
```

For a full walkthrough of the codebase and step-by-step customization, see the **[Lab Guide](.lab/GUIDE.md)**.

---

## 🤝 Contributing

Contributions are welcome! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and follow the [Code of Conduct](CODE_OF_CONDUCT.md).

---

## 📄 License

Released under the [MIT License](LICENSE).
