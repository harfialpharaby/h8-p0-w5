function sorting(arrNumber) {
    // code di sini
    var temp;

    for (let i = 0; i < arrNumber.length-1; i++) {
        for (let j = 0; j < arrNumber.length-1-i; j++) {
            if (arrNumber[j] > arrNumber[j+1]) {
                temp = arrNumber[j];
                arrNumber[j] = arrNumber[j+1];
                arrNumber[j+1] = temp;
            }
        }
    }
    
    return arrNumber;
}

function getTotal(arrNumber) {
    // code di sini
    var count = 0;
    var res = '';

    for (let i = arrNumber.length-1; i >= 0; i--) {
        if (arrNumber[i] === arrNumber[arrNumber.length-1]) {
            count++;
        } else {
            break;
        }
    }

    if (count > 0) {
        res = `angka paling besar adalah ${arrNumber[arrNumber-1]} dan jumlah kemunculan sebanyak ${count} kali`;
    }

    return res;
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