function sorting(arrNumber) {
    // code di sini
    // base case
    if (arrNumber.length === 0) {
        return [];
    }

    var indexKecil, tempKecil, newArr = [];
    for (let i = 0; i < arrNumber.length; i++) {
        if (indexKecil === undefined || arrNumber[indexKecil] > arrNumber[i]) {
            indexKecil = i;
        }
    }

    // loop menggantikan logic splice
    for (let i = 0; i < arrNumber.length; i++) {
        if (i !== indexKecil) {
            newArr.push(arrNumber[i]);
        }
    }

    return [arrNumber[indexKecil]].concat(sorting(newArr));
}

function getTotal(arrNumber) {
    // code di sini
    if ((arrNumber.length > 0 && arrNumber[arrNumber.length - 2] === undefined) || arrNumber[arrNumber.length - 2] !== arrNumber[arrNumber.length - 1]) {
        return 1;
    }

    var newArr = [];
    // looping menggantikan logic splice
    for (let i = 0; i < arrNumber.length - 1; i++) {
        newArr.push(arrNumber[i])
    }
    return arrNumber.length > 0 ? 1 + getTotal(newArr) : '';
}

function mostFrequentLargestNumbers(arrNumber) {
    var listSort = sorting(arrNumber);
    var countHighest = getTotal(listSort);

    return countHighest;
}

console.log(mostFrequentLargestNumbers([2, 8, 4, 6, 8, 5, 8, 4]));
//'angka paling besar adalah 8 dan jumlah kemunculan sebanyak 3 kali'

console.log(mostFrequentLargestNumbers([122, 122, 130, 100, 135, 100, 135, 150]));
//'angka paling besar adalah 150 dan jumlah kemunculan sebanyak 1 kali'

console.log(mostFrequentLargestNumbers([1, 1, 1, 1]));
//'angka paling besar adalah 1 dan jumlah kemunculan sebanyak 4 kali'

console.log(mostFrequentLargestNumbers([]));
//''