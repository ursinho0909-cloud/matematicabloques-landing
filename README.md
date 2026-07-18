# Matemáticas en el Minecraft — Landing

Landing page em espanhol para produto de matemática infantil estilo Minecraft.
Estrutura clonada de `coreano-descomplicado-landing`.

## Stack

- HTML/CSS/JS puro (sem build)
- Fontes: **Press Start 2P** (headings pixelados estilo Minecraft) + **Inter** (corpo)
- Paleta: grama (#5D9C3F), terra (#866043), ouro (#f4c034), redstone (#B02020), diamante (#5DECF5)

## Estrutura

```
matematicas-minecraft-landing/
├── index.html       Landing principal em ES
├── styles.css       Tema Minecraft (blocos, pixel, bordas pretas)
├── app.js           Countdown + exit-intent modal + smooth scroll
├── politicas.html   Políticas/Termos/Reembolso ES
└── assets/          15 placeholders SVG pixel art
    ├── hero.svg
    ├── mm1-7.svg    (7 amostras de atividades por grau)
    ├── extra-1.svg  (mockup 100 Problemas)
    ├── extra-2.svg  (mockup Tabla Multiplicar)
    ├── bonus-1.svg  Mapa de Progreso
    ├── bonus-2.svg  Tarjetas de Recompensa
    ├── bonus-3.svg  Guía para Padres
    ├── basic-cover.svg
    └── premium-cover.svg
```

## Antes de subir

1. **Trocar imagens placeholder** por PNGs/JPGs reais dos mockups. Nome dos arquivos deve bater com os refs no `index.html`.
   - Se trocar por PNG/JPG, ajustar extensões no `index.html` (ou renomear os arquivos novos para `.svg`).
2. **Links do checkout** — substituir 3 URLs no `index.html`:
   - `CHECKOUT_ID_BASICO_AQUI` → link Cakto plano básico
   - `CHECKOUT_ID_COMBO_AQUI` → link Cakto combo completo
   - `CHECKOUT_ID_OFERTA_SAIDA_AQUI` → link Cakto oferta exit-intent
3. **Contato / e-mail** — trocar `contato.matematicasblock@gmail.com` pelo real (em `index.html` e `politicas.html`).
4. **Pixel de rastreamento** — se for usar Lowtrack, Meta Pixel etc, colar antes do `</head>` no `index.html`.

## Preços atuais (edite se mudar)

- Plano Básico: **US$9,90** (antes US$19,90)
- Combo Completo: **US$14,90** (antes US$29,90)
- Oferta exit-intent: **US$7,90** (50% off do combo)

## Deploy sugerido

Cloudflare Pages via `wrangler` (mesmo esquema do `caixamagica` e `treino-express-vendas`).

```bash
wrangler pages deploy . --project-name matematicas-minecraft
```
