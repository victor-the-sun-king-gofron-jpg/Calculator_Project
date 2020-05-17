var currentValue = '';
//Var to access Display
const display_content = document.getElementById('display-calc');
const displayPrev = document.getElementById('prev-calc');
const displayCurr = document.getElementById('curr-calc');

//Var to access the Buttons on the Dom
const numberButtons = document.querySelectorAll('[data-number]');
const operationButtons = document.querySelectorAll('[data-operation]');
const equalsButton = document.querySelector('[data-equals]');
const deleteButton = document.querySelector('[data-delete]');
const clearButton = document.querySelector('[data-all-clear]');

/*Functions for use on the calculator*/
function add(a, b){
    return a + b;
  }
  
  function subtract(a, b){
    return a - b;
  }
  
  function multiply(a, b){
    return a * b;
  }
  
  function divide(a, b){
    return a / b;
  }

  function operate(operator, a, b){
    return operator(a, b);  
  }

  function clear(){
    display_content.innerHTML = 0;
  }

  function deleteNum(){

  }

  function appendNumber(buttonText) {
    console.log(display_content.innerHTML);
    //display_content.innerHTML += buttonText;
    display_content.innerHTML += buttonText;
  }

  function updateDisplay(){
    console.log(display_content.innerText);
    display_content.innerText = buttonText;
  }
  //I need updateDisplay to permanently update the display

  numberButtons.forEach(function(button) {
    button.addEventListener('click', function(){
      appendNumber(button.innerText);
      updateDisplay(button.innerText);
    })
  })

  //Function which clears the display back to 0

console.log(currentValue);
  //Need to for loop over the buttons, possibly use if else if statements to check the button*
  //for (var i = 0)


  //NOTE Onlick on a button will not make something permanent when you hook it up to
  //a function!!!!!! NOTE The click seems to be not enough, when the button is clicked
  //it changes, but it doesn't make it permanent



  //Button Clicks update the display
  
  //How to do this without totally erasing the value
  //Event_Listeners on buttons will call all buttons