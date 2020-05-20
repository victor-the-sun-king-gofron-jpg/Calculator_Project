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

  function chooseOperation(){
    //This function should run through the whole string then apply the logic
    //of the previous functions
    if(displayCurr.innerHTML.includes('+')){
      //How to determine what is a and what is b after

    }
  }

  function clear(){
    displayCurr.innerHTML = '';
    displayPrev.innerHTML = '';
  }

  function deleteNum(){
    var newStr = displayCurr.innerHTML.slice(0, -1);
    displayCurr.innerHTML = newStr;
  }

  function appendNumber(buttonText) {
    //Feels like this should not just add
    console.log(buttonText);
    if(buttonText === '.' && displayCurr.innerHTML.includes('.')){
    return 
    }
    displayCurr.innerHTML += buttonText;
  }

  function updateDisplay(){
    //What is the purpose of this update Display
    //Should this be used for the equal value
    console.log('somewhereovertherainbow');
    displayPrev.innerText = displayCurr.innerHTML;
    displayCurr.innerText === '';
  }

  //The Buttons are constantly reloading my page; Some weird behavior with the DOM
  //How to prevent this
  numberButtons.forEach(function(button) {
    button.addEventListener('click', function(){
      appendNumber(button.innerText);
    })
  })

  operationButtons.forEach(function(button) {
    button.addEventListener('click', function(){
      if(button.innerText === '/'){
        appendNumber(button.innerText);
        updateDisplay();
        //Add in addition function
      } else if(button.innerText === '*'){
        appendNumber(button.innerText);
        updateDisplay(button.innerText);
        //Add in the multiplation 
      } else if(button.innerText === '-'){
        appendNumber(button.innerText);
        updateDisplay(button.innerText);
      } else if(button.innerText === '+'){
        appendNumber(button.innerText);
        updateDisplay(button.innerText);
      }
    })
  })

  equalsButton.addEventListener('click', chooseOperation);
  deleteButton.addEventListener('click', deleteNum);
  clearButton.addEventListener('click', clear);
