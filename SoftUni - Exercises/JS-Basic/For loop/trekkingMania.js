function trekkingMania(input) {
    index = 0;
    let groups = Number(input[index]);
    index++;

    let musalaCount = 0;
    let montblancCount = 0;
    let kilimanjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;

    for(let i = 0; i < groups; i++) { 
        let currentCount = Number(input[index]);
        index++;

        if (currentCount <= 5 ) {
            musalaCount+=currentCount; 
        }else if(currentCount <=12) { 
            montblancCount+=currentCount;
        }else if(currentCount <=25) {
            kilimanjaroCount+=currentCount;
        }else if(currentCount <= 40) {
            k2Count+=currentCount;
        }else { 
            everestCount+=currentCount;
        }

    }

    let totalCount = musalaCount + montblancCount + kilimanjaroCount + k2Count + everestCount;

    let p1 = (musalaCount / totalCount) * 100;
    let p2 = (montblancCount / totalCount) * 100;
    let p3 = (kilimanjaroCount / totalCount) * 100;
    let p4 = (k2Count / totalCount) * 100;
    let p5 = (everestCount / totalCount) * 100;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);

}
trekkingMania(["5",
"25",
"41",
"31",
"250",
"6"])