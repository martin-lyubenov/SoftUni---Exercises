function oscarsWeekInCinema(input) {
    
    let name = input[0];
    let type = input[1];
    let amount = Number(input[2]);

    let price = 0;

    switch (type) {
        case 'normal': 

        switch (name) {
            case 'A Star Is Born': price = 7.50; break;
            case 'Bohemian Rhapsody': price = 7.35; break;
            case 'Green Book': price = 8.15; break;
            case 'The Favourite': price = 8.75; break;
        }break;

        case 'luxury': 

        switch (name) {
            case 'A Star Is Born': price = 10.50; break;
            case 'Bohemian Rhapsody': price = 9.45; break;
            case 'Green Book': price = 10.25; break;
            case 'The Favourite': price = 11.55; break;
        }break;

        case 'ultra luxury': 

        switch (name) {
            case 'A Star Is Born': price = 13.50; break;
            case 'Bohemian Rhapsody': price = 12.75; break;
            case 'Green Book': price = 13.25; break;
            case 'The Favourite': price = 13.95; break;
        }break;

    }

    let total = price * amount;

    console.log(`${name} -> ${total.toFixed(2)} lv.`);

}
oscarsWeekInCinema(["Green Book",
"normal",
"63"])
