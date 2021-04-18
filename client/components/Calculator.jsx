import React, { useState, useContext } from 'react'
import { ThemeContext } from './App'


export default function Calculator () {
  const [input, setInput] = useState('')
  const [solution, setSolution] = useState('')
  const { user, setSaved } = useContext(ThemeContext)
  console.log(user)

const addToInput = (param) => {
  setInput(p=>p=p+param)
}

const clearInput = () => {
  setInput(p=>p='')
  setSolution(p=>p='')
}

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

  let count = 0

  let addArray = (split) => {
      while(split.length > 1) {
        count++
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
        if (count > 50) {
          split.splice(0)
          result = 'Syntax Error'
          return result
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
        <p className="welcome"> Welcome, <span>{user}</span>. Type an equation to get your results</p>
        <div className="input">
        <input className="calculatorInput" type="text" onChange={(e)=>{setInput(p=>p=e.target.value)}} value={input}/>
        </div>

        <div className="numberPad">
          <div className="childContainer">
            <div className="topRow">
              <input type='submit' className="numbers" id='nine' value='7' onClick={()=>addToInput('7')}/>
              </div>
              <>
              <input type='submit' className="numbers" value='8' onClick={()=>addToInput('8')}/>
              </>
              <>
              <input type='submit' className="numbers" value='9' onClick={()=>addToInput('9')}/>
              </>
          </div>


          <div className="childContainer">
            <div className="topRow">
              <input type='submit' className="numbers" id='nine' value='4' onClick={()=>addToInput('4')}/>
              </div>
              <>
              <input type='submit' className="numbers" value='5' onClick={()=>addToInput('5')}/>
              </>
              <>
              <input type='submit' className="numbers" value='6' onClick={()=>addToInput('6')}/>
              </>
          </div>

          <div className="childContainer">
            <div className="topRow">
              <input type='submit' className="numbers" id='nine' value='1' onClick={()=>addToInput('1')}/>
              </div>
              <>
              <input type='submit' className="numbers" value='2' onClick={()=>addToInput('2')}/>
              </>
              <>
              <input type='submit' className="numbers" value='3' onClick={()=>addToInput('3')}/>
              </>
          </div>

          <div className="zero">
            <input type='submit' className="numbers" value='0' onClick={()=>addToInput('0')}/>
          </div>

          <div className="operations">
          <input type='submit' className="numbers operations" value='÷' onClick={()=>addToInput('/')}/>
          <input type='submit' className="numbers operations" value='x' onClick={()=>addToInput('*')}/>
          <input type='submit' className="numbers operations" value='-' onClick={()=>addToInput('-')}/>
          <input type='submit' className="numbers operations" value='+' onClick={()=>addToInput('+')}/>
          </div>
          <div className="parenthesis">
          <input type='submit' className="numbers parenthesis" value='(' onClick={()=>addToInput('(')}/>
          <input type='submit' className="numbers parenthesis" value=')' onClick={()=>addToInput(')')}/>
          </div>
          <div className="save">
            <input type='submit' className="numbers parenthesis" value='clear' onClick={()=>clearInput()}/>
          <input type='submit' className="numbers parenthesis" value='save' onClick={()=> {
              if (solution === '' || solution === 'Syntax Error' || solution === 'Invalid Input') {
                alert('submit before saving')
              } else {
                setSaved(p=>[...p,  {equation: input, solution: solution }])
              }
            }}/>
          </div>

        </div>
        <div className="calBtnContainer">
        <input className="calculatorButton" type="submit" value="calculate" onClick={()=>{solve()}}/>
        <p>{solution}</p>
        </div>

      </div>
    </>
  )
}