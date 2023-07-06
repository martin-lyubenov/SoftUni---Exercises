function fishingBoat (input) {
    
    let budget = Number(input[0]);
    let season = input[1];
    let amountFishers = Number(input[2]);

    let boatRent = 0;

    switch (season) {
        case 'Spring':boatRent = 3000; break;
        case 'Winter':boatRent = 2600; break;
        case 'Summer':
        case 'Autumn':boatRent = 4200; break;
    }

    if (amountFishers <= 6) {
        boatRent = boatRent * 0.9;
    } else if(amountFishers >=7 && amountFishers <= 11) {
        boatRent = boatRent * 0.85;
    } else if (amountFishers > 12) {
        boatRent = boatRent * 0.75;
    }

    if (amountFishers % 2 === 0 && season !== 'Autumn') {
        boatRent = boatRent * 0.95
    }

    if (budget >= boatRent) {
        let leftMoney = budget - boatRent;

        console.log(`Yes! You have ${leftMoney.toFixed(2)} leva left.`);

    } else {
        let neededMoney = boatRent - budget

        console.log(`Not enough money! You need ${neededMoney.toFixed(2)} leva.`);
        
    }

}
fishingBoat(["2000", "Winter", "13"]);