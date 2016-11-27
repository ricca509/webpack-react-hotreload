import React from 'react';
import { render } from 'react-dom';

render(
  <div>React is working!!</div>,
  document.querySelector('#app')
);

if(module.hot) {
  // accept itself
  module.hot.accept();
}
