const values = [533, 235, 223, 56, 88, 2, 6, 88, 664];

// function minValue() {
// 	let min = null;
// 	for (let i = 0; i < values.length; i++) {
// 		if (min != null || values[i] < min) {
// 			min = values[i];
// 		}
// 	}
// 	return min;
// }
// const minimum = minValue();
// console.log(minimum); // 2
// Here is a function which finds the minimum value from array values. Write a pure version of a function which finds minimum value in an array.

function pureMinValue(array: number[]) : number {
  let min = array[0];
  array.forEach(element => element < min ? min = element : min)
  return min;
  };
console.log(pureMinValue(values))