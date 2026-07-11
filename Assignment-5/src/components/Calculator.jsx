import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleAddition = () => {
    setResult(parseFloat(num1) + parseFloat(num2));
  };

  const handleSubtraction = () => {
    setResult(parseFloat(num1) - parseFloat(num2));
  };

  const handleMultiplication = () => {
    setResult(parseFloat(num1) * parseFloat(num2));
  };

  const handleDivision = () => {
    if (parseFloat(num2) === 0) {
      setResult('Error: Divide by zero');
    } else {
      setResult(parseFloat(num1) / parseFloat(num2));
    }
  };

  return (
    <div className="calculator-container">
      <h2>React Calculator</h2>
      
      <div className="input-group">
        <input 
          type="number" 
          placeholder="Enter first number" 
          value={num1}
          onChange={(e) => setNum1(e.target.value)}
        />
        <input 
          type="number" 
          placeholder="Enter second number" 
          value={num2}
          onChange={(e) => setNum2(e.target.value)}
        />
      </div>

      <div className="button-group">
        <button onClick={handleAddition}>+</button>
        <button onClick={handleSubtraction}>-</button>
        <button onClick={handleMultiplication}>*</button>
        <button onClick={handleDivision}>/</button>
      </div>

      <div className="output-group">
        <h3>Result: {result !== null ? result : '---'}</h3>
      </div>
    </div>
  );
};

export default Calculator;
