import React from 'react';
import ReactDOM from 'react-dom/client';
import MobXApp from './mobx/App';
import ReduxApp from './redux/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ReduxApp />
  </React.StrictMode>
);
