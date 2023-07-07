function operationsBetweenNumbers(input) {

    let firstNum = Number(input[0]);
    let secondNum = Number(input[1]);
    let symbol = input[2];

    let result = 0;

    if (secondNum === 0) {
        console.log(`Cannot divide ${firstNum} by zero`);
    } else {
        switch (symbol) {
            case '+': result = firstNum + secondNum; break;
            case '-': result = firstNum - secondNum; break;
            case '*': result = firstNum * secondNum; break;
            case '/': result = firstNum / secondNum; break;
            case '%': result = firstNum % secondNum; break;
        }

        if (symbol === '+' || symbol === '-' || symbol === '*') {
            let oddEvenChecker;
    
            if (result % 2 === 0) {
                oddEvenChecker = 'even';
            } else {
                oddEvenChecker = 'odd';
            }
    
            console.log(`${firstNum} ${symbol} ${secondNum} = ${result} - ${oddEvenChecker}`);
    
        } else if (symbol === '/') {
    
            console.log(`${firstNum} ${symbol} ${secondNum} = ${result.toFixed(2)}`);
    
        } else if (symbol === '%') {
            console.log(`${firstNum} ${symbol} ${secondNum} = ${result}`);
    
        }

    }

}
operationsBetweenNumbers(["112", "0", "/"])
