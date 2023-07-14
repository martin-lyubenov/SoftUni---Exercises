function trainTheTrainers(input) {
  let index = 0;
  let amountJudges = Number(input[index]);
  index++;

  let command = input[index];
  index++;

  let counter = 0;
  let totalAVG = 0;

  while (command !== "Finish") {
    let presentation = command;
    counter++;

    let totalGrade = 0;
    for (i = 1; i <= amountJudges; i++) {
      let currentGrade = Number(input[index]);
      index++;

      totalGrade += currentGrade;
      totalAVG += currentGrade;
    }

    let averageGrade = totalGrade / amountJudges;

    console.log(`${presentation} - ${averageGrade.toFixed(2)}.`);

    command = input[index];
    index++;
  }

  totalAVG = totalAVG / (amountJudges * counter);

  console.log(`Student's final assessment is ${totalAVG.toFixed(2)}.`);
}
trainTheTrainers([
  "2",
  "Objects and Classes",
  5.77,
  4.23,
  "Dictionaries",
  4.62,
  5.02,
  "RegEx",
  2.88,
  3.42,
  "Finish",
]);
