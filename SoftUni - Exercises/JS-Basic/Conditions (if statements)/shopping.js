function shopping (input) { 

    let budget = Number(input[0]);
    let videoCardNumber = Number(input[1]);
    let processorNumber = Number(input[2]);
    let ramNumber = Number(input[3]);
    

    let videoCardCost = 250;
    let videoCardTotalCost = videoCardCost * videoCardNumber ;

    let processorCost = 0.35 * videoCardTotalCost ;
    let ramCost = 0.1 * videoCardTotalCost ;

    let processorTotalCost = processorNumber * processorCost ;
    let ramTotalCost = ramNumber * ramCost ; 

    let total = videoCardTotalCost + processorTotalCost + ramTotalCost ;

    if (videoCardNumber > processorNumber) {
        total = total * 0.85;
    }

    if (budget > total) {
        let leftBudget = Math.abs(budget - total) ;

        console.log(`You have ${(leftBudget).toFixed(2)} leva left!`);
    } else {
        let leftBudget = Math.abs(budget - total) ;

        console.log(`Not enough money! You need ${(leftBudget).toFixed(2)} leva more!`);
    }

}

shopping (["920.45",

"3",

"1",

"1"]);