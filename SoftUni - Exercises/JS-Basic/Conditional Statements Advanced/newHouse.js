function newHouse(input) {

    let typeFlower = input[0];
    let amountFlower = Number(input[1]);
    let budget = Number(input[2]);

    let totalExpense = 0;

    switch (typeFlower) {
        case 'Roses': totalExpense = amountFlower * 5;
            if (amountFlower > 80) {
                totalExpense = totalExpense * 0.9;
            }
            break;

        case 'Dahlias': totalExpense = amountFlower * 3.80;
            if (amountFlower > 90) {
                totalExpense = totalExpense * 0.85;
            }
            break;

        case 'Tulips': totalExpense = amountFlower * 2.80;
            if (amountFlower > 80) {
                totalExpense = totalExpense * 0.85;
            }
            break;

        case 'Narcissus': totalExpense = amountFlower * 3;
            if (amountFlower < 120) {
                totalExpense = totalExpense * 1.15;
            }
            break;

        case 'Gladiolus': totalExpense = amountFlower * 2.50;
            if (amountFlower < 80) {
                totalExpense = totalExpense * 1.20;
            }
            break;


    }

    if (totalExpense === 0) {
        console.log(`error`);

    } else if (budget >= totalExpense) {
        let remainingBudget = budget - totalExpense;

        console.log(`Hey, you have a great garden with ${amountFlower} ${typeFlower} and ${remainingBudget.toFixed(2)} leva left.`);

    } else if (budget < totalExpense) {

        let neededMoney = totalExpense - budget

        console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
    }

}
newHouse(["qq", "120", "160"]);