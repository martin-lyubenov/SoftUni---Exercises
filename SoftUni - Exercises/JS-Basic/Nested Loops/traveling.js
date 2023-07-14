function traveling(input) {
    let index = 0;

    let command = input[index];
    let destination = input[index];
    index++;

    let budget = Number(input[index]);
    index++;

    let savings = 0;

    while (command !== 'End') {

        while (budget > savings) {
            let currentSavings = Number(input[index]);
            savings += currentSavings;
            index++;

        }

        if (budget <= savings) {
            console.log(`Going to ${destination}!`);
        }
        
        command = input[index];

        if (command !== 'End') {
            destination = input[index];
            index++;
            budget = Number(input[index]);
            savings = 0;
        	
        }
        index++;
    }

}
traveling(["France",
"2000",
"2000",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1900",
"End"])







