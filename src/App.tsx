import React from 'react';
import './App.css';

import CrosswordBoard from './components/CrosswordBoard';

function App() {
  return (
    <div className='App'>
      <div>hello world</div>
      <CrosswordBoard numRows={15} numCols={15} />
    </div>
  );
}

export default App;
