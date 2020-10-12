/*80.	Среди столбцов целочисленной матрицы A(n х m), содержащих только положительные элементы,
найти столбец с минимальным произведением элементов.*/
var matrix = [];
var n = Math.floor(Math.random() * (11 - 3) + 3);
var m = Math.floor(Math.random() * (11 - 3) + 3);
for (var i = 0; i < n; ++i) {
  var line = [];
  for (var j = 0; j < m; ++j) {
    line[j] = Math.floor(Math.random() * (11 - 3) + 3);
  }
  matrix[i] = line;
}
console.log("Matrix = ", matrix);
var minProduct = 0;
var minColumn = 0;
for (var j = 0; j < m; ++j) {
  var product = matrix[0][j];
  for (var i = 1; i < n; ++i) {
    product *= matrix[i][j];
  }
  if (j === 0) {
    minProduct = product;
  } else {
    if (product < minProduct) {
      minProduct = product;
      minColumn = j;
    }
  }
}
console.log("Column with minimum product of elements = " + minColumn);