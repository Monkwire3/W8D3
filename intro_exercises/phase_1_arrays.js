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