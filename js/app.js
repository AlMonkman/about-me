'use strict';

let user = prompt('What is your name?');
alert('Welcome to my page ' + user + '!');
alert('Please answer the following questions with either yes or no.');

let total = 0

// question 1

let answerOne = prompt('Is my name Alan?').toLowerCase();

if (answerOne === 'yes' || answerOne === 'y') {
  // console.log('yes');
  alert('Yeah! How\'d you know?');
  total = total + 1;
}
else if (answerOne === 'no' || answerOne === 'n') {
  // console.log('no');
  alert('Sorry but my name is Alan!');
}
else {
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 2

let answerTwo = prompt('Am I from Washington?').toLowerCase();

if (answerTwo === 'yes' || answerTwo === 'y') {
  // console.log('yes');
  alert('Yeah! I am a true Washingtonian.');
  total = total + 1;
}
else if (answerTwo === 'no' || answerTwo === "n") {
  // console.log('no');
  alert('Sorry! Washington is where I call home.');
}
else {
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 3

let answerThree = prompt('Was my last job at USPS?').toLowerCase();

if (answerThree === 'yes' || answerThree === 'y') {
  // console.log('yes');
  alert('Thats correct! I just left the post office a couple weeks ago.');
  total = total + 1;
}
else if (answerThree === 'no' || answerThree === 'n') {
  // console.log('no');
  alert('Actually my last job was with USPS!');
}
else {
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 4

let answerFour = prompt('Have I been to Vietnam?').toLowerCase();

if (answerFour === 'yes' || answerFour === 'y') {
  // console.log('yes');
  alert('Yeah! Vietnam was a very beautiful place to visit.');
  total = total + 1;
}
else if (answerFour === 'no' || answerFour === 'n') {
  // console.log('no');
  alert('Sorry but I actually spent a month in Vietnam!');
}
else {
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}

// question 5

let answerFive = prompt('Did I graduate from Inglemoor High School?').toLowerCase();

if (answerFive === 'yes' || answerFive === 'y') {
  // console.log('yes');
  alert('That is correct ' + user + '!');
  total = total + 1;
}
else if (answerFive === 'no' || answerFive === 'n') {
  // console.log('no');
  alert('Wrong answer ' + user + '.');
}
else {
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}


// question 6

let myNumber = 17;
let Guesses = 4;

while (Guesses !== 0) {
  let answerSix = prompt('Alright, ' + user + ' I want you to pick a number from 1 through 27.');

  if (answerSix < myNumber) {
    Guesses--;
    alert('Too low!');
  }

  if (answerSix > myNumber) {
    Guesses--;
    alert('Too high!');
  }

  if (+answerSix === myNumber) {
    alert('Wow! Good job, that\'s exactly the number I was thinking.');
    total = total + 1;
    break;
  }

  if (Guesses === 0) {
    alert('Good try! My number was actually 17');
  }

}

// question 7

let myArr = ['mango', 'banana', 'cantaloupe'];

let fruitGuess = 6;

while(fruitGuess !== 0) {
  let answerSeven = prompt('Hey ' + user + ' can you guess what some of my favorite fruits are?').toLowerCase();

  for(let i = 0; i < myArr.length; i++) {

    if (answerSeven === myArr[i]) {
      alert('Yes! ' + answerSeven + '\'s are one of my favorites!');
      total = total + 1;
      fruitGuess = 1;
      break;
    }
  }
  fruitGuess--;
}
alert('Mango\'s, Banana\'s, and Cantaloupe\'s are my favorite fruits!');

alert('Great job ' + user + ' ! You got ' + total + ' correct.');

