import React from 'react';
import './App.css';
import Square from './components/Square.js';

function App() {
  return (
    <div>
      <Square
        active={true}
        number="1"
        letter="A"
      />
      <Square
        active={false}
        number="1"
        letter="A"
      />
    </div>
  );
}

export default App;
