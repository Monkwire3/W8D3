
function exponent(base, exp) {
    if (exp === 1) {
        return base;
    };

    return base * exponent(base, exp - 1);
};


function sumRec(arr) {
    if (arr.length === 1) {
        return arr[0];
    };

    return arr[0] + sumRec(arr.slice(1));
};
