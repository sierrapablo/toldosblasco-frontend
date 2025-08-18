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

| Command        | Action                                      |
| :------------- | :------------------------------------------ |
| `pnpm install` | Installs dependencies                       |
| `pnpm dev`     | Starts local dev server at `localhost:4321` |

## 🛠️ Próximos pasos

### Navbar

- [x] El icono de la empresa (a la izquierda) debe llevar a "/"
- [x] La posición del navbar tiene que ser siempre visible en el top de la página (sticky en tailwindcss).

### Productos

- [ ] El tamaño de la info card de los productos debe ser del mismo tamaño que el Hero. Además, debe de superponerse al componente Hero, no sustituirlo.

### Galería

- [ ] Hacer el modal más grande para que las imágenes se vean bien.
- [x] Oscurecer un poco más el fondo del modal.
- [x] Añadir elemento "X" en una esquina del modal, para cerrar el modal.

### Contacto

- [x] Añadir botón de "Contactar por Whatsapp".
  - Debe ser un botón verde con el icono de whatsapp.

### General

- [ ] Implementar transición generalizada desde enlaces internos con ClientRouter.
- [ ] Preparar Astro server islands para minimizar SSR.
