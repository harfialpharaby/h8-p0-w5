function hapusSimbol(str) {
    // you can only write your code here!
    // return str.replace(/[^a-z0-9]/gi, '');

    if (str.length === 0) {
        return '';
    }

    var alfanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';
    var ketemu = false;
    for (let i = 0; i < alfanumeric.length; i++) {
        if (str[0].toLowerCase() === alfanumeric[i]) {
            ketemu = true;
            break;
        }
    }

    if (ketemu) {
        return str[0] + hapusSimbol(str.slice(1, str.length));
    } else {
        return '' + hapusSimbol(str.slice(1, str.length));
    }
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100