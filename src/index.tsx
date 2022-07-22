import React from 'react';
import { IntlProvider } from 'react-intl';
import { ToastContainer } from 'react-toastify';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import './index.css';
import Routing from './pages/routing/Routing';
import reportWebVitals from './reportWebVitals';
import { store } from './redux/store';
import 'react-toastify/dist/ReactToastify.css';

ReactDOM.render(
  <React.StrictMode>
    <IntlProvider locale="en">
      <Provider store={store}>
        <ToastContainer />
        <Routing />
      </Provider>
    </IntlProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
