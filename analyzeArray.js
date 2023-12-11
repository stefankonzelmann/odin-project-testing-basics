function analyzeArray(arr) {
  const calcAverage = (arr) => {
    let total = 0;
    arr.forEach((value) => (total += value));
    return total / arr.length;
  };

  const calcMin = (arr) => {
    let min = arr[0];
    arr.forEach((value) => {
      if (value < min) min = value;
    });
    return min;
  };

  const calcMax = (arr) => {
    let max = arr[0];
    arr.forEach((value) => {
      if (value > max) max = value;
    });
    return max;
  };

  result = {
    average: calcAverage(arr),
    min: calcMin(arr),
    max: calcMax(arr),
    length: arr.length,
  };
  return result;
}
module.exports = analyzeArray;

console.log(analyzeArray([1, 8, 3, 4, 2, 6]));
