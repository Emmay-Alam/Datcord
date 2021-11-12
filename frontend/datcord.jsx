import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const preloadedState = window.currentUser ? { session: { id: window.currentUser.id } } : {}
  const store = configureStore(preloadedState);

  ReactDOM.render(
    <Root store={store} />,
    root
  );
});
