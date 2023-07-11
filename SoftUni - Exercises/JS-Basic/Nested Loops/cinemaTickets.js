function cinemaTickets(input) {
    let index = 0;
    let command = input[index];
    index++;

    let totalSoldTicket = 0;
    let studentTicket = 0;
    let standardTicket = 0;
    let kidTicket = 0;

    while (command !== 'Finish') {
        let nameMovie = command;
        let secondCommand = command;
        let totalSeats = Number(input[index]);
        index++;


        let soldTicket = 0;

        while (secondCommand !== 'End') {
            let typeTicket = input[index];

            switch (typeTicket) {
                case 'student': studentTicket++; soldTicket++; totalSoldTicket++; break;
                case 'standard': standardTicket++; soldTicket++; totalSoldTicket++; break;
                case 'kid': kidTicket++; soldTicket++; totalSoldTicket++; break;
            }

            secondCommand = input[index];
            if (secondCommand === 'Finish') {
                break;
            }
            index++;

            if (soldTicket >= totalSeats) {
                break;
            }
        }

        let usedSeatsP = soldTicket / totalSeats * 100;


        console.log(`${nameMovie} - ${usedSeatsP.toFixed(2)}% full.`);

        command = input[index];
        index++;

    }


    let studentTicketP = studentTicket / totalSoldTicket * 100;
    let standardTicketP = standardTicket / totalSoldTicket * 100;
    let kidTicketP = kidTicket / totalSoldTicket * 100;

    console.log(`Total tickets: ${totalSoldTicket}`);
    console.log(`${studentTicketP.toFixed(2)}% student tickets.`);
    console.log(`${standardTicketP.toFixed(2)}% standard tickets.`);
    console.log(`${kidTicketP.toFixed(2)}% kids tickets.`);




}
cinemaTickets(["Shutter Island",
    "9",
    "standard",
    "standard",
    "standard",
    "student",
    "student",
    "student",
    "kid",
    "kid",
    "kid",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"])




9
kid
kid
kid
Rush
9
standard
standard
standard
student
student
student
kid
kid
kid
Deadpool
9
standard
standard
standard
student
student
student
kid
kid
kid
Finish