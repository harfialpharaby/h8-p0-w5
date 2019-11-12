function changeVocals(str) {
    //code di sini
    //(ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)
    var ubah;
    switch (str.toLowerCase()) {
        case 'a':
            ubah = 'b';
            break;
        case 'i':
            ubah = 'j';
            break;
        case 'u':
            ubah = 'v';
            break;
        case 'e':
            ubah = 'f';
            break;
        case 'o':
            ubah = 'p';
            break;
    }

    return str === str.toLowerCase() ? ubah : ubah.toUpperCase();
}

function reverseWord(str) {
    //code di sini
    if (str.length === 0) {
        return '';
    }

    switch (str[str.length - 1].toLowerCase()) {
        case 'a':
        case 'i':
        case 'u':
        case 'e':
        case 'o':
            res = setLowerUpperCase(changeVocals(str[str.length - 1]));
            break;
        case ' ':
            res = removeSpaces(str[str.length - 1]);
            break;
        default:
            res = setLowerUpperCase(str[str.length - 1]);
            break;
    }

    return res += reverseWord(str.slice(0, str.length - 1));
}

function setLowerUpperCase(str) {
    //code di sini    
    return str === str.toLowerCase() ? str.toUpperCase() : str.toLowerCase();
}

function removeSpaces(str) {
    //code di sini
    return '';
}

function passwordGenerator(name) {
    //code di sini
    return name.length >= 5 ? reverseWord(name) : 'Minimal karakter yang diinputkan adalah 5 karakter';
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'