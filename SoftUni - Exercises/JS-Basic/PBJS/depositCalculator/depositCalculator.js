function depositCalculator (input) { 

    let depositSum = Number(input[0]);
    let depositTime = Number(input[1]);
    let annualInterestRate = Number(input[2]);

    let calculatorAnnualInterest = depositSum * (annualInterestRate/100);
    let monnthlyInterest = calculatorAnnualInterest / 12;
    let total = depositSum + (depositTime*monnthlyInterest);

    console.log(total);

}
depositCalculator(['2350','6','7']);