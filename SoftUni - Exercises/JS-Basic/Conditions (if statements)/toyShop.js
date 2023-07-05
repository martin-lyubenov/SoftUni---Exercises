function toyShop (input) { 

let puzzlePrice = 2.6;
let dollPrice = 3;
let teddyBearPrice = 4.1;
let minionPrice = 8.2;
let toyTruckPrice = 2;

let excursionCost = Number(input[0]);
let puzzles = Number(input[1]);
let dolls = Number(input[2]);
let teddyBears = Number(input[3]);
let minions = Number(input[4]);
let toyTrucks = Number(input[5]);

let puzzleRevenue = puzzlePrice * puzzles;
let dollRevenue = dollPrice * dolls;
let teddyBearRevenue = teddyBearPrice * teddyBears;
let minionRevenue = minionPrice * minions;
let toyTruckRevenue = toyTruckPrice * toyTrucks;

let totalAmountSoldToys = puzzles + dolls + teddyBears + minions + toyTrucks;
let totalRevenue = puzzleRevenue + dollRevenue + teddyBearRevenue + minionRevenue + toyTruckRevenue;

if (totalAmountSoldToys >= 50) {
    totalRevenue = totalRevenue * 0.75; 
}

totalRevenue = totalRevenue * 0.9;

let leftMoney = totalRevenue - excursionCost;

if (totalRevenue > excursionCost) {
      console.log(`Yes! ${(leftMoney).toFixed(2)} lv left.`);
    
} else {

    console.log(`Not enough money! ${Math.abs((leftMoney).toFixed(2))} lv needed.`);
}

}   
toyShop (["40.8",

"20",

"25",

"30",

"50",

"10"]);