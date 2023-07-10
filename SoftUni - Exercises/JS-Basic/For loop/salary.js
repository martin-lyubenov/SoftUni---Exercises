function salary(input) {
    
    let tabCount = Number(input[0]);
    let salary = Number(input[1]);

    let index = 1;
    let webSite = input[index];
    index++;

    let fine = 0;

    for (let i = 1; i <= tabCount; i++ ) { 
        webSite = input[index];
        index++;

        switch (webSite) {
            case 'Facebook': fine+= 150; break;
            case 'Instagram': fine+= 100; break;
            case 'Reddit': fine+= 50; break;
        }

    }

    let diff = Math.abs(salary - fine);

    if (fine >= salary) {
        console.log(`You have lost your salary.`);
    } else { 
        console.log(diff);
    }

}
salary(["3", "500", "Facebook", "Stackoverflow.com", "softuni.bg"])