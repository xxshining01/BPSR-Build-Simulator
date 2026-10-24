import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import { initLanguageSync } from './platform/languageSync';
import { initStoreSyncBroadcaster } from './platform/storeSync';

initLanguageSync();
initStoreSyncBroadcaster();

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
