function repainting (input) { 

    let neededNailon = Number(input[0]);
    let neededPaint = Number(input[1]);
    let neededThinner = Number(input[2]);
    let workHours = Number(input[3]);

    let costNailon = (neededNailon+2)*1.5;
    let costPaint = (neededPaint + (neededPaint*0.1))*14.50;
    let costThinner = neededThinner*5;
    let plasticBag = 0.4;

    let totalCostMaterials = costNailon + costPaint + costThinner + plasticBag;
    let handymanSalary = (totalCostMaterials*0.3)*workHours;
    let total = totalCostMaterials + handymanSalary;

    console.log(total);

}
repainting(['5','10','10','1']);        