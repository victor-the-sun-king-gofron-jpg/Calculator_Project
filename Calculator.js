  //Var to access Display
  const display_content = document.getElementById('display-calc');
  const displayCurr = document.querySelector('[data-current-oper]');
  const displayPrev = document.querySelector('[data-prev-oper]');
  
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

  /*function operate(operator, a, b){
    return operator(a, b);  
  }*/

  function clear(){
    displayCurr.innerHTML = '';
    displayPrev.innnerHTML = '';

  }

  function deleteNum(){

  }

  function appendNumber(buttonText) {
    console.log(display_content.innerHTML);
    displayCurr.innerHTML += buttonText;
  }

  function updateDisplay(){
    console.log(display_content.innerText);
    displayCurr.innerText = buttonText;
  }

  //The Buttons are constantly reloading my page; Some weird behavior with the DOM
  //How to prevent this
  numberButtons.forEach(function(button) {
    button.addEventListener('click', function(){
      appendNumber(button.innerText);
      updateDisplay(button.innerText);
    })
  })

