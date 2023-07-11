function tennisRanklist(input) {
    index = 0;
    let tornamentCount = Number(input[index]);
    index++;

    let startingPoints = Number(input[index]);
    index++;

    let wins = 0;
    let totalMatchesCount = 0;
    let points = 0;

    for(let i = 0; i < tornamentCount; i++) { 
        let stage = input[index];
        index++;
    
        if (stage === 'W') {
            points+=2000;
            wins++;
            totalMatchesCount++;
        }else if (stage === 'F') { 
            points+=1200;
            totalMatchesCount++;
        }else if(stage === 'SF') { 
            points+=720;
            totalMatchesCount++;
        }


    }

    let totalPoints = startingPoints + points;
    let averagePoints = points / totalMatchesCount;
    let p1w = (wins / totalMatchesCount) * 100;

    console.log(`Final points: ${totalPoints}`);
    console.log(`Average points: ${Math.floor(averagePoints)}`);
    console.log(`${p1w.toFixed(2)}%`);

 
}
tennisRanklist(["7",
"1200",
"SF",
"F",
"W",
"F",
"W",
"SF",
"W"])