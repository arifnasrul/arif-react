import React from 'react';
import ReactDOM from 'react-dom';
import './Assets/index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { store } from './Redux/store'
import { Provider } from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();