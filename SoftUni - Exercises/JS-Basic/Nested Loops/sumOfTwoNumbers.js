function sumOfTwoNumbers(input) {
    let index = 0;
    let firstNum = Number(input[index]);
    index++

    let secondNum = Number(input[index]);
    index++;

    let magicNum = Number(input[index]);
    let counter = 0;
    let sum = 0;

    let firstPossibleNumber = 0;
    let secondPossibleNumber = 0;

    let flag = false;

    for(let i = firstNum; i <= secondNum; i++) { 
        if (flag === true) {
            break;
        }
            for(let j = firstNum; j <= secondNum; j++) { 
                sum = i + j;
                counter++;
                if (sum === magicNum) {
                    firstPossibleNumber = i;
                    secondPossibleNumber = j;
                    flag = true;
                    break;
                }

              

            }
    }


    if (flag === true) {
        console.log(`Combination N:${counter} (${firstPossibleNumber} + ${secondPossibleNumber} = ${magicNum})`);
    } else {
        console.log(`${counter} combinations - neither equals ${magicNum}`);
    } 

 

}
sumOfTwoNumbers(["88", 
"888", 
"2000"])