function oscars(input) {
    index = 0;
    let name = input[index];
    index++;

    let initialPoints = Number(input[index]);
    index++;

    let amountJudges = Number(input[index]);
    index++;

    for (let i = 0; i < amountJudges; i++) {
        let judgeName = input[index];
        index++;
        let judgePoints = Number(input[index]);
        index++;

        let res = (judgeName.length * judgePoints) / 2;
        initialPoints += + res;

        if (initialPoints > 1250.5) {
            console.log(`Congratulations, ${name} got a nominee for leading role with ${initialPoints.toFixed(1)}!`);
            break;
        }

    }

    if (initialPoints < 1250.5) {
        let diff = Math.abs(initialPoints - 1250.5);
        console.log(`Sorry, ${name} you need ${diff.toFixed(1)} more!`);
    }


}
oscars(["Zahari Baharov",

    "205",

    "4",

    "Johnny Depp",

    "45",

    "Will Smith",

    "29",

    "Jet Lee",

    "10",

    "Matthew Mcconaughey",

    "39"])