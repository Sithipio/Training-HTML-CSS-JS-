// Однорядковий коментар
/* Багатостроковий 
		коментар */
		
// В JavaScript є 9 різних типів даних, а саме: undefined , null , boolean , string , symbol , number, object, bigInt, function

// Оголошення змінної
var myName = 0;

//Оператор привласнення
var a = 7;
var b = a;
var c = "I am a";
/* Коли оголошено змінні JavaScript, вони мають початкове значення undefined. Якщо виконувати математичну операцію з undefined змінною, результат буде NaN, що означає «Not a Number» */

//У JavaScript всі змінні та імена функцій чутливі до регістру
/* Краща практика використовувати camelCase. У camelCase імена змінних з кількома словами мають перше слово в нижньому регістрі, а перша літера кожного наступного слова велика */
var someVariable;
var anotherVariableName;
var thisVariableNameIsSoLong;

//JavaScript використовує символ + як операцію додавання при розміщенні між двома числами
var sum = 10 + 10;

//JavaScript використовує символ - як операцію віднімання при розміщенні між двома числами
var difference = 45 - 33;

//JavaScript використовує символ * як операцію множення при розміщенні між двома числами
var product = 8 * 10;

//JavaScript використовує символ / як операцію ділення при розміщенні між двома числами
var quotient = 66 / 33;

//Збільшення числа
// i++ - еквівалентно виразу i = i + 1
/* Два знаки можна ставити не тільки після змінної, але і перед змінною. Різниця у цьому, що у першому випадку змінна змінюється, але повертається її старе значення, тоді як у другому випадку повертається відразу нове значення. Нижче приклад: */
	// Створюємо змінну зі значенням 1
   var d = 1;
   d++; // Значення 1
   d === 2; // true Тут уже значення 2, тому що це вже наступна операція
    // Створюємо змінну зі значенням 1
   var f = 1;
   ++f; // Значення 2
   f === 2; // Тут у будь-якому разі вже змінена змінна
// Це матиме значення у момент порівняння. Приклад:
     // Створюємо змінну зі значенням 1
   var e = 1;
   e++ === 2; // false, оскільки хоч значення змінної і змінилося, ми отримали її старе значення
     // Створюємо змінну зі значенням 1
   var r = 1;
   ++r === 2; // true, тому що тут ми одразу набули нового значення.

// Ідентично збільшенню числа працює зменшення числа 
var myVar = 11;
myVar--;

//Створення десяткових чисел
var myDecimal = 5.7;

//Множення дробових чисел
var product = 2.0 * 2.5;

//Ділення десяткових чисел
var quotient = 4.4 / 2.0;

//Пошук залишку
//Оператор залишку % дає залишок від поділу двох чисел
var remainder= 11%3;

//Існують оператори, які виконують як математичну операцію, так і призначення за один крок. Одним із таких операторів є оператор +=, -=, *=, /=
//Присвоєння з розширеним додаванням +=
var k = 3;
var p = 17;
var m = 12;
k+=12;
p+=9;
m+=7;

//Присвоєння з розширеним відніманням -=
var z = 11;
var w = 9;
var v = 3;
z-=6;
w-=15;
v-=1;

//Присвоєння з розширеним множенням *=
var aa = 5;
var bb = 12;
var cc = 4.6;
aa*=5;
bb*=3;
cc*=10;

//Присвоєння з розширеним діленням /=
var ff = 48;
var kk = 108;
var rr = 33;
ff/=12;
kk/=4;
rr/=11;

//Оголошення рядкових змінних
var firstName = "Alan";
var lastName = "Turing";

//Екранування лапок у рядках
/*
Коли визначається рядок, оголошення повинне починатися та закінчуватися одинарною або подвійною лапками. Для того, щоб використотувати лапку в середині рядка потрібно екранувати лапку, поміщаючи зворотну косу межу (\) перед нею. Це сигналізує JavaScript, що наступна лапка не є кінцем рядка, а просто частина рядка
*/
var myStr = "I am a \"double quoted\" string inside \"double quotes\".";

//Значення рядків у JavaScript можуть бути записані з одинарними або подвійними лапками, якщо починати і закінчувати одним і тим же типом лапок
const doubleQuoteStr = "Це рядок";
const singleQuoteStr = 'Це також рядок';
//В рядку можна використовувати різні типи кавичок. Приклад:
 const conversation = 'Finn exclaims to Jake, "Algebraic!"';
 var myStr = '<a href="http://www.example.com" target="_blank">Link</a>';

/* Спецсимволи, що екрануються в рядках:
	\'  одиночна цитата
	\"  подвійна цитата
	\\  зворотний слеш
	\n  нова лінія
	\r  повернення каретки
	\t  табуляція
	\b  повернення на одну позицію (backspace)
	\f  форма
*/
var myStr ="FirstLine\n\t\\SecondLine\nThirdLine";

//У JavaScript, коли оператор + використовується з рядком, він називається оператором конкатенації та виконує функцію об'єднання рядків
var myStr = "This is the start. " + "This is the end.";

//Також можна використовувати оператор += для конкатенації рядка в кінець існуючої рядкової змінної. Це може бути дуже корисно для розбиття довгого рядка на кілька рядків
var myStr = "This is the first sentence. ";
myStr += "This is the second sentence.";

// Створення рядка зі змінними
var ourName = "Architect";
var ourStr = "Hello, our name is " + ourName + ", you in the Matrix?";

//Додавання значень змінних до рядків
var someAdjective = "fun";
var myStr = "Learning to code is ";
myStr += someAdjective;

//Знаходження довжини рядка
//Можна знайти довжину рядка, написавши .length після рядкової змінної або рядкового літералу
lastNameLength = lastName.length;

//Використання квадратних дужок для пошуку символів в рядку
//Bracket notation (Скобкова нотація) - це спосіб отримати символ з певним індексом усередині рядка або елемент масиву в масиві
firstLetterOfLastName = lastName[0];
//В JavaScript, відлік починається не з 1, а з 0. Це називається індексацією на основі нуля
//Порядок обчислення індексів починається з нуля, але кількість символів у рядку рахується з одиниці
const str = "one";
str[0] = "o";
str[1] = "n";
str[2] = "e";
str.length === 3;

//Розуміння незмінності рядків
//У JavaScript значення рядків незмінні, а це означає, що вони не можуть бути змінені після створення. Наприклад, наступний код:
var myStr = "Bob";
myStr[0] = "J";
//не може змінити значення myStr на Job, тому що вміст myStr не може бути змінено. Це не означає, що значення змінної myStr не можна змінити. Не можна змінити окремі символи рядка. Але можна змінити в цілому значення змінної myStr, якщо надати їй нове значення, наприклад:
var myStr = "Bob";
myStr = "Job";

//Використання квадратних дужок для пошуку останнього символу у рядку
//Щоб отримати останню літеру рядка, потрібно відняти 1 із довжини цього рядка
var lastLetterOfLastName = lastName[lastName.length - 1];

//Також можна використовувати той же принцип для отримання останнього символу в рядку, щоб отримати певний символ з кінця рядка
var secondToLastLetterOfLastName = lastName[lastName.length - 2];

//Зберігання кількох значень в одній змінній за допомогою масивів (змінні типу Array)
var myArray = ["Hello", 42, "this", "is", "some", "Array"];

//Вкладеність одного масиву в іншому масиві - багатовимірний масив
var myArray = [["multidimensional", "array"], ["how", "awesome"]];

//Доступ до даних масиву, використовуючи індекси
//Ми можемо отримати доступ до даних всередині масивів за допомогою індексів. Індекси масивів пишуться у квадратних дужках так само, як і в рядках. Різниця лише тому, що у рядках через індекси отримуємо символи цих рядків, а масивах отримуємо елементи цих масивів (елементи може бути будь-яких типів, зокрема й іншими масивами). Подібно до рядків, масиви використовують індексування з нульовим індексом, тому першим елементом у масиві є елемент з індексом 0
var array = [50,60,70];
array[0]; // рівно 50
var data = array[1]; // рівно 60 

//Зміна даних масиву за допомогою індексів
//На відміну від рядків, записи масивів змінюються та можуть бути змінені вільно
var ourArray = [50,40,30];
ourArray[0] = 15; // рівно [15, 40, 30]

//Доступ до багатовимірних масивів за допомогою індексів
//Використовуючи дужки для доступу до масиву, перший набір дужок посилається на записи в масиві зовнішнього (першого рівня), а кожна додаткова пара дужок посилається на наступний рівень записів всередині масиву
var arr = [[1,2,3], [4,5,6], [7,8,9], [[10,11,12], 13, 14]]; 
arr[3]; // рівно [[10,11,12], 13, 14]
arr[3][0]; // рівно [10,11,12]
arr[3][0][1]; // рівно 11

//Зміна масивів за допомогою методу Array.prototype.push()
//Простим способом додавання даних до кінця масиву є метод Array.prototype.push()
var arr = [1,2,3];
arr.push(4); // arr тепер [1,2,3,4]
var ourArray = ["Stimpson", "J", "cat"];
ourArray.push(["happy", "joy"]);
// ourArray рівний ["Stimpson", "J", "cat", ["happy", "joy"]]

//Зміна масивів за допомогою методу Array.prototype.pop()
//.pop() використовується для того, щоб "висмикнути" (видалити) останній елемент масиву. Є можливість зберігати це значення "висмикненого" (видаленого) елемента, надавши його змінній
var threeArr = [1, 4, 6];
var oneDown = threeArr.pop();
console.log(oneDown); // Returns 6 
console.log(threeArr); // Returns [1, 4]

//Зміна масивів за допомогою методу Array.prototype.shift()
//.shift працює аналогічним чином, як .pop, але видаляє не останній елемент масиву, а перший
var ourArray = ["Stimpson", "J", ["cat"]];
var removedFromOurArray = ourArray.shift();
// removedFromOurArray now equals "Stimpson" and ourArray now equals ["J", ["cat"]]

//Метод .unshift() працює так само, як .push(), але замість додавання елемента в кінці масиву .unshift() додає елемент на початку масиву
var ourArray = ["Stimpson", "J", "cat"];
ourArray.shift(); // ourArray now equals ["J", "cat"]
ourArray.unshift("Happy");
// ourArray now equals ["Happy", "J", "cat"]

//Створення багаторазово використовуваних функцій
//Функції - багаторазово використовувані блоки
function functionName() {
   console.log ("Hello World");
}
//Викликається або виконується функція, використовуючи її ім'я, за якою слідують дужки
functionName();
//Щоразу, коли функція викликається, виконується прописаний у ній код (всередині фігурних дужок)

//Передача значень функції з аргументами
//Параметри (або аргументи) – це змінні, які діють як заповнювачі для значень, які мають бути введені у функцію під час її виклику
//Фактичні значення, які вводяться (або «передані») у функцію під час її виклику, називаються аргументами. Ось функція з двома аргументами param1 та param2 :
function testFun(param1, param2) {
   console.log(param1, param2);
}
//Потім ми можемо викликати функцію testFun з передачею до неї аргументів:
testFun("Hello", "World");
//Ми передали два аргументи: "Hello" та "World". Усередині функції param1 дорівнюватиме "Hello", а param2 дорівнюватиме "World". Зверніть увагу, що ви можете знову викликати testFun з іншими аргументами і параметри будуть приймати значення нових аргументів
function functionWithArgs (a, b) {
console.log(a + b)
}
functionWithArgs (1,2); //output 3
functionWithArgs (7,9); // output 16

//Глобальна область видимості та функції
//Змінні, визначені поза функціональним блоком, мають глобальну область. Це означає, що їх можна побачити всюди у JavaScript-коді. Змінні, які використовуються без ключового слова var, автоматично створюються у глобальній області видимості. Завжди потрібно оголошувати змінні за допомогою var, let чи const залежно від ситуації

//Змінні, оголошені всередині функції та параметри функції мають локальну область видимості. Це означає, що вони помітні лише всередині цієї функції. Ось функція myTest з локальною змінною loc:
function myTest () {
  var loc = "foo";
  console.log(loc);
}
myTest (); // logs "foo"
console.log(loc); // Error: loc не визначений

//Глобальна та локальна область видимості у функціях
//Можна мати як локальні, і глобальні змінні з тим самим ім'ям. Локальна змінна має пріоритет над глобальною змінною. У цьому прикладі:
var someVar = "Hat";
function myFun() {
   var someVar = "Head";
   return someVar;
}
myFun(); // Head
//функція myFun поверне "Head" тому що є локальна версія змінної

//Передача значення у функцію з аргументами. Для цього можна використовувати оператор return, щоб повернути результат виконання функції
function timesFive (num) {
  return num * 5;
}
console.log(timesFive(5)); // should return 25
console.log(timesFive(2)); // should return 10
console.log(timesFive(0)); // should return 0

//Розуміння невизначеного значення, що повертається функцією
//Функція може включати оператор return, але це не обов'язково. У випадку, якщо функція не має оператора return, коли вона викликається, функція обробляє внутрішній код, але значення, що повертається, є undefined (тобто не визначено)
var sum = 0;
   function addSum(num) {
     sum = sum + num;
   }
   var receivedValue = addSum(3); // сума буде змінена, але значення, що повертається, не визначено

//Черги
//У інформатиці черга являє собою абстрактну структуру даних, у якій елементи зберігаються у порядку. Нові елементи можуть бути додані до кінця черги, а старі елементи витягуються з початку черги.
// Завдання. Напишіть функцію nextInLine, яка приймає масив arr та число item як аргументи. Додайте число item до кінця масиву, потім видаліть перший елемент масиву. Потім функція nextInLine повинна повернути видалений елемент.
function nextInLine(arr, item) {
	arr.push(item);
  return arr.shift();
}
var testArr = [1,2,3,4,5];
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//Використання умовної логіки з виразами if
function test (myCondition) {
  if (myCondition) {
    return "It was true";
  }
  else {
  return "It was false";
  }
}
test(true); // "It was true"
test(false); // "It was false"

//Порівняння з використанням оператора рівності
function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}
//Щоб JavaScript міг порівнювати значення різних типів даних (наприклад, Number і String), він має перетворювати один тип на інший. Це називається "Типовий примус". Однак, як тільки це станеться, він може порівняти їх так:
1 == 1 // true
1 == 2 // false
1 == '1' // true
"3" == 3 // true 

//Порівняння з використанням оператора суворої рівності
//Сувора рівність ( === ) є аналогом оператора рівності ( == ). Однак, на відміну від оператора рівності, який намагається перетворити обидва значення на загальний тип, строгий оператор рівності не виконує перетворення типу. Якщо значення, що порівнюються, мають різні типи, вони вважаються нерівними, а оператор строгої рівності повертає false
3 === 3 // true
3 == '3' // повертає true, тому що JavaScript виконує перетворення типів з рядка в число
3 === '3' // повертає false, тому що типи різні, і перетворення типів не виконується

//У JavaScript можна визначити тип змінної або значення за допомогою оператора typeof наступним чином:
typeof 3 // повертає 'number'
typeof '3' // повертає 'string'

//Порівняння з оператором нерівності
//Оператор нерівності ( != ) є протилежним оператору рівності. Це означає "Не рівно" і повертає false коли рівність поверне true і навпаки. Як і оператор рівності, оператор нерівності перетворюватиме типи даних значень при порівнянні
1 != 2 // true
1 != "1" // false
1 != '1' // false
1 != true // false
0 != false // false 

//Порівняння з оператором суворої нерівності
//Оператор суворої нерівності (!==) є логічною протилежністю оператора суворої рівності. Це означає "суворо не рівно" і повертає false коли сувора рівність поверне true і навпаки. Сувора нерівність не перетворюватиме типи даних
3 !== 3 // false
3 !== '3' // true
4 !== 3 // true 

//Порівняння з оператором "Більш ніж"
//Як і оператор рівності, оператор "Більше ніж" перетворює типи даних при порівнянні
5 > 3 // true
7 > '3' // true
2 > 3 // false
'1' > 9 // false 

//Порівняння з оператором "Більш чи рівно"
//Подібно до оператора рівності, оператор Більш чи рівно буде перетворювати типи даних при порівнянні
6 >= 6 // true
7 >= '3' // true
2 >= 3 // false
'7' >= 9 // false 

//Порівняння з оператором "Менше ніж"
//Як і оператор рівності, оператор менше ніж перетворює типи даних при порівнянні
2 < 5 // true
'3' < 7 // true
5 < 5 // false
3 < 2 // false
'8' < 4 // false 

//Порівняння з оператором "Менше або одно"
//так само як і оператор рівності, Менше або рівно перетворює типи даних
4 <= 5 // true
'7' <= 7 // true
5 <= 5 // true
3 <= 2 // false
'8' <= 4 // false 

//Порівняння з оператором "І"
if (num > 5) {
   if (num < 10) {
     return "Yes" ;
   }
}
// else
return "No";
//буде повертатися true тільки тоді, коли num більше 5 і менше 10. Та ж логіка може бути записана як:
if (num > 5 && num < 10) {
   return "Yes";
}
// else
return "No";

//Порівняння з оператором "Або"
if (num > 10) {
   return "No";
}
if (num < 5) {
   return "No";
}
// else
return "Yes";
//поверне "Yes" тільки в тому випадку, якщо значення num знаходиться між 5 та 10 (включаючи 5 та 10). Та ж логіка може бути записана як:
if (num > 10 | | num < 5) {
   return "No";
} return "Yes";

//Умова else if
if (num > 15) {
  return "Bigger than 15";
} 
else if (num < 5) { 
  return "Smaller than 5"; 
} 
else { 
  return "Between 5 and 15"; 
}

//Декілька умов else if
function testSize(num) {
if (num < 5) {
  return "Tiny";
}
else if (num < 10) {
  return "Small";
}
else if (num < 15) {
  return "Medium";
}
else if (num < 20) {
  return "Large";
}
else if ("Huge") {
  return "Huge";
}
  return "Change Me";
}

//Гольф-код
//У грі в гольф кожна лунка має par (номінал), що означає середню кількість strokes (ударів), виконати які, ймовірно, необхідно гравцеві, щоб виграти гру. Залежно від того, наскільки вище або нижче par кількості strokes гравця, результату присвоюється те чи інше прізвисько
/* 
strokes			result
1				"Hole-in-one!"
<= par - 2		"Eagle"
par - 1			"Birdie"
par				"Par"
par + 1			"Bogey"
par + 2			"Double Bogey"
>= par + 3		"Go Home!"
*/
var names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];
function golfScore(par, strokes) {
if (strokes === 1) {
  return names[0];
}
  else if (strokes <= par -2) {
    return names[1];
  }
    else if (strokes === par-1) {
      return names[2];
    }
      else if (strokes === par) {
        return names[3];
      }
        else if (strokes === par + 1) {
          return names[4];
        }
          else if (strokes === par +2) {
            return names[5];
          }
            else if (strokes >= par + 3) {
              return names[6];
            }

  return "Change Me";
}
golfScore(5, 4);

//Вибір багатьох варіантів за допомогою операторів switch
switch(lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
//Умови case перевіряються із суворою рівністю ( === ). Оператор break вказує на JavaScript, що слід припинити всі подальші перевірки. Якщо break відсутній, буде виконано наступний оператор
function caseInSwitch(val) {
  var answer = "";
  switch (val) {
    case 1:
      answer = "alpha";
      break;
    case 2:
      answer = "beta";
      break;
    case 3:
      answer = "gamma";
      break;
    case 4:
      answer = "delta";
      break;
  }
  return answer;
}
caseInSwitch(1);

//Додавання опції default в операторі switch
switch (num) {
   case value1:
     statement1;
     break;
   case value2:
     statement2;
     break;
     // ...
   default:
     defaultStatement;
     break; // Тут break не обов'язковий, але засоби перевірки коду можуть скаржитися на його відсутність
}
//В операторі switch може бути недоцільно вказувати всі можливі значення в якості операторів case (їх може бути просто дуже багато). Замість цього можна додати оператор default, який буде виконуватися, якщо не знайдено співпадаючим операторів case. Оператор default має бути останньою умовою
function switchOfStuff(val) {
  var answer = "";
switch (val) {
  case "a":
  return "apple";
  break;
  case "b":
  return "bird";
    break;
  case "c":
  return "cat"
    break;;
  default:
  return "stuff";
  break;
}
  return answer;
}
switchOfStuff(1);

//Декілька ідентичних параметрів в операторах switch
//Якщо у конструкції switch оператор break не вказаний в операторі case, наступний(і) оператор(и) case виконуються доти, доки не буде виявлено break або кінець конструкції switch. Якщо у вас кілька входжень з тим самим виходом, ви можете представити їх в інструкції switch наступним чином:
let result = "";
switch(val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
} 
function sequentialSizes(val) {
  var answer = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    return answer = "Low";
    break;
  case 4:
  case 5:
  case 6:
  return answer = "Mid";
  break;
  case 7:
  case 8:
  case 9:
  return answer = "High";
  break;
}
  return answer;
}
sequentialSizes(1);

//Рахуємо карти
/*
Змінити рахунок
+1 		2, 3, 4, 5, 6
0		7, 8, 9
-1 		10, 'J', 'Q', 'K', 'A'
Напишіть функцію підрахунку карток. Вона отримає параметр card, який може бути числом або рядком, та збільшувати або зменшувати глобальну змінну count відповідно до значення карти (див. таблицю вище). Потім функція поверне рядок з поточним лічильником і рядком (Bet якщо лічильник позитивний або Hold якщо лічильник дорівнює нулю або негативний). Поточний лічильник і рішення гравця (Bet або Hold) повинні бути розділені одним пробілом
*/
var count = 0;
function cc(card) {
switch(card) {
  case 2: case 3: case 4: case 5: case 6:
  count++; break;
  case 7: case 8: case 9:
  count = count; break;
  case 10: case 'J': case 'Q': case 'K': case 'A':
  count--; break;
}
if (count > 0) {
  return count + " " + "Bet";
} else {
  return count + " " + "Hold";
}
}
cc(2); cc(3); cc(7); cc('K'); cc('A');

//Створення об'єктів JavaScript
//Об'єкти схожі на масиви, за винятком того, що замість використання індексів для доступу та зміни їх даних ви отримуєте доступ до даних в об'єктах через так звані властивості. За великим рахунком, структуру об'єкта можна описати як Ключ-Значення. Тобто, щоб отримати з об'єкта значення певної властивості, треба використовувати ключ цієї властивості (або інакше ім'я)
var cat = {
  name: "Whiskers",
  legs: 4,
  tails: 1,
  enemies: ["Water", "Dogs"]
};
//Всі імена властивостей в об'єктах автоматично наводяться до типу рядок. Можна опустити лапки для рядкових імен властивостей якщо ці імена не містять пробілів та інших спецсимволів

//Існують два способи доступу до властивостей об'єкта: dot notation (через точку .) and bracket notation (через квадратні дужки [], як у випадку з масивами)
//Доступ до властивостей об'єкта через точку
var testObj = {
  "hat": "ballcap",
  "shirt": "jersey",
  "shoes": "cleats"
};
var hatValue = testObj.hat; 
var shirtValue = testObj.shirt;

//Доступ до властивостей об'єкта за допомогою дужок
//Другий спосіб доступу до властивостей об'єкта – це скобкова нотація ([]). Якщо властивість об'єкта, до якого ви намагаєтесь отримати доступ, має пробіл у своєму імені, вам потрібно буде використовувати нотацію у вигляді дужок. Тим не менш, ви все одно можете використовувати точкову нотацію для доступу до властивостей без пробілів
const myObj = {
"Space Name": "Kirk",
"More Space": "Spock",
"NoSpace": "USS Enterprise"
};
myObj["Space Name"];
myObj['More Space'];
myObj["NoSpace"];

//Доступ до властивостей об'єктів через змінні
//Ще одне використання скобкової нотації для об'єктів – це доступ до властивості, що зберігається як значення змінної
const dogs = {
  Fido: "Mutt",
  Hunter: "Doberman",
  Snoopie: "Beagle"
};
const myDog = "Hunter";
const myBreed = dogs[myDog];
console.log(myBreed);
//Іншим способом використання цієї концепції – це формування імені властивості динамічно під час виконання програми
const someObj = {
  propName: "John"
};
function propPrefix(str) {
  const s = "prop";
  return s + str;
}
const someProp = propPrefix("Name"); // return "propName"
console.log(someObj[someProp]); 

//Додавання нових властивостей до об'єкта JavaScript
var ourDog = {
  "name": "Camper",
  "legs": 4,
  "tails": 1,
  "friends": ["everything!"]
};
ourDog.bark = "bow-wow";

//Видалення властивостей з об'єкта JavaScript за допомогою оператора delete
const ourDog = {
    "name": "Camper",
    "legs": 4,
    "tails": 1,
    "friends": ["everything!"],
    "bark": "bow-wow"
  };
  delete ourDog.bark;
  
//Використання об'єктів для пошуку
//Об'єкти можна розглядати як сховище ключів/значень, наприклад як словник. Якщо є табличні дані, можна використовувати для пошуку об'єкт, а не оператор switch або ланцюжки if/else. Це найбільш корисно, коли відомо, що вхідні дані обмежені певним діапазоном
const alpha = {
  1:"Z",
  2:"Y",
  3:"X",
  4:"W",
  // ...
  24:"C",
  25:"B",
  26:"A"
};
alpha[2]; // Y
alpha[24]; // C
const value = 2;
alpha[value]; // Y

function phoneticLookup(val) {
  var result = "";
  var lookup = {
  "alpha": "Adams",
  "bravo": "Boston",
  "charlie": "Chicago",
  "delta": "Denver",
  "echo": "Easy",
  "foxtrot": "Frank"
  };
result = lookup[val];
  return result;
}
phoneticLookup("charlie");

//Перевірка наявності властивостей в об'єкті
//Іноді корисно перевірити, чи існує властивість даного об'єкта чи ні. Ми можемо використовувати метод об'єктів .hasOwnProperty(propname) для визначення того, чи має цей об'єкт зазначене ім'я властивості. .hasOwnProperty() повертає true або false якщо властивість знайдена чи ні
const myObj = {
  top: "hat",
  bottom: "pants"
};
myObj.hasOwnProperty("top"); // true
myObj.hasOwnProperty("middle"); // false

//Маніпулювання складними об'єктами
var myMusic = [
  {
    "artist": "Billy Joel",
    "title": "Piano Man",
    "release_year": 1973,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": true
  },
  {
    "artist": "Grandson",
    "title": "Blue/Water",
    "release_year": 2003,
    "formats": [
      "CD",
      "8T",
      "LP"
    ],
    "gold": false
  }
];

//Доступ до вкладених об'єктів
const ourStorage = {
  "desk": {
  "drawer": "stapler"
  },
  "cabinet": {
  "top drawer": {
  "folder1": "a file",
  "folder2": "secrets"
  },
  "bottom drawer": "soda"
  }
  }; 
  ourStorage.cabinet["top drawer"].folder2;
  ourStorage.desk.drawer;
  
//Доступ до вкладених масивів
const ourPets = [
  {
    animalType: "cat",
    names: [
      "Meowzer",
      "Fluffy",
      "Kit-Cat"
    ]
  },
  {
    animalType: "dog",
    names: [
      "Spot",
      "Bowser",
      "Frankie"
    ]
  }
];
ourPets[0].names[1]; // Fluffy
ourPets[1].names[0]; // Spot

//Колекція записів
/*
Напишіть функцію updateRecords, яка приймає id альбом (наприклад, 2548 ), властивість prop (наприклад, artist або tracks ) та value (наприклад, Addicted to Love ) для зміни даних у цій колекції.
Ваша функція завжди повинна повертати весь об'єкт collection.
Якщо prop не є tracks, а value не порожнім ( "" ), оновіть або встановіть value для властивості prop цього альбому.
Якщо prop є tracks, але альбом не має властивості tracks, створіть порожній масив перед додаванням нового значення у відповідну властивість альбому.
Якщо prop - це tracks а value не пусто ( " " ), додайте value до кінця існуючого масиву tracks.
Якщо значення порожнє ( " " ), видаліть цю властивість prop з альбому.
*/
// Setup
var collection = {
  2548: {
    album: "Slippery When Wet",
    artist: "Bon Jovi",
    tracks: [
      "Let It Rock",
      "You Give Love a Bad Name"
    ]
  },
  2468: {
    album: "1999",
    artist: "Prince",
    tracks: [
      "1999",
      "Little Red Corvette"
    ]
  },
  1245: {
    artist: "Robert Palmer",
    tracks: [ ]
  },
  5439: {
    album: "ABBA Gold"
  }
};
// Only change code below this line
function updateRecords(id, prop, value) {
  if (prop !== "tracks" && value !== ""){
    collection[id][prop] = value;
  } else if (prop === "tracks" && !collection[id][prop]){
    collection[id][prop] = [value];
  } else if (prop === "tracks" && value !== "") {
    collection[id][prop].push(value);
  } else if (value === "") {
    delete collection[id][prop];
  }
  return collection;
}
// Alter values below to test your code
updateRecords(5439, "artist", "ABBA");

//Ітерації з використанням циклу while
const ourArray = [];
let i = 0;
while (i < 5) { 
  ourArray.push(i); 
  i++; 
}

//Ітерації з використанням циклу for
//При виклику оператора for вказуються три необов'язкові вирази, розділені точкою з комою: for ([initialization]; [condition]; [final-expression])
const ourArray = [];
for (let i = 0; i < 5; i++) { 
  ourArray.push(i); 
}

//Перерахування непарних чисел з використанням циклу for
const ourArray = [];
for (let i = 0; i < 10; i += 2) { 
  ourArray.push(i); 
} 

//Зворотний відлік з використанням циклу for
const ourArray = [];
for (let i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

//Перерахування масивів за допомогою циклу for
const arr = [10, 9, 8, 7, 6];
for (let i = 0; i < arr.length; i++) { 
  console.log(arr[i]); 
}
var myArr = [ 2, 3, 4, 5, 6];
var total = 0;
for (var i = 0; i < myArr.length; i++) {
  total += myArr[i];
}

//Вкладені цикли for
const arr = [
  [1, 2], 
  [3, 4], 
  [5, 6]
];
for (let i = 0; i < arr.length; i++) { 
  for (let j=0; j < arr[i].length; j++) { 
    console.log(arr[i][j]); 
  } 
}
function multiplyAll(arr) {
  var product = 1;
  for (var i = 0; i < arr.length; i++) {
    for (var j = 0; j < arr[i].length; j++) {
        product *= arr[i][j];      
      }
  }
  return product;
}
    multiplyAll([
      [1, 2],
      [3, 4],
      [5, 6, 7]
]);

//Цикли do...while
const ourArray = [];
  let i = 0;
  do {
    ourArray.push(i);
    i++;
  } while (i < 5);
//Основну різницю між циклами while та do...while можна позначити так: перший тип циклів while може не виконати жодної ітерації, якщо умова не виконується ніколи, а ось другий тип циклів do..while навпаки, обов'язково виконається хоч один раз навіть якщо умова ніколи не буде істинною
