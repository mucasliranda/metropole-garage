import React from 'react';
import ReactDOM from 'react-dom/client';
import { VisibilityProvider } from './providers/VisibilityProvider';
import './index.css';
import { Router } from './router';
import { RouterProvider } from './providers/RouterProvider';
import Layout from './components/Layout';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VisibilityProvider>
      <RouterProvider>
        <Layout>
          <Router />
        </Layout>
      </RouterProvider>
    </VisibilityProvider>
  </React.StrictMode>,
);
