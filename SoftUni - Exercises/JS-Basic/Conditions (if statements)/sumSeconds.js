function sumSeconds (input) {

let timeFirst = Number(input[0]);
let timeSecond = Number(input[1]);
let timeThird = Number(input[2]);

let totalTime = timeFirst + timeSecond + timeThird;

let timeInMin = Math.floor(totalTime / 60);
let timeInSec = totalTime % 60;

if (timeInSec < 10) {
    console.log(`${timeInMin}:0${timeInSec}`);
} else {
    console.log(`${timeInMin}:${timeInSec}`);
}

}
sumSeconds (["14", "12", "10"]);