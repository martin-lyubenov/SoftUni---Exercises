function fishTank (input) { 

    let length = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percent = Number(input[3]);

    let fishTankVolume = length*width*height;
    let fishTankVolueLeters = fishTankVolume*0.001;
    let spaceTaken = percent/100

    let neededWater = fishTankVolueLeters*(1-spaceTaken);

    console.log(neededWater);

}
fishTank (['105','77','89','18.5']);