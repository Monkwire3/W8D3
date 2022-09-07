Array.prototype.uniq = function() {
    const uniq_items = [];
    for (let i = 0; i < this.length; i++) {
        if (uniq_items.includes(this[i])) {
            continue;
        } else { 
            uniq_items.push(this[i]);
        };
    };
    return uniq_items;
};
console.log([1, 2, 3, 1, 3, 2].uniq());

Array.prototype.twoSum = function() {
    const pairs = [];
    for (let i = 0; i < this.length; i++) {
        for (let j = 0; j < i; j++) {
            if (this[i] + this[j] === 0) {
                pairs.push([i, j]);
            };
        };
    };
    return pairs;
};

console.log([1,-1, -1, 3, 2, -2].twoSum());

Array.prototype.transpose = function() {
    const transposed =  [];
    console.log(this)

    for (let i = 0; i < this[0].length; i++) {
        let sub = [];
        for (let j = 0; j < this.length; j++) {
            console.log(`i: ${i}; j: ${j}`)
            sub.push(this[j][i]);
        };
        transposed.push(sub);
    };

    return transposed;
}


console.log([[1, 2, 3], [4, 5, 6], [7, 8, 9]].transpose());
console.log([[1, 2, 3], [4, 5, 6]].transpose());




