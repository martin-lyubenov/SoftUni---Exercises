function foodDelivery (input) { 

    let chickenMenu = Number(input[0]);
    let fishMenu = Number(input[1]);
    let veggieMenu = Number(input[2]);

    let priceChikenMenu = chickenMenu*10.35;
    let priceFishMenu = fishMenu*12.40;
    let priceveggieMenu = veggieMenu*8.15;
    let totalMenuCost = priceChikenMenu + priceFishMenu + priceveggieMenu;
    let dessertCost = 0.2*totalMenuCost;
    let delivery = 2.5;

    let totalCost = totalMenuCost + dessertCost + delivery;

    console.log(totalCost);

}
foodDelivery (['9','2','6']);