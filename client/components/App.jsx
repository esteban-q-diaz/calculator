import React, { useState, useEffect } from 'react'

export default function App () {
  const [input, setInput] = useState('')
  const [solution, setSolution] = useState()

  // useEffect(()=> {
    console.log(input, typeof input)
  //   var str = input.replace(/[^-()\d/*+.]/g, '');
  //   var result = eval(str)
  //   setSolution(p=>p=result)
  //   // alert(eval(str));

  // }, [input])

  let solve = () => {


    let result;

  let equation = (int1, operation, int2) => {
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

  let splitt = input.match(/[-.0-9]+|[-]+|[+]+|[*]+|[/]+|\d{1,2000}/g);

  // find the decimals and merge
  // NOTE: causing infinite loop
  // while (splitt.includes('.')) {
  //   let index = splitt.indexOf('.')
  //   console.log("indx of the dot:", index)
  //   let temp = splitt[index] + splitt[index+1]
  //   console.log("da temp:", temp)
  //   splitt.splice(index, 1)
  //   splitt[index] = temp
  //   console.log('new array:', splitt)
  // }

let addArray = (split) => {
  while(split.length > 1) {
    for (let i = 0 ; i < split.length; i++) {
      if (split[i] === '*' || split[i] === '/') {
        console.log("da indexxxxxx: ", split[i], i)
        let result = equation(Number(split[i-1]),split[i], Number(split[i+1]))
        split.splice(i-1, 2)
        split[i-1] = result
        console.log("loop index", i)
        console.log("splitttt", split)
        console.log("da result", result)
        break
      }
    }
    // addArray(split)
    for (let i = 0 ; i < split.length; i++) {
      if (split[i] === '+' || split[i] === '-') {
        console.log("da indexxxxxx: ", split[i], i)
        let result = equation(Number(split[i-1]),split[i], Number(split[i+1]))
        split.splice(i-1, 2)
        split[i-1] = result
        console.log("index", i)
        console.log("splitttt", split)
        console.log("da result", result)
        break
      }
    }
    // addArray(split)
  }

  console.log("split herer:", split.join())
  result = split.join()
}
addArray(splitt)


console.log("result", result)
setSolution(p=>p=result)






  //   let operations = {
  //     add: '+',
  //     sub: '-',
  //     division: '/',
  //     multiplcation: '*',
  //   }

  // operations.order = [
  //   [
  //     [operations.multiplcation],
  //     [operations.division],
  //   ],
  //   [
  //     [operations.add],
  //     [operations.sub],
  //   ]
  // ]




  // let object = {

  // }

  // let mathObj = {
  //   currentTotal: 0,
  // }

  // let count = 1;

  //splite integers and expressions into an array
  // let split = input.match(/[+-/*]+|[0-9]+(?:\.[0-9]+|)/g);


  // for (var i = 0; i < split.length; i++) {
  //   if (split[i] === '+') {
  //     mathObj[`math${count}a`] = split[i-1]
  //     mathObj[`exp${count}`] = split[i]
  //     mathObj[`math${count}b`] = split[i-2]
  //     mathObj[`math${count}b`] = split[i-2]
  //   }
  // }

  // console.log('the mathObject', mathObj)
  // console.log("regexxxxxx", split)
    // seperate numbers from characters
      // iterate through the array
      // find all the multiplications
      // add to the multiply1 object
      // if more add to multiply2 object
      // etc

  // let array = input.split('')
  // console.log('arrayyyy:', array)
  // let index = array.indexOf('+')
  // console.log('index:', index)
  // let add = Number(array[index-1]) + Number(array[index+1])
  // console.log(add)
  // delete array[index]
  // delete array[index+1]
  // delete array[index-1]
  // array.push(add)
  // console.log("the array:", array)
  // while the array includes *
    // find the index where the first is located
    // multiple the index before and the index after
    // replace all three indexes with  results (hence no more *)
    // repeat (check next *)

    // while(array.includes('+')) {

    // }



  // while (input.includes('*')) {
  //   //multiple and remove those numbers
  // }
  // while (input.includes('/')) {
  //   //divide and remove those numbers
  // }
  // while (input.includes('+')) {
  //   //add and remove those numbers
  // }
  // let result = input.split('')
  // console.log("result:", result)

  // if (result.includes('+')) {
  //   let add = Number(result[0]) + Number(result[1])
  //   //subtract and remove those numbers
  //   console.log("add this:", add)
  // }

  // console.log(operations)








/* ------------SOLUTION NUMBER ONE ----------*/
    // var str = input.replace(/[^-()\d/*+.]/g, '');
    // eval is safe to use here because user does not have direct access to running the sccript so we are avaoiding any security issues
    // https://stackoverflow.com/questions/197769/when-is-javascripts-eval-not-evil
    // var result = eval(input)
    // alert(result)
    // alert(input)
    // setSolution(p=>p=result)
    // alert(eval(str));

/* ------------SOLUTION NUMBER TWO ----------*/
    // if(input.includes('+')) {
    //   const addition = input.split('+')
    //   console.log(addition)
    //   const numbers = addition.map(noStr => parseInt(noStr))
    //   console.log(numbers)
    //   const initialValue = 0.0
    //   const result = numbers.reduce((acc, no) => acc + no, initialValue)
    // console.log(result)
    // } else if(input.includes('-')) {
    //   const subtraction = input.split('-')
    //   console.log(subtraction)
    //   const numbers = subtraction.map(noStr => parseInt(noStr))
    //   console.log(numbers)
    //   const initialValue = numbers[0]
    //   const result = numbers.reduce((acc, no) => initialValue - no)
    //   console.log(result)
    // }


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