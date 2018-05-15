import React from 'react';

import Creator from './containers/creator';
import Terminal from './containers/terminal';

import '../styles/app.css';

const App = () => {
  return (
    <div id="container">
      <Creator/>
      <Terminal/>
    </div>
  );
}

export default App;