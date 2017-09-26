var asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof a === 'number' && typeof b === 'number') {
        resolve(a+b);
      }
      else {
        reject('Arguments must be numbers');
      }
    }, 1500);
  })
}

asyncAdd(5, '10').then((result) => {
  console.log('Result:', result);
  return asyncAdd(result, 29);
}).then((result) => {
  console.log(result);
}).catch((errorMessage) => {
  console.log(errorMessage);
})

// var somePromise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     //resolve('Hey it worked');
//     reject('Unable to fulfill Promise');
//   }, 2500);
// });
//
// somePromise.then((msg) => {
//   console.log(msg);
// }, (errorMessage) => {
//   console.log(errorMessage);
// })
