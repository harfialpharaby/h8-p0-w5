function cariPelaku(str) {
    // you can only write your code here!
    return str.match(/abc/g).length;

    // logic manual
    // let res = 0;
    // let count = 0;

    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] === 'a' && count === 0) {
    //         count++;
    //     } else if (str[i] === 'b' && count === 1) {
    //         count++;
    //     } else if (str[i] === 'c' && count === 2) {
    //         count++;
    //     } else {
    //         count = 0;
    //     }

    //     if (count === 3) {
    //         res++;
    //         count = 0;
    //     }
    // }

    return res;
}

// TEST CASES
console.log(cariPelaku('mabcvabc')); // 2
console.log(cariPelaku('abcdabdc')); // 1
console.log(cariPelaku('bcabcac')); // 1
console.log(cariPelaku('abcabcabc')); // 3
console.log(cariPelaku('babcbacabc')); // 2