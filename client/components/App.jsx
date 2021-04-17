import React, { useState, useEffect } from 'react'

export default function App () {
  const [input, setInput] = useState('')
  const [solution, setSolution] = useState()

const solve = () => {
  let result;

  const calculate = (int1, operation, int2) => {
    switch (operation) {
      case '+':
        return int1 + int2
        break;
      case '-':
        return int1 - int2
        break;
      case '*':
        return int1 * int2
        break;
      case '/':
        return int1 / int2
        break;
    }
  }

  let equation = input.split('')

  // seperate/distinguish negative numbers from the subtraction expression
  if (equation.includes('-')) {
    for (let i = equation.length - 1; i > 0; i--) {
      if(equation[i] === '-' && i !== 0) {
        if (equation[i-1] !== '-' && equation[i-1] !== '+' && equation[i-1] !== '*' && equation[i-1] !== '/') {
          equation.splice(i+1, -1, '?')
        }
          equation.splice(i, -1, '?')
      }
    }
    let joined = equation.join('')
    equation = joined
  } else {
    equation = input
  }

  // split equation string into an array
  let equationArray = equation.match(/[-.0-9]+|[-]+|[+]+|[*]+|[/]+|\d/g);

  let addArray = (split) => {
    while(split.length > 1) {
      for (let i = 0 ; i < split.length; i++) {
        if (split[i] === '*' || split[i] === '/') {
          let result = calculate(Number(split[i-1]),split[i], Number(split[i+1]))
          split.splice(i-1, 2)
          split[i-1] = result
          break
        }
      }

      for (let i = 0 ; i < split.length; i++) {
        if (split[i] === '+' || split[i] === '-') {
          let result = calculate(Number(split[i-1]),split[i], Number(split[i+1]))
          split.splice(i-1, 2)
          split[i-1] = result
          break
        }
      }
    }
    result = split.join()
  }
  addArray(equationArray)
  setSolution(p=>p=result)
  }

  return (
    <div>
      <h1>App is running</h1>
      <input type="text" onChange={(e)=>{setInput(p=>p=e.target.value)}}/>
      <input type="submit" value="calculate" onClick={()=>{solve()}}/>
      <p>{solution}</p>
    </div>
  )
}