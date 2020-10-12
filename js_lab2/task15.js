//15.	Напишите программу для сдвига массива.
let array = [2, 6, 17, 6, 9, 3, 10, 5, 66, 666];
let num = Math.floor(Math.random() * (100 - 20) + 20);
console.log("Array = " + array);
if (num % 2 === 0) {
  array.unshift(num);
  console.log("First element was added");
  console.log("New array = " + array);
} else {
  console.log("First element was deleted: " + array.shift());
  console.log("New array = " + array);
}
