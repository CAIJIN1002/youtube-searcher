import GlobalStyles from 'components/GlobalStyles';
import Layout from 'layout';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import createStore from 'redux/configureStore';

import App from './App';

const store = createStore();
store.subscribe(App);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyles />
      <Layout>
        <App />
      </Layout>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
