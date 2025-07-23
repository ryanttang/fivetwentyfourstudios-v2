import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/_app';
import Index from './pages/index';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App Component={Index} pageProps={{}} />
  </React.StrictMode>
); 