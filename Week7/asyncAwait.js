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
    }, 1000);
  });
}

async function greeting() {
  try {
    console.log('Greeting starting')
    const result = await greetingsProcessor()
    console.log(result)   
  } catch (error) {
    console.log(error)
  }
}

greeting();