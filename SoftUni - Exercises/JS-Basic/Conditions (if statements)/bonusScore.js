function bonusScore (input) { 

    let initialScorePoints = Number(input[0]);
    let bonusScorePoints = 0;
    

    if (initialScorePoints <= 100) {
        bonusScorePoints = 5;
    } else if (initialScorePoints <= 999) {
        bonusScorePoints = initialScorePoints * 0.2 ;
    }else if (initialScorePoints >= 1000) {
        bonusScorePoints = initialScorePoints * 0.1 ;
    }


    if (initialScorePoints % 2 === 0) {
        bonusScorePoints = bonusScorePoints + 1;
    }

    if (initialScorePoints % 10 === 5) {
        bonusScorePoints = bonusScorePoints + 2;
    }

    let finalScore = initialScorePoints + bonusScorePoints;

    console.log(bonusScorePoints);
    console.log(finalScore);

}
bonusScore (['15875']);