/*Создать простое веб-приложение, выводящее список студентов группы,
ее название и ФИО студента*/
const http = require("http");
const fs = require("fs");
http.createServer(doSomething).listen(3000, "127.0.0.1", function () {
  console.log("Сервер начал прослушивание запросов на порту 3000");
});

function doSomething(request, response) {
  let fileContent = fs.readFileSync("groupList.txt", "utf8");
  response.setHeader("Content-Type", "text/plain; charset=utf-8");
  response.end(fileContent);
}