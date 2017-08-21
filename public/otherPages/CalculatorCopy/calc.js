//always use this for JS files. JS will be less permissive.
'use strict';

const clear = document.querySelector('#clear');
const equals = document.querySelector('#equals');
const typeLine = document.querySelector('#typeLine');
const buttons = document.querySelectorAll('div.button2');
const meow = document.querySelectorAll('div.button2');
const clearMeow = document.querySelector('#clear');
let answer = '';
let lhs = '';
let rhs = '';
let operator = '';


//event handler accepts the click events
//takes clicked numbers(strings) and makes them numbers.
const eventHandler = function(event) {
  const entry = event.target.textContent;

  if (entry === "+" || entry  === '-' || entry === 'X' || entry === '/') {
    operator = entry;
    lhs = parseInt(lhs);
    console.log("lhs with parseInt", typeof lhs + lhs);
  }
  else if (entry === "=") {
    console.log("at else if for lhs and textcontent");
    lhs = operate(operator, lhs, rhs);
    console.log(lhs);
    typeLine.textContent = " ";
    typeLine.textContent = lhs;
  }
  else if (!operator) {
    lhs += entry;
    console.log("This is left hand side number: ", lhs);
    console.log("Type of lhs before parseint: ", typeof lhs);
  }
  else {
    console.log("at else");
    rhs += entry;
    rhs = parseInt(rhs);
  }

  if (entry !== "=") {
    typeLine.textContent = [ lhs, operator, rhs ].join(' ');
  }
}; 

// if you click an operator, this checks for it.
const isOperator = function(entry) {
  return entry === '+' || entry === '-' || entry === 'X' || entry === '/';
};

////combines left and right and the operator.
const operate = function(operator, lhs, rhs) {
  lhs = parseInt(lhs);
  rhs = parseInt(rhs);
  if (operator === '+') {
    answer =  lhs + rhs;
  }
  else if (operator === '-') {
    answer = lhs - rhs;
  }
  else if (operator === 'X') {
    answer = lhs * rhs;
  }
  else if (operator === '/') {
    answer = lhs / rhs;
  }
  else {
    console.log("Something is wrong.");
  }
  console.log(answer);
  return answer;

};





//this if the variable that passes a function. It is called when a user clicks.
const meowHandler = function() {
  const audio = new Audio('./Sad-cat.mp3')
  audio.play();
};

//Event listener for clear button
clear.addEventListener('click', function(event) {
  lhs = '';
  rhs = '';
  operator = '';
  typeLine.textContent = '';
});

// Event listener for equals button
equals.addEventListener('click', eventHandler);
for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', eventHandler);
}




///////SOUND///////
//this is the for loop for my sound/// meow var. it creates an event listener for items within the meow array.
for (let i = 0; i < meow.length; i++) {
  meow[i].addEventListener('click', meowHandler);
}

//sound just for clear button
clearMeow.addEventListener('click', function() {
  const audio2 = new Audio('./Kitty-meow.mp3')
  audio2.play();
});






























  // if (!operator) {
  //   lhs += entry;
  //   console.log("This is left hand side number: ", lhs);
  //   console.log("Type of lhs before parseint: ", typeof lhs);
    //this part works.
//   } else if (!operator && is_Operator(entry)) {
 // Is operator
//     operator = entry;
//     lhs = parseInt(lhs);
//   } else if(is_Operator(entry)) {
//     lhs = operate(operator, lhs, rhs)
//     rhs = '';
//     operator = entry;
//   } else {
//     rhs += entry;
//   }
//   typeLine.textContent = [ lhs, operator, rhs ].join(' ');
// };



// let listen = document.querySelector('.calcBody');
// let typeLine = document.querySelector('#typeLine');
// let holder = [];
// let answerBox = document.querySelector('#typeLine');
// let meow = document.querySelector('.calcBody');
// let plus = document.querySelector('#plus')
// // let answerBox = document.querySelector('#typeLine');
//
// let symbols = document.querySelector('.lightgreen');
//
//
// //loops over divs in calcbody to assign event listeners.
// // function bodyLoop () {
// // for (let i = 0; i < calcBody.length; i++) {
// //
// // }
// //
// // }
// //
//
//
//
//
//












// //turns strings into numbers // stores in holder
// listen.addEventListener('click', function(evt) {
//   console.log("hi", typeof evt.target.textContent);
//   let numberCrunch = parseInt(evt.target.textContent);
//   holder.push(numberCrunch);
//   console.log(holder);
// });

//function that loops through holder array and posts it to the typeLine.
// plus.addEventListener('click', function() {
//   function looper (loop) {
//   for (let i = 0; i < holder.length; i++) {
//     typeLine.textContent = result;
//   }
//   }
// });

// answerBox.innerHTML = numberCrunch;

//turns NaN symbols into math things. // stores in answerBox
// symbols.addEventListener('click', function(evt) {
//   // let symbolCrunch = parseInt(evt.target.textContent);
//   let symbolCrunch = evt.target.innerHTML;
//   console.log(typeof evt.target.innerHTML);
//   // console.log(typeof numberCrunch,  evt.target.textContent);
//   if (symbolCrunch === "X") {
//       answerBox *= symbolCrunch;
//   } else if {
//     (symbolCrunch === "/") {
//       answerBox /= symbolCrunch;
//     }
//   }
//   console.log(answerBox);
// });
//



//listener on whole calc
// able to click and return a value on each number on console.
//return that value to the screen on typeLine.
//pushing
//able to click math buttons and return basic math to screen.
//able to DO the math and return the answer of the math.
//clear math from screen.
// evt.target.innerHTML
//http://www.baconsizzling.com/
