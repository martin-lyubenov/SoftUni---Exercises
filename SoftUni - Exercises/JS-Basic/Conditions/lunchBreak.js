function lunchBreak (input) { 

    let tvSeries = input[0];
    let runtime = Number(input[1]);
    let time = Number(input[2]);

    let restTime = time * 0.125;
    let relaxTime = time * 0.25;

    let neededTime = runtime + restTime + relaxTime;
    let extraTime = Math.abs(time - neededTime);

    if (neededTime <= time) {

        console.log(`You have enough time to watch ${tvSeries} and left with ${Math.ceil(extraTime)} minutes free time.`);    
    } else {
        console.log(`You don't have enough time to watch ${tvSeries}, you need ${Math.ceil(extraTime)} more minutes.`);
    }

}
lunchBreak (["Teen Wolf",

"48",

"60"]);