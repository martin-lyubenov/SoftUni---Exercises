function ontTimeForTheExam(input) {
    
    let examH = Number(input[0]);
    let examM = Number(input[1]);
    let arrivalH = Number(input[2]);
    let arrivalM = Number(input[3]);

    let timeExam = examH * 60 + examM;
    let timeStudent = arrivalH * 60 + arrivalM;

    let leftM = Math.abs(timeExam - timeStudent);
    let tooEarlyOrTooLateH = Math.floor(leftM / 60);
    let tooEarlyOrTooLateM = (leftM % 60);

    let late = timeStudent > timeExam ;
    let onTime = timeExam === timeStudent ;
    let early = (timeExam - timeStudent) <= 30 && timeExam !== timeStudent && !(timeStudent > timeExam);
    let tooEarly = (timeExam - timeStudent) > 30 ;

    if (tooEarlyOrTooLateM === 0) {
        tooEarlyOrTooLateM = tooEarlyOrTooLateM + '0';
    }

    if (early === true) {
        console.log(`On time`);
        console.log(`${leftM} minutes before the start`);

    } else if (tooEarly === true && leftM <60) { 
        console.log(`Early`); 
        console.log(`${leftM} minutes before the start`);
    }else if (tooEarly === true && leftM >=60) { 

        console.log(`Early`); 
        console.log(`${tooEarlyOrTooLateH}:${tooEarlyOrTooLateM} hours before the start`);
    } else if ( onTime === true) { 
        console.log(`On time`);

    }else if (late === true && leftM <60) {
        console.log(`Late`);
        console.log(`${leftM} minutes after the start`);
     }else if (late === true && leftM >=60) { 
        console.log(`Late`);
        console.log(`${tooEarlyOrTooLateH}:${tooEarlyOrTooLateM} hours after the start`);
     }

}
ontTimeForTheExam(["15", "00", "16", "00"])