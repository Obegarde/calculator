function add(number1,number2){
    return number1 + number2;
}

function subtract(number1, number2){
    return number1 - number2;
}

function multiply(number1, number2){
    return number1*number2
}

function divide(number1, number2){
    return number1/number2;
}

let numberOne;
let numberTwo;
let operator;


function operate(number1,number2,operator){
    switch(operator){
        case '+':
            return add(number1,number2);
        case '-':
            return subtract(number1,number2);
        case '*':
            return multiply(number1,number2);
        case '/':
            return divide(number1, number2);
        default:
            return "Unsupported operator"

    }

}