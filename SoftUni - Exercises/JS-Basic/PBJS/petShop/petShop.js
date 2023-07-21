function petShop (input) {

    let dogFoodPrice = 2.5;
    let catFoodPrice = 4;

    let dogFoodPacks = Number(input[0]);
    let catFoodPacks = Number(input[1]);

    let totalDogCost = dogFoodPrice * dogFoodPacks;
    let totalCatCost = catFoodPrice * catFoodPacks;

    let totalCost = totalCatCost + totalDogCost;

    console.log(`${totalCost} lv`)
}
petShop(['13','9']);