function skiTrip(input) {

    let days = Number(input[0]);
    let accomodation = input[1];
    let review = input[2];

    days = days - 1;


    let costROP = 18;
    let costApartment = 25;
    let costPApartment = 35;

    let total = 0;

    switch (accomodation) {
        case 'room for one person': total = costROP * days;
            if (review === 'positive') {
                total = total * 1.25
            } else if (review === 'negative') {
                total = total * 0.9
            }
            break;

        case 'apartment': total = costApartment * days;

            if (days < 10) {
                total = total * 0.7
            } else if (days >= 10 && days <= 15) {
                total = total * 0.65
            } else {
                total = total * 0.5
            }

            if (review === 'positive') {
                total = total * 1.25
            } else if (review === 'negative') {
                total = total * 0.9
            }

            break;


        case 'president apartment': total = costPApartment * days;

            if (days < 10) {
                total = total * 0.9
            } else if (days >= 10 && days <= 15) {
                total = total * 0.85
            } else {
                total = total * 0.8
            }

            if (review === 'positive') {
                total = total * 1.25
            } else if (review === 'negative') {
                total = total * 0.9
            }

            break;


    }
    

    console.log(total.toFixed(2));

}
skiTrip(["2", "apartment", "positive"])