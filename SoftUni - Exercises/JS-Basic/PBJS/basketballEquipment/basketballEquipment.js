function basketballEquipment (input) { 

    let annualSubscription = Number(input[0]);

    let snikersPrice = annualSubscription - (annualSubscription*0.4);
    let uniformPrice = snikersPrice - (snikersPrice*0.2);
    let ballPrice = uniformPrice * (1/4);
    let accesorriesPrice = ballPrice * (1/5);

    let totalCost = snikersPrice + uniformPrice + ballPrice + accesorriesPrice + annualSubscription;


    console.log((totalCost).toFixed(2))

}
basketballEquipment(['320']);