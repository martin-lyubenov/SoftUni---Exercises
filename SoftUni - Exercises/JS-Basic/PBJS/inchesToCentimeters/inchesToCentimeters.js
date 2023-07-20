function inchToCm (input) {

    let inch = Number(input[0]);
    let inchRation = 2.54;

    let cm = inch * inchRation ;

    console.log(cm);
}
inchToCm (['5','7']);