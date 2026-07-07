import { PersistGate } from 'redux-persist/integration/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Provider as ReduxProvider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import React from 'react';

import { store, persistor } from '@/store';

import { App } from './app';

import './global.css';

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReduxProvider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </ReduxProvider>
    </QueryClientProvider>
  </React.StrictMode>,
);
