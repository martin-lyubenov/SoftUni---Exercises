function areaOfFigures (input) {

    let result = input[0];

    if (result === 'square') {
        let side = Number(input[1]);
        console.log(`${(side*side).toFixed(3)}`);
    }else if (result === 'rectangle') {
        let side1 = Number(input[1]);
        let side2 = Number(input[2]);
        console.log(`${(side1*side2).toFixed(3)}`);
    } else if (result === "circle") {
        let sideCircle = Number(input[1]);
            console.log(`${(sideCircle*sideCircle*Math.PI).toFixed(3)}`); 
    }else if(result === "triangle") {
        let side1Triangle = Number(input[1]);
        let side2Triangle = Number(input[2]);
        console.log(`${(side1Triangle*side2Triangle/2).toFixed(3)}`); 
    }

}
areaOfFigures (['triangle','4.5','20']);