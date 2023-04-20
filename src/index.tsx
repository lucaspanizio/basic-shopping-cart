import React from 'react';
import ReactDOM from 'react-dom/client';
import { ProductsProvider } from "./hooks/useProducts";
import { Store } from './components/store';
import './global.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  // <React.StrictMode>
    <ProductsProvider >
      <Store/>
    </ProductsProvider>
  // </React.StrictMode>
);
