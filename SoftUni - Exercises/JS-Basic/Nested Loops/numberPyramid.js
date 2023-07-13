function numberPyramid(input) {
    let num = Number(input[0]);


    let currentNumber = 1;
    let isBigger = false;
    let currentLine = '';

    for(let i = 1; i <= num; i++ ) { 
        for(let y = 1; y <= i; y++) { 
            if (currentNumber > num) { 
                isBigger = true;
                break;
            }
            currentLine+=currentNumber + " ";
            currentNumber++;
        }
        console.log(currentLine);
        currentLine = '';

        if (isBigger) {
            break;
        }
        
    }

}
numberPyramid([7]);


