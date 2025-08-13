## Installation
```bash
git clone ......
pnpm install
```
create branch named propstgonz/dev


## Prettier
```bash
pnpm exec prettier --check . --config .prettierrc
pnpm exec prettier --write . --config .prettierrc
```

## Evitar error CRLF>LF

Ejecutar antes de cada commit
```bash
git add --renormalize .
```


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `pnpm install`             | Installs dependencies                            |
| `pnpm dev`             | Starts local dev server at `localhost:4321`      |
