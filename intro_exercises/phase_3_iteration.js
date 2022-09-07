Array.prototype.bubbleSort = function() {
    const sorted = this.map((ele) => ele );
    let modified = true;
    while (!modified) {
        modified = false;
        for(let i = 0; i < sorted.length - 1; i++) {
            if (sorted[i] > sorted[i + 1]) { 
               sorted[i], sorted[i + 1], sorted[i + 1], sorted[i];  
                modified = true;
            };
        };
    } ;
    return sorted;
};

Array.prototype.substrings = function() {
    const subs = [];

    for (let i = 0; i < this.length - 1; i++) {
        for (let j = 1; j < this.length; j++) {
            if (j > i) {
                subs.push(this[i][j]);
            };
        };
    };
    return subs;
};


