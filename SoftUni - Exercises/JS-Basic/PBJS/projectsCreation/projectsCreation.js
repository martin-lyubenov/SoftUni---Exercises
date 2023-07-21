function projectsCreation (input) {

    let name = input[0];
    let projectAmount = Number(input[1]);

    let workHours = projectAmount * 3;

    console.log(`The architect ${name} will need ${workHours} hours to complete ${projectAmount} project/s.`)

}
projectsCreation (['George','4']);