# Routes

Framework routing: none. Vite mounts one React application with a single page.

| URL | Entry | Page component | Layout |
| --- | --- | --- | --- |
| `/` | `src/main.jsx` | `src/App.jsx` | Header + one-page sections + footer in `App.jsx` |

## Entry source

```jsx
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
```

## Homepage structure

The `/` route renders a sticky header, hero, services, process, portfolio, pricing, FAQ, final CTA, and footer. Internal navigation uses anchor IDs: `#servicos`, `#processo`, `#portfolio`, `#pacotes`, and `#faq`.
