do {
    var num1 = prompt("Regem Daxil Edin")
} while (!parseInt(num1) || num1 < 0);
if (num1 > 0 && num1 < 50) {
    var count = 0;
    for (let a = 1; a <= num1; a++) {
        if (a % 3 == 0) {
            count++;
        }
    }



    alert(`${num1} edede ${count} sayda 3 e bolunen eded var`)

}
else if (num1 > 49 && num1 < 100) {
    var count = 0;
    for (let a = 1; a <= num1; a++) {
        if (a % 5 == 0) {
            count++;
        }
    }
    alert(`${num1} edede qeder ${count} sayda 5 e bolunen eded var`)
}


else {
    var count = 0;
    for (let a = 1; a <= num1; a++) {
        if (a % 8 == 0) {
            count++;
        }
    }


    alert(`${num1} edede qeder ${count} sayda 8 e bolunen eded var`)



}