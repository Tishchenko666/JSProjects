/*130.	Напишите скрипт, который сообщает о наличии слова 'Java' во введенной строке и
выводит false в противном случае.*/
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Text: ', (value) => {
  let str = value
  if (str.includes("Java")) {
    console.log("String has word 'Java'");
  } else {
    console.log("false");
  }
  rl.close();
  process.exit();
});

