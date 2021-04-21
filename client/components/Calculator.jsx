import React, { useState, useContext } from 'react';
import Header from './Header';
import { ThemeContext } from './App';

export default function Calculator() {
  const [input, setInput] = useState('');
  const [solution, setSolution] = useState('');
  let props = useContext(ThemeContext);
  const [riddle, setRiddle] = useState(false);
  const greeting = {
    header: 'VidMob Calculates',
    caption: `What works faster than a calculator? ${riddle ? 'A calcu-now.' : ''}`,
  };

  // conditional for Jest/Enzyme testing
  if (props === undefined) {
    let props = {};
    props.user = 'Guest';
  }

  const addToInput = (inputString) => {
    setInput((prev) => prev + inputString);
  };

  const clearInput = () => {
    setInput('');
    setSolution('');
  };

  /*||||||||||||||||||||||||||||||||||||||||
  -------- Calculation function ----------
  ||||||||||||||||||||||||||||||||||||||||*/
  const solve = () => {
    let finalResult;

    const calculate = (num1, operation, num2) => {
      switch (operation) {
        case '+':
          return num1 + num2;
        case '-':
          return num1 - num2;
        case '*':
          return num1 * num2;
        case '/':
          return num1 / num2;
        default:
      }
    };

    const regExp = /[a-zA-Z]/g;

    // If any characters in the input are letters set solution to 'invalid input'
    if (regExp.test(input)) {
      setSolution('Invalid Input');
    } else {
      // split the input equation string to an array
      let equation = input.split('');

      // seperate/distinguish negative numbers from the subtraction expression
      if (equation.includes('-')) {
        for (let i = equation.length - 1; i > 0; i--) {
          if (equation[i] === '-' && i !== 0) {
            if (equation[i - 1] !== '-' && equation[i - 1] !== '+' && equation[i - 1] !== '*' && equation[i - 1] !== '/') {
              equation.splice(i + 1, -1, '?');
            }
            equation.splice(i, -1, '?');
          }
        }
        const equationToString = equation.join('');
        equation = equationToString;
      } else {
        equation = input;
      }

      // split equation string into individual elments of the equation
      const equationArray = equation.match(/[-.0-9]+|[-]+|[+]+|[*]+|[/]+|[(]+|[)]+|\d/g);

      let preventCount = 0;

      const sortEquation = (equating) => {
        while (equating.length > 1) {
          preventCount++

          for (let i = 0; i < equating.length; i++) {
            // search for multiplication or division in the equation array
            if (equating[i] === '*' || equating[i] === '/') {
              let result = calculate(Number(equating[i - 1]), equating[i], Number(equating[i + 1]));
              equating.splice(i - 1, 2);
              equating[i - 1] = result;
              break;
            }
          }

          for (let i = 0 ; i < equating.length; i++) {
            if (equating[i] === '+' || equating[i] === '-') {
              let result = calculate(Number(equating[i - 1]), equating[i], Number(equating[i + 1]));
              equating.splice(i - 1, 2);
              equating[i - 1] = result;
              break;
            }
          }

          if (preventCount > 50) {
            equating.splice(0);
            finalResult = 'Syntax Error';
            return finalResult;
          }
        }
        finalResult = equating.join();
        return finalResult;
      };

      // calculate equations inside parenthesis first
      while (equationArray.includes('(')) {
        const paren1 = equationArray.indexOf('(');
        const paren2 = equationArray.indexOf(')');
        // isolate equation inside parenthesis
        const parenEquation = equationArray.slice(paren1+1, paren2);
        // pass the isolated equation to get sorted/calculated
        const parenResults = sortEquation(parenEquation);
        // replace the equation inside of parenthesis with the results
        equationArray.splice(paren1, paren2+1, parenResults);
      }

      // after parenthesis have been calculated calculate remaining
      sortEquation(equationArray);

      if (finalResult === 'NaN') {
        finalResult = 'Syntax Error';
      }
      setSolution(finalResult);
    }
  };

  return (
    <>
      <div className="calculator-container">
        <Header greeting={greeting} />
        {!riddle ? <input type="submit" value="reveal" className="riddle-btn" onClick={() => setRiddle(true)} /> : ''}
        <p className="welcome">
          Welcome
          <span>{props === undefined ? ' Guest' : ` ${props.user}` }</span>
          , Type an equation to get your results
        </p>
        <div className="calc-input-container">
          <input className="calculator-input" placeholder="Write an equation" type="text" onChange={(e) => { setInput(e.target.value); }} value={`${input}${solution.length > 0 ? ` = ${solution}` : ''}`} />
        </div>

        <div className="submit-btn-container">
          <input className="submit-btn" type="submit" value="calculate" onClick={() => { solve(); }} />
        </div>

        <div className="calculator">
          <div className="number-buttons">
            <input type="submit" className="key" value="7" onClick={() => addToInput('7')} />
            <input type="submit" className="key" value="8" onClick={() => addToInput('8')} />
            <input type="submit" className="key" value="9" onClick={() => addToInput('9')} />
          </div>
          <div className="number-buttons">
            <input type="submit" className="key" value="4" onClick={() => addToInput('4')} />
            <input type="submit" className="key" value="5" onClick={() => addToInput('5')} />
            <input type="submit" className="key" value="6" onClick={() => addToInput('6')} />
          </div>

          <div className="number-buttons">
            <input type="submit" className="key" value="1" onClick={() => addToInput('1')} />
            <input type="submit" className="key" value="2" onClick={() => addToInput('2')} />
            <input type="submit" className="key" value="3" onClick={() => addToInput('3')} />
          </div>

          <div className="zero">
            <input type="submit" className="key" value="0" onClick={() => addToInput('0')} />
          </div>

          <div className="operations">
            <input type="submit" className="key operations" value="÷" onClick={() => addToInput('/')} />
            <input type="submit" className="key operations" value="x" onClick={() => addToInput('*')} />
            <input type="submit" className="key operations" value="-" onClick={() => addToInput('-')} />
            <input type="submit" className="key operations" value="+" onClick={() => addToInput('+')} />
          </div>

          <div className="parenthesis">
            <input type="submit" className="key misc" value="(" onClick={() => addToInput('(')} />
            <input type="submit" className="key misc" value=")" onClick={() => addToInput(')')} />
          </div>

          <div className="reset-container">
            <input type="submit" className="key misc" value="clear" onClick={() => clearInput()} />
            <input
              type="submit"
              className="key misc"
              value="save"
              onClick={() => {
                if (solution === '' || solution === 'Syntax Error' || solution === 'Invalid Input') {
                  alert('Error saving please check your input')
                } else {
                  alert('Saved')
                  props.setSaved((p) => [...p, { equation: input, solution }]);
                }
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
