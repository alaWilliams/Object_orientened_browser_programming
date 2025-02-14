// The splice method of an array modifies the array in-place, which means that it is not an pure function.
var values = [5, 11, 394, 2, 576];
// values.splice(2, 1);
// Create function called pureSplice which accepts an array (all elements are numbers) an returns a new array with elements removed in similar fashion as regular splice(startingIndex, deleteCount).
function pureSplice(array, startIndex, deleteCount) {
    var newArray = [];
    for (var i = 0; i < array.length; i++) {
        if (i < startIndex) {
            newArray.push(array[i]);
        }
        if (i >= (startIndex + deleteCount)) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(pureSplice(values, 2, 1));
