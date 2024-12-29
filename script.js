const button= document.querySelectorAll('.btn');
const sound= new Audio('button-4-214382.mp3');

button.forEach( btn =>{
    btn.addEventListener('click',click);
})
//Function to make sound on button click
function click(e){
    sound.playbackRate=6;
    if(e.type == 'click')sound.play();
}

//Function to display the number
function appendNumber(value){
    const display=document.getElementById('display');
    if(display.textContent==='0'){
        display.textContent=value;
    }else{
        display.textContent+=value;
    }
}

let previousNumber = '';
let currentNumber = '';
let operator = '';

function appendNumber(num) {
    if (operator === '') {
        previousNumber += num;
        document.getElementById('display').textContent = previousNumber;
    } else {
        currentNumber += num;
        document.getElementById('display').textContent = currentNumber;
    }
}

function handleOperator(op) {
    if (previousNumber !== '') {
        operator = op;
        document.getElementById('display').textContent = op;
    }
}

function clearDisplay() {
    previousNumber = '';
    currentNumber = '';
    operator = '';
    document.getElementById('display').textContent = '0';
}

function calculate() {
    if (previousNumber === '' || currentNumber === '' || operator === '') return;
    
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num2 !== 0 ? num1 / num2 : 'Error';
            break;
        case '%':
            result = num1 % num2;
            break;
        default:
            return;
    }
    
    document.getElementById('display').textContent = result;
    previousNumber = result.toString();
    currentNumber = '';
    operator = '';
}
  
// Function to clear the display
function clearDisplay() {
    const display = document.getElementById('display');
    display.textContent = '0';
    currentNumber = '';
    previousNumber = '';
    operator = '';
}
// Function for backspace
function back() {
    const display = document.getElementById('display');
    
    if (currentNumber !== '') {
        currentNumber = currentNumber.slice(0, -1);
        display.textContent = currentNumber === '' ? '0' : currentNumber;
    } else if (operator !== '') {
        operator = '';
        display.textContent = previousNumber;
    } else if (previousNumber !== '') {
        previousNumber = previousNumber.slice(0, -1);
        display.textContent = previousNumber === '' ? '0' : previousNumber;
    }
}
