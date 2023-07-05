function worldSwimmingRecord (input) { 

    let worldRecord = Number(input[0]);
    let distanceM = Number(input[1]);
    let secondsPer1M = Number(input[2]);


    let delay = Math.floor(distanceM / 15) * 12.5;
    let ivanchoTime = distanceM * secondsPer1M + delay ;

    if (ivanchoTime < worldRecord ) {
        console.log(`Yes, he succeeded! The new world record is ${(ivanchoTime).toFixed(2)} seconds.`);
    } else {
        let neededTime = Math.abs(worldRecord - ivanchoTime);
        console.log(`No, he failed! He was ${Math.floor(neededTime).toFixed(2)} seconds slower.`);
    }

}

worldSwimmingRecord (["10464",

"1500",

"20"]);