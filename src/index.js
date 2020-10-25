import React from 'react';
import ReactDOM from 'react-dom';
import App from 'App';
import Loading from 'Loading'
import {GlobalProvider} from 'GlobalContext';

import 'resources/css/basic_set.css';
import 'resources/css/comm.css';
import 'overlayscrollbars/css/OverlayScrollbars.css';

ReactDOM.render(
  <GlobalProvider>
    <App />
    <Loading/>
  </GlobalProvider>,
  document.getElementById('root')
);
