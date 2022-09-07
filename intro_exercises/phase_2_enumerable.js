Array.prototype.myEach = function(callback)  {
    for (let i = 0; i < this.length; i++) {
       callback(this[i]);
    };
};

[1, 2, 3, 4, 5].myEach((el) => {console.log(el * 2)})


Array.prototype.myMap = function(callback) {
    const mapped = [];
    for (let i = 0; i < this.length; i++) {
        mapped.push(callback(this[i]));
    }
    return mapped;
}

Array.prototype.myReduce = function(callback, initialValue = this[0]) {
    let accum = initialValue 
    for (let i = 0; i < this.length; i++) {
        accum = callback(accum, this[i]) 
    }
    return accum;
}

