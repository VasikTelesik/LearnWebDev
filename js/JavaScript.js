"use strict";


/* let typeOfDate_1 = true;
let typeOfDate_2 = String (typeOfDate_1);
console.log (`typeOfDate_1: ${typeof (typeOfDate_1)}`);
console.log(`typeOfDate_2: ${typeof (typeOfDate_2)}`);

            let someText = 21;
            let fromTextToNumber = String(someText);
            console.log(`someText: ${typeof (someText)}`);
            console.log(`fromTextToNumber ${typeof (fromTextToNumber)}`);

let fromNumberToBoolean = Boolean(someText);
console.log (`fromNumberToBoolean ${typeof (fromNumberToBoolean)}`);


 let aNumber = Number(`${"10" / "2"}`);
 console.log (aNumber);
 console.log (typeof aNumber);
 
let difTypes = null < 1;
console.log (difTypes); 
console.log (Number (difTypes));

let a = 0;
console.log (Boolean(a));

let b = "0";
console.log (Boolean (b));

console.log (Number (a === b));

let textone = "hello, \n0 Vasya";
console.log (textone);

console.log (true > false);
 let isBoss = confirm("Are you a boss here?");
 console.log (isBoss);

 let age = prompt("How old are you?", "enter your age");
 console.log (`Yor are ${age}`);



if (age >= 18) {
    console.log ("Now you are free");
    } else if (age < 18 ) {
        console.log ("Not free");
    } else {
        console.log ("are you a human?");
    }

    let result;

    let a1 = Number(prompt("Введите число", "enter the number here"));
    let b1 = Number(prompt("Введите число", "enter the number here"));

   (a1 + b1 < 4) ? result = "Мало" : result = "Много"; 

   console.log (result); */

   // Проверка что находится в диапазоне 

   /* let age2 = +prompt("enter your age", 0);

   if (age2 >= 14 && age2 <=90) {
       alert(age2);
   } */

   //let age3 = +prompt("enter your age", 0);
   //if (age3 < 14 || age3 > 90) {
   //alert(age3);}


   // ПРоверка логина

   /* let isAdmin = prompt("Кто ты?", "");

   if (isAdmin == "Админ" || isAdmin == "админ" || isAdmin == "Admin" || isAdmin == "admin"  ) {
       let pass = prompt("Пароль?", ""); 

            if (pass == "Я главный" || pass == "я главный" || pass == "I'am CEO, Bitch" ) {
                alert ("Здравствуйте!");

            } else if (pass == null || pass == "" || pass == 0 || pass == false) {
                alert ("Отменено");
            } else {
                alert ("Неверный пароль");
            }
   } else if (isAdmin == null || isAdmin == "" || isAdmin == 0 || isAdmin == false) {
        alert ("Отменено");

   } else  {
        alert ("I don't know you");
   }
*/
   // while, do...while, for 


   let counter = +prompt("enter the number", "");
   while (counter <= 10) {
       console.log (counter + "/n");
       counter++;
   }

   let chapters = +prompt("enter", "");

   for (let i = 1; i<=chapters; i++) {
        console.log (`${i}. CHAPTER\n`);
   }





















   

    















