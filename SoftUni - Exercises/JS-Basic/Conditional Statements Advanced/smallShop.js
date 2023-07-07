function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let amount = Number(input[2]);

    let total = 0;

    switch (city) {
        case 'Sofia':
            switch (product) {
                case 'coffee': total = amount * 0.5;break;
                case 'water': total = amount * 0.8;break;
                case 'beer': total = amount * 1.2;break;
                case 'sweets': total = amount * 1.45;break;
                case 'peanuts': total = amount * 1.60;break;

            } break;

            case 'Plovdiv':
                switch (product) {
                    case 'coffee': total = amount * 0.4;break;
                    case 'water': total = amount * 0.7;break;
                    case 'beer': total = amount * 1.15;break;
                    case 'sweets': total = amount * 1.30;break;
                    case 'peanuts': total = amount * 1.50;break;
    
                } break;
            
                case 'Varna':
                    switch (product) {
                        case 'coffee': total = amount * 0.45;break;
                        case 'water': total = amount * 0.7;break;
                        case 'beer': total = amount * 1.10;break;
                        case 'sweets': total = amount * 1.35;break;
                        case 'peanuts': total = amount * 1.55;break;
        
                    } break;
            
    
    }

    console.log(total);
    
}
smallShop(["water",
"Plovdiv",
"3"])