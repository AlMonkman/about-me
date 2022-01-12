'use strict';

let user = prompt('What is your name?');
alert('Welcome to my page ' + user +'!');


let answerOne = prompt('Is my name Alan?').toLowerCase();

if(answerOne === 'yes' || answerOne === 'y') {
  console.log('yes');
}
else if(answerOne === 'no' || answerOne === 'n'){
  console.log('no');
}
else{
  console.log('follow instructions');
}


let answerTwo = prompt('Am I from Washington?').toLowerCase();

if(answerTwo === 'yes' || answerTwo === 'y'){
  console.log('yes');
}
else if(answerTwo === 'no' || answerTwo === "n"){
  console.log('no');
}
else{
  console.log('follow instructions');
}


let answerThree = prompt('Was my last job at USPS?').toLowerCase();

if(answerThree === 'yes' || answerThree === 'y'){
  console.log('yes');
}
else if(answerThree === 'no' || answerThree ==='n'){
  console.log('no');
}
else{
  console.log('follow instructions');
}


let answerFour = prompt('Have I been to Vietnam?').toLowerCase();

if(answerFour === 'yes' || answerFour === 'y'){
  console.log('yes');
}
else if(answerFour === 'no' || answerFour === 'n'){
  console.log('no');
}
else{
  console.log('follow instructions');
}


let answerFive = prompt('Did I graduate from Inglemoor High School?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  console.log('yes');
}
else if(answerFive === 'no' || answerFive === 'n'){
  console.log('no');
}
else{
  console.log('follow instructions');
}