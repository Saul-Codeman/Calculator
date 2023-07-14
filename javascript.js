function add(num1 , num2) {
    return num1 + num2;
}

function subtract(num1 , num2) {
    return num1 - num2;
}

function multiply(num1 , num2) {
    return num1 * num2;
}

function divide(num1 , num2) {
    if (num2 === 0 || isNaN(num2) || num2 === null || !isFinite(num1 / num2)){
        return "Undefined";
    }
    return num1 / num2;
}

function exponent(num1, num2) {
    return num1 ** num2;
}

// Performs all calculations given operator, num1, and num2
function operate(num1, operator, num2){
    let answer = 0;


    switch (operator) {
        case '^':
            answer = exponent(num1, num2);
            return answer;
        case '÷':
            answer = divide(num1, num2);
            return answer;
        case 'x':
            answer = multiply(num1, num2);
            return answer;
        case '-':
            answer = subtract(num1, num2);
            return answer;
        case '+':
            answer = add(num1, num2);
            return answer;
        default:
          break;
      }
}

// Clears the answer-container
function clear(answerBox) {
    answerBox.innerText = '';
}

// Clears active buttons
function clearActiveButtons(functionButtons){
    functionButtons.forEach(functionButton => {
        functionButton.classList.remove('active');
    });
}







document.addEventListener("DOMContentLoaded", () => {

    // Gets the number buttons and adds event listeners to them
    const numberButtons = document.querySelectorAll('.number-buttons');
    // Answer container
    const calculationBox = document.querySelector('.calculation');
    const answerBox = document.querySelector('.answer');
    let number1 = 0;
    let operator = '';
    let number2 = NaN;

    numberButtons.forEach(number => {
        number.addEventListener('click', () => {
            // Add the number clicked to the answer-container
            const numberClicked = number.id === '0' && answerBox.innerText === '' ? '0' : number.id;
            if (numberClicked === '.') {
                if (!answerBox.innerText.includes('.')) {
                  answerBox.innerText += numberClicked;
                  
                }
              } else {
                answerBox.innerText += numberClicked;
                
              }
        });
    });

    // Get function buttons
    const functionButtons = document.querySelectorAll('.function-buttons');


    const clearButton = document.querySelector('#clear');
    const deleteButton = document.querySelector('#delete');
    const exponentButton = document.querySelector('#exponent');
    const divideButton = document.querySelector('#divide');
    const multiplyButton = document.querySelector('#multiply');
    const subtractButton = document.querySelector('#subtract');
    const addButton = document.querySelector('#add');
    const signButton = document.querySelector('#sign');
    const equalButton = document.querySelector('#equal');

    // Add event listeners to buttons
    clearButton.addEventListener('click', () => {
        clear(calculationBox);
        clear(answerBox);
        number1 = 0;
        operator = '';
        clearActiveButtons(functionButtons);
    });

    deleteButton.addEventListener('click', () => {
        let numberToDelete = answerBox.innerText;
        if (!isNaN(parseFloat(numberToDelete.slice(-1)))){
            answerBox.innerText = numberToDelete.slice(0, -1);
        }
    });

    exponentButton.addEventListener('click', () => {
        // Check if the answerBox.innerText has a valid number, if it doesnt, do not reset number 1
        if (operator !== '' && answerBox.innerText !== ''){
            number2 = parseFloat(answerBox.innerText);
            calculationBox.innerText = `${number1} ${operator} ${number2}=`;
            clearActiveButtons(functionButtons);
            clear(answerBox);
            number1 = operate(number1, operator, number2);
            operator = '';
        } else if (parseFloat(answerBox.innerText)){
            number1 = parseFloat(answerBox.innerText);
        }
        operator = '^';
        calculationBox.innerText = `${number1} ^ `;
        clearActiveButtons(functionButtons);
        exponentButton.classList.add('active');
        clear(answerBox);
    });

    divideButton.addEventListener('click', () => {
        if (operator !== '' && answerBox.innerText !== ''){
            number2 = parseFloat(answerBox.innerText);
            calculationBox.innerText = `${number1} ${operator} ${number2}=`;
            clearActiveButtons(functionButtons);
            clear(answerBox);
            number1 = operate(number1, operator, number2);
            operator = '';
        } else if (parseFloat(answerBox.innerText)){
            number1 = parseFloat(answerBox.innerText);
        }
        
        operator = '÷';
        calculationBox.innerText = `${number1} ÷ `;
        clearActiveButtons(functionButtons);
        divideButton.classList.add('active');
        clear(answerBox);
    });

    multiplyButton.addEventListener('click', () => {
        if (operator !== '' && answerBox.innerText !== ''){
            number2 = parseFloat(answerBox.innerText);
            calculationBox.innerText = `${number1} ${operator} ${number2}=`;
            clearActiveButtons(functionButtons);
            clear(answerBox);
            number1 = operate(number1, operator, number2);
            operator = '';
        } else if (parseFloat(answerBox.innerText)){
            number1 = parseFloat(answerBox.innerText);
        }
        operator = 'x';
        calculationBox.innerText = `${number1} x `;
        clearActiveButtons(functionButtons);
        multiplyButton.classList.add('active');
        clear(answerBox);
    });

    subtractButton.addEventListener('click', () => {
        if (operator !== '' && answerBox.innerText !== ''){
            number2 = parseFloat(answerBox.innerText);
            calculationBox.innerText = `${number1} ${operator} ${number2}=`;
            clearActiveButtons(functionButtons);
            clear(answerBox);
            number1 = operate(number1, operator, number2);
            operator = '';
        } else if (parseFloat(answerBox.innerText)){
            number1 = parseFloat(answerBox.innerText);
        }
        operator = '-';
        calculationBox.innerText = `${number1} - `;
        clearActiveButtons(functionButtons);
        subtractButton.classList.add('active');
        clear(answerBox);
    });

    addButton.addEventListener('click', () => {
        if (operator !== '' && answerBox.innerText !== ''){
            number2 = parseFloat(answerBox.innerText);
            calculationBox.innerText = `${number1} ${operator} ${number2}=`;
            clearActiveButtons(functionButtons);
            clear(answerBox);
            number1 = operate(number1, operator, number2);
            operator = '';
        } else if (parseFloat(answerBox.innerText)){
            number1 = parseFloat(answerBox.innerText);
        }
        operator = '+';
        calculationBox.innerText = `${number1} + `;
        clearActiveButtons(functionButtons);
        addButton.classList.add('active');
        clear(answerBox);
    });

    signButton.addEventListener('click', () => {
        let number = parseFloat(answerBox.innerText) * -1;
        answerBox.innerText = number;
    });

    equalButton.addEventListener('click', () => {
    if (operator !== '' && answerBox.innerText !== '') {
        number2 = parseFloat(answerBox.innerText);
        calculationBox.innerText = `${number1} ${operator} ${number2}=`;

        clearActiveButtons(functionButtons);

        clear(answerBox);

        answerBox.innerText = operate(number1, operator, number2);
        operator = '';

      }
    });
});