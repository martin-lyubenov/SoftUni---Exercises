function suppliesForSchool (input) { 

    let packOfPens = Number(input[0]);
    let packOfMarkers = Number(input[1]);
    let cleaningDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let pricePackOfPens = packOfPens * 5.80; 
    let pricepackOfMarkers = packOfMarkers * 7.20;
    let priceCleaningDetergent = cleaningDetergent * 1.2;

    let totalPrice = pricePackOfPens + pricepackOfMarkers + priceCleaningDetergent;
    let totalDiscountedPrice = totalPrice - totalPrice * (discount/100);

    console.log(totalDiscountedPrice);

}
suppliesForSchool (['4','2','5','13']);