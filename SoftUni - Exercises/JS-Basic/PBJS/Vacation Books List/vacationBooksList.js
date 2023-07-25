function vacationBooksListTimer (input) { 

    let pageNumbersCurrentBook = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let numberOfDaysToReadBook = Number(input[2]);

    let totalTimeToReadBook = pageNumbersCurrentBook / pagesPerHour;
    let readHoursPerDay = totalTimeToReadBook / numberOfDaysToReadBook;

    console.log(readHoursPerDay);

}
vacationBooksListTimer (['432','15','4']);