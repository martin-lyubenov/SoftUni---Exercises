function tradeCommissions(input) {

    let city = input[0];
    let sales = Number(input[1]);

    let commission = 0;

    if (sales >= 0 && sales <= 500) {
        switch (city) {
            case 'Sofia': commission = sales * 0.05; break;
            case 'Varna': commission = sales * 0.045; break;
            case 'Plovdiv': commission = sales * 0.055; break;
        }

    } else if (sales >= 501 && sales <= 1000) {
        switch (city) {
            case 'Sofia': commission = sales * 0.07; break;
            case 'Varna': commission = sales * 0.075; break;
            case 'Plovdiv': commission = sales * 0.08; break;
        }
    } else if (sales >= 1001 && sales <= 10000) {
        switch (city) {
            case 'Sofia': commission = sales * 0.08; break;
            case 'Varna': commission = sales * 0.10; break;
            case 'Plovdiv': commission = sales * 0.12; break;
        }
    } else if (sales > 10000) {
        switch (city) {
            case 'Sofia': commission = sales * 0.12; break;
            case 'Varna': commission = sales * 0.13; break;
            case 'Plovdiv': commission = sales * 0.145; break;
        }
    }

    if (commission === 0) {
        console.log(`error`);
    } else {
        console.log(commission.toFixed(2));
    }


}
tradeCommissions(["Varna",
    "-1000"]);