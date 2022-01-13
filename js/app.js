'use strict';

let user = prompt('What is your name?');
alert('Welcome to my page ' + user +'!');
alert('Please answer the following questions with either yes or no.');

// question 1

let answerOne = prompt('Is my name Alan?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
  // console.log('yes');
  alert('Yeah! How\'d you know?');
}
else if(answerOne === 'no' || answerOne === 'n'){
  // console.log('no');
  alert('Sorry but my name is Alan!');
}
else{
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 2

let answerTwo = prompt('Am I from Washington?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  // console.log('yes');
  alert('Yeah! I am a true Washingtonian.');
}
else if(answerTwo === 'no' || answerTwo === "n"){
  // console.log('no');
  alert('Sorry! Washington is where I call home.');
}
else{
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 3

let answerThree = prompt('Was my last job at USPS?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  // console.log('yes');
  alert('Thats correct! I just left the post office a couple weeks ago.');
}
else if(answerThree === 'no' || answerThree ==='n'){
  // console.log('no');
  alert('Actually my last job was with USPS!');
}
else{
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 4

let answerFour = prompt('Have I been to Vietnam?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  // console.log('yes');
  alert('Yeah! Vietnam was a very beautiful place to visit.');
}
else if(answerFour === 'no' || answerFour === 'n'){
  // console.log('no');
  alert('Sorry but I actually spent a month in Vietnam!');
}
else{
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 5

let answerFive = prompt('Did I graduate from Inglemoor High School?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  // console.log('yes');
  alert('That is correct ' + user + '!');
}
else if(answerFive === 'no' || answerFive === 'n'){
  // console.log('no');
  alert('Wrong answer ' + user + '.');
}
else{
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}


// question 6

let myNumber = 17;
let Guesses = 4;

while(Guesses !== 0){
  let answerSix = prompt('Alright, ' + user + ' I want you to pick a number from 1 through 27.');

  if(answerSix < myNumber){
  Guesses --;
 alert('Too low!');
}

  if(answerSix > myNumber){
   Guesses --;
   alert('Too high!');
 }

  if(answerSix == myNumber){
   alert('Wow! Good job, that\'s exactly the number I was thinking.');
   break;
 }

 if(Guesses == 0){
  alert('Good try! My number was actually 17');
 }

}
// question 7

let myArr = ['mango', 'banana', 'cantaloupe'];

let fruitGuess = 6;

while(fruitGuess !== 0){
  let answerSeven = prompt('Hey ' + user + ' can you guess what some of my favorite fruits are?').toLowerCase();

  for(let i = 0; i < myArr.length; i++){

    if(answerSeven === myArr[i]){
      alert('Yes! ' + answerSeven + '\'s are one of my favorites!');
      fruitGuess = 1;
      break;
    }
  }
  fruitGuess--;
}
alert('Mango\'s, Banana\'s, and Cantaloupe\'s are my favorite fruits!');





// Array

// let myArr = [1, 'hello', [2,3], true];
// console.log(myArr);
// console.table(myArr);

// console.log(myArr[0]);

// let favBoybands = ['BTS', 'Backstreet boys', 'Nsync'];

// console.table(favBoyBands);

// let arrLength = favBoyBands.length;

// console.log(favBoyBands[favBoyBands.length-1]); accessing the last element

// console.log(arrLength);

// myArr[4] = false; add to array
 
// favBoyBands.push(); will add to end of array

// favBoyBands.pop(); will remove last element from array


// Loops

// For loops
// great for doing something a certain amount of times
// great for iterating through/ over arrays
// i++ means let i = i+1

// for(starting val; condition; increment){
// code block 
// }

//  let students = ['alan', 'bob', 'brady', 'lauren', 'nick', 'jefferey', 'steve']

// for(let i = 0; i < students.length; i++){
// console,log(students[i]);
// if(students[i] === "steve'){
// console.log('hey steve');
// }



// While loops

// while(condition){
// do something 
// }
 
// let myNumber = 3;

// let userNumber = prompt('what number am i thinking of?');

// while(userNumber != myNumber){
// userNumber = prompt('What number am i thinking of?');
// }
// 
//  let clueGuesses = 20;
// let suspect = 'Nicholas';
// let foundSuspect = false;

// while(clueGuesses && !foundSuspect){
// let ourGuess = getRandomStudent();
// console.log('it was ${ourGuess}, in Remo with the candlestick');
// }
