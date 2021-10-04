function makeObjectDeepCopy(obj) {
  const clone = {};
  for(key in obj) { 
    if(String(typeof obj) === 'Object') { 
      clone[key] = deepCopy(obj[key]);
    }
    else {
      clone[key] = obj[key];
    }
  }
  return clone;
}

function selectFromInterval(arr, first, second) {
  let first1 = parseInt(first);
  let second1 = parseInt(second);
  if(isNaN(first1) || isNaN(second1) || first1 === Infinity || second1 === Infinity || Array.isArray(arr) === false) {
    throw new  Error('Ошибка!');
  }
  arr.forEach(element => {
    if(isNaN(parseInt(element))) {
      throw new Error('Ошибка!');
    }
  });
  if(first1 < second1) {
    return arr.filter(item => (item >= first1 && item <= second1));
  }
  else {
    return arr.filter(item => (item >= second1 && item <= first1));
  }
}

let myIterable = {
  from: 1,
  to: 10,
  [Symbol.iterator]() {
    this.current = this.from;
    return this;
  },
  next() {

    if((this.current > this.to) || !Number.isInteger(this.current) || !Number.isInteger(this.to) || this.current === undefined || this.to === undefined) {
      throw new Error('Ошибка!');
    }
    else if(this.current <= this.to) {
      return {done: false, value: this.current++};
    }
    else {
      return {done: true};
    }
  }
}
