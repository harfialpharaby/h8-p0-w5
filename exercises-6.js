function meleeRangedGrouping(str) {
    //your code here
    var temp = str.split(/[,-]/);
    var res = [
        [],
        []
    ];

    for (let i = 0; i < temp.length; i += 2) {
        temp[i + 1] === 'Ranged' ? res[0].push(temp[i]) : res[1].push(temp[i]);
    }

    return str.length === 0 ? [] : res;
}

// TEST CASE

console.log(meleeRangedGrouping('Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'));
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(meleeRangedGrouping('Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged'));
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping('')); // []