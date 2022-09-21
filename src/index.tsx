import React from 'react';
import ReactDOM from 'react-dom/client';

import { makeServer } from '@/services/miragejs';
import { App } from './App';

makeServer();

ReactDOM.createRoot(document.getElementById(`root`) as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
