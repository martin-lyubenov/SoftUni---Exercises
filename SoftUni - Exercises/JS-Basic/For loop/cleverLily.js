function cleverLily(input) {
    
    let age = Number(input[0]);
    let washingMachinePrice = Number(input[1]);
    let toysPrice = Number(input[2]);

    let money = 0;
    let currentMoney = 0;
    let toyCount = 0;

    for (let i = 1; i <= age; i++ ) { 
        
        if (i % 2 === 0) {
            currentMoney += 10;
            money+= + currentMoney;
            money--;
        } else { 
            toyCount++;
        }
    
    }

    let total = (toysPrice * toyCount) + money;

    let diff = Math.abs(total - washingMachinePrice);

    if (total >= washingMachinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else { 
        console.log(`No! ${diff.toFixed(2)}`);
    }

}
cleverLily(["21",

"1570.98",

"3"])