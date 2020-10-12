/*1. Создать объект Сотрудник, который содержит сведения о сотрудниках некоторой фирмы,
такие как Имя, Отдел, Телефон, Зарплата(использовать функцию-конструктор и ключевое слово this).
Создать экземпляр объекта.
2. Через созданный экземляр объекта Сотрудник добавьте новое свойство адрес к классу объектов
5. Создать метод объекта для отображения данных
3. Создать класс объектов (Tour) для работы туристической фирмы с методом подсчета стоимости поездки
из расчета: количества человек * количество дней * тариф страны.
Создать экземпляр объекта turkeyTour со значениями свойств. Вывести все свойства объекта на экран.
Метод объекта расчет создавать на основе функции.*/
function Employee(name, department, phone, salary) {
  this.name = name;
  this.department = department;
  this.phone = phone;
  this.salary = salary;
  this.show = function () {
    console.log("Employee`s data");
    console.log("Name: " + name);
    console.log("Department: " + department);
    console.log("Phone: " + phone);
    console.log("Salary: " + salary);
  }
}

var employee = new Employee("Dan", "Marketing", "0672906756", 5000);
console.log(employee);

employee.address = "A BB 35";
console.log(employee);

var employee1 = new Employee("Cad", "Marketing", "0672906765", 3000);
employee1.show();

function count(numberPerson, numberDays, crate) {
  return numberPerson * numberDays * crate;
}
function Tour(numberOfPerson, numberOfDays, countryRate) {
  this.numberOfPerson = numberOfPerson;
  this.numberOfDays = numberOfDays;
  this.countryRate = countryRate;
  var countPrice = count(numberOfPerson, numberOfDays, countryRate);
  this.show = function () {
    console.log("Tour");
    console.log("numberOfPerson: " + numberOfPerson);
    console.log("numberOfDays: " + numberOfDays);
    console.log("countryRate: " + countryRate);
    console.log("countPrice: " + countPrice);
  }
}

var turkeyTour = new Tour(2, 300, 100);
turkeyTour.show();