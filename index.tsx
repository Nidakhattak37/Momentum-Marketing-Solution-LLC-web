
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';

// Shim process for environments where it is not globally defined
if (typeof window !== 'undefined' && !(window as any).process) {
  (window as any).process = { env: { API_KEY: '' } };
}

const init = () => {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error("Critical: Could not find root element to mount the application.");
    return;
  }
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

// Ensure DOM is ready before mounting
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}
