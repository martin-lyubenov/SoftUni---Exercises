function cinema (input) {

    let projection = input[0];
    let rows = Number(input[1]);
    let columns = Number(input[2]);

    let totalSeats = rows * columns;
    let profit = 0;

    switch (projection) {
        case 'Premiere': profit = totalSeats * 12.00;break;
        case 'Normal': profit = totalSeats * 7.50; break;
        case 'Discount': profit = totalSeats * 5.00; break;
    }


    console.log(`${profit.toFixed(2)} leva`);
    
}
cinema(["Discount", "12", "30"]);