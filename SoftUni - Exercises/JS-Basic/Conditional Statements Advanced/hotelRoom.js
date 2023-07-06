function hotelRoom(input) {

    let month = input[0];
    let nDay = Number(input[1]);

    let priceStudio = 0;
    let priceApartment = 0;

    let totalStudio = 0;
    let totalApartment = 0;

    switch (month) {
        case 'May':
        case 'October': priceStudio = 50, priceApartment = 65;
            if (nDay > 7 && nDay < 14) {
                priceStudio = priceStudio * 0.95
            } else if (nDay > 14) {
                priceStudio = priceStudio * 0.7;
            }
            break;

        case 'June':
        case 'September': priceStudio = 75.20, priceApartment = 68.70;
            if (nDay > 14) {
                priceStudio = priceStudio * 0.8
            }
            break;

        case 'July':
        case 'August': priceStudio = 76, priceApartment = 77;
    }

    if (nDay > 14) {
        priceApartment = priceApartment * 0.9;
    }

    totalApartment = nDay * priceApartment;
    totalStudio = nDay * priceStudio;

    console.log(`Apartment: ${totalApartment.toFixed(2)} lv.`);
    console.log(`Studio: ${totalStudio.toFixed(2)} lv.`);

}
hotelRoom(["June",

"14"])