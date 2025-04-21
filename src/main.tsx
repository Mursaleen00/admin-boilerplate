// dom
import { createRoot } from 'react-dom/client';

// Components
import App from './App.tsx';

// CSS
import './index.css';

// Providers
import Providers from './providers/index.tsx';

createRoot(document.getElementById('root')!).render(
  <Providers>
    <App />
  </Providers>,
);
