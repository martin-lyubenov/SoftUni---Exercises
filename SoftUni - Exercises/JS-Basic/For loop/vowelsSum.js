function vowelsSum(input) {

    let data = input[0];
    let total = 0;

    for (let i = 0; i < data.length; i++) {
        let letter = data[i];

        switch (letter) {
            case 'a': total = total + 1; break;
            case 'e': total = total + 2;break;
            case 'i': total = total + 3;break;
            case 'o': total = total + 4;break;
            case 'u': total = total + 5;break;
        }
    }

    console.log(total);

}
vowelsSum(["hi"])


