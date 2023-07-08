function evenPowersOf2(input) {
    
    let num = Number(input[0]);
    let result = 0;

    
    for (let i = 0; i <= num; i++) { 
     
        if (i % 2 === 0) {
            console.log(result = Math.pow(2,i));
        }
       
    }

}
evenPowersOf2(["3"]);