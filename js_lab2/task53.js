/*53.	Дан одномерный массив из n элементов. Вычислить сумму всех отрицательных чисел,
их количество и сумму всех положительных чисел.*/
var array = [];
var negCounter = 0;
var negSum = 0;
var posSum = 0;
let n = Math.floor(Math.random() * (21 - 10) + 10);
for (let i = 0; i < n; ++i) {
  array[i] = Math.floor(Math.random() * (100 + 100) - 100) + 1;
  if (array[i] > 0) {
    posSum += array[i];
  } else if (array[i] < 0) {
    ++negCounter;
    negSum += array[i];
  }
}
console.log("Array = ", array);
console.log("Sum of positive elements = " + posSum);
console.log("Amount of negative elements = " + negCounter);
console.log("There sum = " + negSum);

