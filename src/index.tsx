import React from 'react';
import ReactDOM from 'react-dom';

import dummyFunction from './helpers/dummyFunction';
import './index.scss';
import './index.css';

function App() {
  return (
    <>
      <h1>React app</h1>
      <div>{dummyFunction()}</div>
    </>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
