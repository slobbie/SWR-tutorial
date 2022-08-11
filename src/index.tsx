import React from 'react';
import ReactDOM from 'react-dom/client';
import { SWRConfig } from 'swr';

import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  // <SWRConfig>
  <App />
  // </SWRConfig>
);
