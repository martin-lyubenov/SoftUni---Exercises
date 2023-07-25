function yardGreening (input) {
    let priceSqm = 7.61;
    let greeningArea = Number(input[0]);

    let totalCost = priceSqm * greeningArea ;

    let discount = totalCost * 0.18;
    let discountTotalCost = totalCost - discount ;

    console.log(`The final price is: ${discountTotalCost} lv.`)
    console.log(`The discount is: ${discount} lv.`)

}
yardGreening (['550']);