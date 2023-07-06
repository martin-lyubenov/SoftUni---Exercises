function newHouseTwo(input) {
    let typeFlower = input[0];
    let amountFlower = Number(input[1]);
    let budget = Number(input[2]);

    let totalExpense = 0;

    if (typeFlower === 'Roses') {
        totalExpense = amountFlower * 5;
        if (amountFlower > 80) {
            totalExpense = totalExpense * 0.9;
        }

    } else if (typeFlower === 'Dahlias') {
        totalExpense = amountFlower * 3.8;
        if (amountFlower > 90) {
            totalExpense = totalExpense * 0.85;
        }

    } else if (typeFlower === 'Tulips') {
        totalExpense = amountFlower * 2.8;
        if (amountFlower > 80) {
            totalExpense = totalExpense * 0.85;
        }

    } else if (typeFlower === 'Narcissus') {
        totalExpense = amountFlower * 3;
        if (amountFlower < 120) {
            totalExpense = totalExpense * 1.15;
        }

    } else if (typeFlower === 'Gladiolus') {
        totalExpense = amountFlower * 2.5;
    if (amountFlower < 80) {
        totalExpense = totalExpense * 1.20;
    }
}


if (budget > totalExpense) {
    let remainingBudget = budget - totalExpense;

    console.log(`Hey, you have a great garden with ${amountFlower} ${typeFlower} and ${remainingBudget.toFixed(2)} leva left.`);
    
} else {
    let neededMoney = totalExpense - budget
    
    console.log(`Not enough money, you need ${neededMoney.toFixed(2)} leva more.`);
}

}
newHouseTwo(["Tulips",

"88",

"260"]);