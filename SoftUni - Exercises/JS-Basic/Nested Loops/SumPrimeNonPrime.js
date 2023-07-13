function SumPrimeNonPrime(input) {
    let index = 0;
    let command = input[index];
    index++;


    let sumPrimeN = 0;
    let sumNonPrimeN = 0;

    while(command !== 'stop') { 
        let currentNum = Number(command);
        
        if (currentNum < 0) {
            console.log(`Number is negative.`);
            continue;
        }

        if (currentNum === 1) {
            sumPrimeN+= currentNum;
            command = input[index];
            index++;
            continue;
        }
        
        let isPrime = true;

        for(let i = 2; i < currentNum; i++) { 
            if (currentNum  % i === 0) {
                isPrime = false;
                break;
            } else { 
                sumNonPrimeN+= currentNum;
            }
        }
       
        command = input[index];
        index++;
    }

    console.log(`Sum of all prime numbers is: ${sumPrimeN}`);
    console.log(`Sum of all non prime numbers is: ${sumNonPrimeN}`);


}
SumPrimeNonPrime(["3",
"9",
"0",
"7",
"19",
"4",
"stop"])
