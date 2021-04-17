import React, { useState } from 'react'
import NumberPad from './NumberPad'


export default function Calculator () {
  const [input, setInput] = useState('')
  const [solution, setSolution] = useState()

const solve = () => {
  let result;

  let calculate = (int1, operation, int2) => {
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

  const regExp = /[a-zA-Z]/g;

  if(regExp.test(input)){
    setSolution(p=>p='Invalid Input')
  } else {

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
  let equationArray = equation.match(/[-.0-9]+|[-]+|[+]+|[*]+|[/]+|[(]+|[)]+|\d/g);

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

    console.log("results",  split.join())
    result = split.join()
    return result
  }

  // calculate equations inside parenthesis first
  while(equationArray.includes('(')) {
    let paren1 = equationArray.indexOf('(')
    let paren2 = equationArray.indexOf(')')
    let parenEquation = equationArray.slice(paren1+1, paren2)
    let parenResults = addArray(parenEquation)
    equationArray.splice(paren1, paren2+1, parenResults)
  }

  // after parenthesis have been calculated calculate remaining
  addArray(equationArray)

  if (result === 'NaN') {
    result = 'Syntax Error'
  }
  setSolution(p=>p=result)
  }
}
  return (
    <>
      <div className="calculatorContainer">
        <p className="welcome"> Welcome, Esteban. Type an equation to get your results</p>
        <div className="input">
        <input className="calculatorInput" type="text" onChange={(e)=>{setInput(p=>p=e.target.value)}}/>
        </div>
        <div className="numberPad">
          <input type='submit' value='9'/>
          <input type='submit' value='8'/>
          <input type='submit' value='7'/>

          <input type='submit' value='6'/>
          <input type='submit' value='5'/>
          <input type='submit' value='4'/>

          <input type='submit' value='3'/>
          <input type='submit' value='2'/>
          <input type='submit' value='1'/>


          <input type='submit' value='0'/>

          <input type='submit' value='÷'/>
          <input type='submit' value='x'/>
          <input type='submit' value='-'/>
          <input type='submit' value='+'/>

          <input type='submit' value='('/>
          <input type='submit' value=')'/>

          <input type='submit' value='AC'/>
          <input type='submit' value='='/>

        </div>
        <input className="calculatorButton" type="submit" value="calculate" onClick={()=>{solve()}}/>
        <p>{solution}</p>
      </div>
    </>
  )
}