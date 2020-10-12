//130.	Дан двухмерный массив 5x5. Найти сумму модулей отрицательных нечетных элементов.
var matrix = [];
var negSum = 0;
for (var i = 0; i < 5; ++i) {
  var line = [];
  for (var j = 0; j < 5; ++j) {
    line[j] = Math.floor(Math.random() * (100 + 100) - 100) + 1;
    if (line[j] < 0 && line[j] % 2 !== 0) {
      negSum += Math.abs(line[j]);
    }
  }
  matrix[i] = line;
}
console.log("Matrix = ", matrix);
console.log("Sum of mods of negative odd elements = " + negSum);



