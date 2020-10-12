/*165.	Характеристикой строки матрицы назовём сумму её отрицательных четных элементов.
Расположить строки в соответствии с убыванием характеристик.*/
var matrix = [];
for (var i = 0; i < 5; ++i) {
  var line = [];
  for (var j = 0; j < 5; ++j) {
    line[j] = Math.floor(Math.random() * (100 + 100) - 100) + 1;
  }
  matrix[i] = line;
}
console.log("Matrix = ", matrix);
matrix.sort(function (a, b) {
  var positiveA = a.filter(function (number) {
    return (number < 0 && number % 2 === 0);
  });
  var positiveB = b.filter(function (number) {
    return (number < 0 && number % 2 === 0);
  });
  var result1 = positiveA.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  var result2 = positiveB.reduce(function (sum, current) {
    return sum + current;
  }, 0);
  return result2 - result1;
});
console.log("Sorted matrix = ", matrix);
