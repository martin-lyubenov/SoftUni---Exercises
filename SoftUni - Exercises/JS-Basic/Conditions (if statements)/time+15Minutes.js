function time15Minutes(input) {

    let h = Number(input[0]);
    let m = Number(input[1]);

    let totalM = h * 60 + m + 15;
    let totalH = Math.floor(totalM / 60);
    let leftM = totalM % 60;

    if (totalH > 23) {
        totalH = totalH - 24;
    }


    if (leftM < 10) {
        console.log(`${totalH}:0${leftM}`);
    } else {
        console.log(`${totalH}:${leftM}`);
    }

}   
time15Minutes(["12", "49"]);