import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from './hooks/useProducts';
import { Main } from './pages/Main';
import './global.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProductsProvider>
      <Main />
    </ProductsProvider>
  </React.StrictMode>,
);
