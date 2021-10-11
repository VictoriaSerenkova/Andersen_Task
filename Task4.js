function concatStrings(a, separator) {
  let str = '';
  if(typeof a === 'string') str += a;
  if(typeof separator !== 'string') separator = '';
  function fn(b) {
    if(typeof b === 'string') str = str + separator + b;
    return fn;
  }

  fn.toString = function() {
    return str;
  };

  return fn;
}


class Calculator {
  constructor(first, second) {
      if(!Number.isSafeInteger(first) || !Number.isSafeInteger(second)) {
          throw new Error('Error');
      }
      this.first = first;
      this.second = second; 
  }

  setX(num) {
      if(!Number.isSafeInteger(num)) {
          throw new Error('Error')
      }
      else Calculator.first = num;
  }

  setY(num) {
    if(!Number.isSafeInteger(num)) {
        throw new Error('Error');
    }
    else Calculator.second = num;
  }

  logSum() {
      alert(Calculator.first+Calculator.second);
  }

  logMul() {
    console.log(Calculator.first*Calculator.second);
  }

  logSub() {
    console.log(Calculator.first-Calculator.second);
  }

  logDiv() {
    if(Calculator.second === 0) {
      throw new Error('Error');
    }
    else console.log(Calculator.first/Calculator.second);
  }
}

