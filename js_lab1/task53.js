//53.	Дан текст. Найти сумму имеющихся в нем цифр.
var text = "ajdovao27367sjvfj287vbwj8238svf";
console.log("Text " + text);
var sum = 0;
for (var i = 0; i < text.length; ++i) {
  if (!isNaN(text[i])) {
    sum += parseInt(text[i]);
  }
}
console.log("Sum = " + sum);
