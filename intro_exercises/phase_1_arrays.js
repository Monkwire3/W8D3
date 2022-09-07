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


Array.prototype.transpose = function() {
    const transposed =  [];

    for (let i = 0; i < this[0].length; i++) {
        let sub = [];
        for (let j = 0; j < this.length; j++) {
            sub.push(this[j][i]);
        };
        transposed.push(sub);
    };

    return transposed;
}





