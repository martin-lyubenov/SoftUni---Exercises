function journey(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let destination;
    let type;
    let spentMoney = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        switch (season) {
            case 'summer': spentMoney = budget * 0.3, type = 'Camp'; break;
            case 'winter': spentMoney = budget * 0.7, type = 'Hotel'; break;

        }

    } else if (budget <= 1000) {

        destination = 'Balkans';

        switch (season) {
            case 'summer': spentMoney = budget * 0.4, type = 'Camp'; break;
            case 'winter': spentMoney = budget * 0.8, type = 'Hotel'; break;

        } 
    } else if (budget > 1000) {
        destination = 'Europe';

            switch (season) {
                case 'summer': 
                case 'winter': spentMoney = budget * 0.9, type = 'Hotel'; break;

            }
        }

        console.log(`Somewhere in ${destination}`);
        console.log(`${type} - ${spentMoney.toFixed(2)}`);

 }
journey(["1500", "summer"]);