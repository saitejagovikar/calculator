import React, { useState } from 'react';
import './App.css';

function App() {
  const [input, setInput] = useState('');

  // Handle button clicks
  const handleClick = (value) => {
    if (value === 'C') {
      setInput(''); // Clear input
    } else if (value === '=') {
      try {
        // Evaluate the expression
        setInput(eval(input).toString());
      } catch (error) {
        setInput('Error');
      }
    } else {
      setInput(input + value); // Append the value
    }
  };

  const buttons = [
    'C',
    '(',
    ')',
    '/',
    '7',
    '8',
    '9',
    '*',
    '4',
    '5',
    '6',
    '-',
    '1',
    '2',
    '3',
    '+',
    '0',
    '.',
    '=',
  ];

  return (
    <div className="App">
      <h1>Calculator</h1>
      <div className="calculator">
        <input type="text" className="display" value={input} readOnly />

        <div className="buttons">
          {buttons.map((button) => (
            <button key={button} onClick={() => handleClick(button)}>
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
