/*165.	Два двузначных числа, записанных одно за другим, образуют четырёхзначное число,
которое делится на их произведение. Найти эти числа.*/
var numbers = [];
for (var i = 10; i < 100; ++i) {
  for (var j = 10; j < 100; ++j) {
    var t = Number(String(i) + String(j));
    if (t % (i * j) === 0) {
      numbers.push([i, j]);
    }
  }
}
console.log(numbers);