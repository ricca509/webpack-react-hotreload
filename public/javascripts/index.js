import React from 'react';
import { render } from 'react-dom';

render(
  <div>Webpack 2!!</div>,
  document.querySelector('#app')
);

if(module.hot) {
  // accept itself
  module.hot.accept();
}
