//80.	Дана строка. Вставить после каждого символа два случайных символа.
var str = "ajvaovhoandjlnjahwvbkadbvk";
var str1 = ""
for (var i = 0; i < str.length; ++i) {
  str1 += str[i] + String.fromCharCode(Math.floor(Math.random() * (90 - 65 + 1)) + 65);
}
console.log("String: " + str);
console.log("New string: " + str1);