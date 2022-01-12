'use strict';

let user = prompt('What is your name?');
alert('Welcome to my page ' + user +'!');


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


let answerFive = prompt('Did I graduate from Inglemoor High School?').toLowerCase();

if(answerFive === 'yes' || answerFive === 'y'){
  // console.log('yes');
  alert('That is correct ' + user + '! Great job with the quiz.');
}
else if(answerFive === 'no' || answerFive === 'n'){
  // console.log('no');
  alert('Wrong answer ' + user + '. Refresh the page and try the quiz again!');
}
else{
  // console.log('follow instructions');
  alert('Please answer with either yes or no :)');
}