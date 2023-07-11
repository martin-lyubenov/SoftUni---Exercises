function building(input) {
    let amountFloors = Number(input[0]);

    let amountRooms = Number(input[1]);

    let allNumbers = '';

    for(let currentFloor = amountFloors; currentFloor >= 1; currentFloor--) { 
        for(let currentRoom = 0; currentRoom <= amountRooms - 1;  currentRoom++) { 
            if (currentFloor === amountFloors) {
                allNumbers+=`L${currentFloor}${currentRoom} `
            } 
            else if(currentFloor % 2 === 0) { 
                allNumbers+=`O${currentFloor}${currentRoom} `
                // console.log(`O${currentFloor}${currentRoom} `);
            } else if (currentFloor % 2 !== 0) { 
                allNumbers+=`A${currentFloor}${currentRoom} `
                // console.log(`A${currentFloor}${currentRoom} `);
            }
        }
        
        allNumbers =`${allNumbers}\n`
        
    }

    console.log(`${allNumbers}`);

}
building(["4", "4"])