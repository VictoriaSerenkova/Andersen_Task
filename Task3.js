Array.prototype.myFilter = function (callback, thisArg) {
    if(this === null) {
        throw new Error('Error');
    }
    if(typeof callback !== 'function') {
        throw new Error('Error');
    }

    let result = [];
    let arr = Object(this);
    let length = arr.length;
    for(let i = 0; i < length; i++) {
        if((callback.call(thisArg, arr[i], i, arr))) {
            result.push(arr[i]);
        }
    }
    return result;
}


function createDebounceFunction(callback, ms) {
  let timeout;
  return function() {
      clearTimeout(timeout);
      timeout = setTimeout(callback.apply(this, arguments), ms);
  };
}

