function cinema (input) {

    const projection = input[0];
    const rows = Number(input[1]);
    const columns = Number(input[2]);

    const totalSeats = rows * columns;
    let profit = 0;

    switch (projection) {
        case 'Premiere': profit = totalSeats * 12.00;break;
        case 'Normal': profit = totalSeats * 7.50; break;
        case 'Discount': profit = totalSeats * 5.00; break;
    }

    console.log(`${profit.toFixed(2)} leva`);
    
}
cinema(["Discount", "12", "30"]);