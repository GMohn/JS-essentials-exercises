/* let fish = ['Dory', 'Marlin', 'Gill', 'Nemo', 'Bruce'];
fish.every(ele => {
    if(ele === 'Nemo') return false;
    else console.log(ele);
    return true;
});
function sum(num1,num2) {
    return num1+num2;
}
let vocabulary = [
    ['happy', 'cheerful', 'merry', 'glad'],
    ['tired', 'sleepy', 'fatigued', 'drained'],
    ['excited', 'eager', 'enthused', 'animated']
  ];
function vocab (arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <arr[i].length; j++){
            console.log(arr[i][j]);
        }
    }
}

vocab(vocabulary);

let isOdd = (num) => num % 2 ? false : true;
console.log(isOdd(2));
console.log(isOdd(3));
console.log(isOdd(7));

let myArray = {
    0: 'uwu',
    1: 69,
    2: ['arr',1,true],
    length: 3,
};

for (let i = 0; i < myArray.length; i += 1) {
  console.log(myArray[i]);
} 

let obj = {
    b: 2,
    a: 1,
    c: 3,
  };
  let arr = Object.keys(obj);
  let uppArr = arr.map((element) => element.toUpperCase());
  console.log(uppArr);
  
 let myProtoObj = {
    foo: 1,
    bar: 2,
  };
  let obj = Object.create(myProtoObj);
  obj.qux = 3;
  console.log(obj.qux);
   */

  let objToCopy = {
    foo: 1,
    bar: 2,
    qux: 3,
  };
  function copyObj(srcObj,keys = Object.keys(srcObj)) {
      let newObj = {};
      for (let i = 0; i < keys.length; i++){
        srcKey = keys[i];
        newObj[srcKey] = srcObj[srcKey];
      }
      return newObj;
  }
  let newObj = copyObj(objToCopy);
  console.log(newObj);        // => { foo: 1, bar: 2, qux: 3 }
  
  let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
  console.log(newObj2);       // => { foo: 1, qux: 3 }
  
  let newObj3 = copyObj(objToCopy, [ 'bar' ]);
  console.log(newObj3);       // => { bar: 2 }

