function equalsSumsEvenOddPosition(input) {
    let startNum = Number(input[0]);
    let endNum = Number(input[1]);


    let printLine = '';
    for(let i = startNum; i <= endNum; i++) { 
        let buff = i.toString();
        let oddSum = 0;
        let evenSum = 0;
   
        for(let j = 0; j < 6; j++ ) { 
            let currentDigit = Number(buff.charAt(j));
            if (j % 2 === 0) {
                oddSum+= currentDigit;
            } else { 
                evenSum+= currentDigit;
            }
        }

        if (oddSum === evenSum) {
            printLine += `${i} `
        }

    }
    console.log(printLine);

}
equalsSumsEvenOddPosition(["100000",
"100050"])
