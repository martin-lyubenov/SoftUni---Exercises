function godzillaVsKong (input) { 

    let budget = Number(input[0]);
    let extras = Number(input[1]);
    let pricePerClothing = Number(input[2]);

    let decore = budget * 0.1;

    if (extras > 150) {
        pricePerClothing = pricePerClothing *0.9;
    }

    let totalExpense = extras * pricePerClothing + decore;

    let moneyDifference = Math.abs(budget - totalExpense);

    if (budget < totalExpense) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(moneyDifference).toFixed(2)} leva more.`);

    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(moneyDifference).toFixed(2)} leva left.`);
    }

}
godzillaVsKong(["9587.88",

"222",

"55.68"]);