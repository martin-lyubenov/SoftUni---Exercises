function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let amount = Number(input[2]);

    let total = 0;

    switch (day) {
        case "Monday":
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':  switch (fruit) {
            case 'banana': total = 2.50 * amount; break;
            case 'apple': total = 1.20 * amount; break;
            case 'orange': total = 0.85 * amount; break;
            case 'grapefruit': total = 1.45 * amount; break;
            case 'kiwi': total = 2.70 * amount; break;
            case 'pineapple': total = 5.50 * amount; break;
            case 'grapes': total = 3.85 * amount; break;

        } break;

        case 'Saturday':
        case 'Sunday': switch (fruit) {
            case 'banana': total = 2.70 * amount; break;
            case 'apple': total = 1.25 * amount; break;
            case 'orange': total = 0.90 * amount; break;
            case 'grapefruit': total = 1.60 * amount; break;
            case 'kiwi': total = 3.00 * amount; break;
            case 'pineapple': total = 5.60 * amount; break;
            case 'grapes': total = 4.20 * amount; break;
            
        }break;
        
    }

    if (total === 0) {
        console.log(`error`);
    } else {
        console.log(total.toFixed(2));
    }

}
fruitShop(["apple","Tuesday","2"]);