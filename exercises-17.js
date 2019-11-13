function kaliTerusRekursif(angka) {
    // you can only write your code here!
    if (angka < 10) {
        return angka;
    }

    let str = String(angka);
    let temp = 1;

    for (let i = 0; i < str.length; i++) {
        temp *= str[i];
    }

    if (temp >= 10) {
        return kaliTerusRekursif(temp);
    }
    return temp;
}

// TEST CASES
console.log(kaliTerusRekursif(669)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6