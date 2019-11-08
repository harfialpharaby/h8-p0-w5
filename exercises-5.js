function attack(damage) {
    // Code disini
    return damage-2;
}

function damageCalculation(numberOfAttacks, damagePerAttack) {
    // Code disini
    var res = 0;
    for (let i = 0; i < numberOfAttacks; i++) {
        res += attack(damagePerAttack);
    }

    return res;
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90