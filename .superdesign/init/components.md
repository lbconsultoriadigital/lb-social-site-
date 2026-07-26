# Shared UI Components

The project has no dedicated component library. Reusable UI is currently declared inside `src/App.jsx`.

## InstagramMark

- Source: `src/App.jsx`
- Description: Inline Instagram outline icon used in the footer.
- Props: `size` (number, default `18`)

```jsx
function InstagramMark({ size = 18 }) {
  return (
    <svg
      aria-hidden="true"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="18" height="18" x="3" y="3" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}
```

## Brand

- Source: `src/App.jsx`
- Description: Linked LAB8 logo image with light/dark variants.
- Props: `light` (boolean, default `false`)

```jsx
function Brand({ light = false }) {
  return (
    <a className="brand" href="#top" aria-label="LAB8 Social Media Design — início">
      <img src={light ? '/lab8-logo-light.svg' : '/lab8-logo.svg'} alt="LAB8 Social Media Design" />
    </a>
  );
}
```

## DigitalVisual

- Source: `src/App.jsx`
- Description: CSS-built hero collage showing an analytics dashboard, Instagram phone grid, and brand system card.
- Props: none

```jsx
function DigitalVisual() {
  return <div className="visual-shell" aria-label="Exemplo visual de uma presença digital estruturada">
    <div className="screen screen-main">
      <div className="screen-bar"><img src="/lab8-icon.svg" alt=""/><span>LAB8</span><i/><i/><i/></div>
      <div className="dashboard-title">Conteúdo e performance</div>
      <div className="metrics"><b>85,2K<small>alcance</small></b><b>7,8%<small>engajamento</small></b><b>34K<small>cliques</small></b></div>
      <div className="chart"><i/><i/><i/><i/><i/><i/><i/></div>
    </div>
    <div className="phone"><div className="phone-head">@lab8.md</div><div className="grid">{Array.from({length:9},(_,i)=><i key={i}/>)}</div></div>
    <div className="screen-card"><span>LAB8 BRAND SYSTEM</span><strong>Aa</strong><div><i/><i/><i/></div></div>
  </div>;
}
```

## Button pattern

- Source: `src/App.jsx` + `src/styles.css`
- Description: Anchor-based primary CTA with optional Lucide `ArrowRight`.
- Key props: URL, label, target.

```jsx
<a
  className="button"
  href={wa('Olá! Quero transformar meu Instagram com a LAB8.')}
  target="_blank"
  rel="noreferrer"
>
  Orçamento <ArrowRight size={16}/>
</a>
```

```css
.button{display:inline-flex;align-items:center;justify-content:center;gap:14px;background:var(--ink);color:#fff;min-height:52px;padding:0 26px;text-transform:uppercase;font-size:11px;font-weight:600;letter-spacing:.08em;border:0;transition:transform .2s ease,background .2s ease}
.button:hover{background:var(--blue);transform:translateY(-2px)}
.button.light{background:#fff;color:#111}
.button.light:hover{background:#111;color:#fff}
```
