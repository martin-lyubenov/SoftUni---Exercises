function numbersDivisibleBy9(input) {

    let startNum = Number(input[0]);
    let endNum = Number(input[1]);

    let total = 0;
    let allNumbers = '';

    for (let i = startNum; i < endNum; i++) {

        if (i % 9 === 0) {
            total = total + i;
            allNumbers +=`${i}\n`

           
        }


    }
    console.log(`The sum: ${total}`);
    console.log(allNumbers);
    
}
numbersDivisibleBy9(["100", "200"])