function greetingsProcessor() {
  return new Promise((resolve, reject) => {
    //asynchronous operation
    setTimeout(() => {
      const success = Math.random() > 0.5;

      if(success) {
        const operationResult = "hello world!";
        resolve(operationResult);
      }else {
        const failure = 'Sadly, the operation has failed :(';
        reject(failure);
      }
    }, 2000);
  });
}

console.log('Timer starts')
greetingsProcessor().then(resultOfThePromise => {
  console.log(resultOfThePromise)
})
  .catch(errorResult=> console.log(errorResult))

console.log('last line of code')