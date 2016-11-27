import React from 'react';
import { render } from 'react-dom';

render(
  <div>Webpack 1!</div>,
  document.querySelector('#app')
);

if(module.hot) {
  // accept itself
  module.hot.accept();
}
