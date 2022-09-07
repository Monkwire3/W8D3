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
