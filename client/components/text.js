function calculate(input) {
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

  let splitt = input.match(/[+-/*]+|[0-9]+(?:\.[0-9]+|)/g);

  let splitty = input.match(/[+-/*]+|(-?[0-9]+(\.[0-9]+)?)/g);
  console.log("fooooooo", splitt)
  // find the decimals and merge
  // while (splitt.includes('.')) {
  //  let index = splitt.indexOf('.')
  //  console.log(index)
  // }
  // find the negative numbers

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
return result

    // let result = innerFunc(Number(split[index-1]),split[index], Number(split[index+1]))
    // split.splice(index-1, 3)
    // split[index-1] = result
    // console.log("index", index)
    // console.log("splitttt", split)
    // console.log("da result", result)
// console.log('what is this:', Number('.32'))

  // look for either * or /
    // innerfunction to get results
    // add the results somehow



  // var output;
  // for (var i = 0, n = f.ooo.length; i < n; i++) {
  // console.log("fooooooo", f.ooo[i])
  // //   // Regular Expression to look for operators between floating numbers or integers
  //   var re = new RegExp('(\\d+\\.?\\d*)([\\' + f.ooo[i].join('\\') + '])(\\d+\\.?\\d*)');
  //   re.lastIndex = 0; // take precautions and reset re starting pos

  //   console.log("reerererer", RegExp.$1, RegExp.$2, RegExp.$3)

  //   // Loop while there is still calculation for level of precedence
  //   while (re.test(input)) {
  //     output = _calculate(RegExp.$1, RegExp.$2, RegExp.$3);
  //     if (isNaN(output) || !isFinite(output))
  //       return output; // exit early if not a number
  //     input = input.replace(re, output);
  //   }
  // }

}
calculate('.4*5/2')