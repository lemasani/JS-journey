function calculator(num1, num2, operator){
    let output
    if (operator === '+') {
        output = num1 + num2
    }else if (operator === '-'){
        output = num1 - num2
    }else if(operator === '/'){
        output = num1 / num2
    }
    else if(operator === '*'){
        output = num1 * num2
    }else{
        output = 'invalid operation'
    }

    return output

}

console.log(calculator(2,6,'*'));