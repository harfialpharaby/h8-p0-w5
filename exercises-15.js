function makanTerusRekursif(waktu) {
    // you can only write your code here!
    var res;
    if (waktu === 0) {
        res = 0;
    } else if (waktu <= 15 && waktu > 0) {
        res = 1;
    } else {
        res = 1 + makanTerusRekursif(waktu-15);
    }

    return res;
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0