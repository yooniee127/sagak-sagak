import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter} from 'react-router-dom';
import { CookiesProvider } from 'react-cookie'; 
import App from './App';
import store from 'store/store';
import {Provider} from 'react-redux';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <Provider store={store}>
      <CookiesProvider>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </CookiesProvider>
    </Provider>
);

