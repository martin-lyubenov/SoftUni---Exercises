function ontTimeForTheExam(input) {

    let examH = Number(input[0]);
    let examM = Number(input[1]);
    let arrivalH = Number(input[2]);
    let arrivalM = Number(input[3]);

    let timeExam = examH * 60 + examM;
    let timeStudent = arrivalH * 60 + arrivalM;

    let diff = Math.abs(timeExam - timeStudent);
    let h = Math.floor(diff / 60);
    let m = (diff % 60);

    if (timeExam < timeStudent) {
        console.log(`Late`);
        if (h < 1) {
            console.log(`${m} minutes after the start`);
        } else if (m < 10) {
            console.log(`${h}:0${m} hours after the start`);
        } else {
            console.log(`${h}:${m} hours after the start`);
        }

    } else if (timeStudent === timeExam || timeExam - timeStudent <= 30) {
        console.log(`On Time`);
        if (h < 1 && timeStudent !== timeExam) {
            console.log(`${m} minutes before the start`);
        }

    } else if (timeExam > timeStudent) {
        console.log(`Early`);
        if (h < 1) {
            console.log(`${m} minutes before the start`);
        } else if (m < 10) {
            console.log(`${h}:0${m} hours before the start`);
        } else {
            console.log(`${h}:${m} hours before the start`);
        }
    }

}
ontTimeForTheExam(["9",

    "45",

    "8",

    "45"])