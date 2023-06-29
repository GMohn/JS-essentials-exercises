let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]
/*Use map and filter to first determine the lengths of all the elements in an array of string values, then discard the even values (keep the odd values).*/

function oddLengths(array) {
    let arrLen = array.map(value => value.length);
    return arrLen.filter(ele => ele % 2);
}

console.log(oddLengthsReduce(arr)); // => [1, 5, 3]

function oddLengthsReduce(strings) {
    return strings.reduce((filteredNumbersArray, letters) => {
      let length = letters.length;
      if (length % 2 === 1) {
        filteredNumbersArray.push(length);
      }
  
      return filteredNumbersArray;
    }, []);
  }