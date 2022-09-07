
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

function range(start, end) {
    if (start === end) {
        return [start];
    }
    let previous = range(start, end - 1);
    previous.push(end);
    return previous;
}

function fib(n) {
    if (n === 1) {
        return [];
    } else if (n === 1) {
        return [1]
    } else if (n === 2) {
        return [1, 1]    
    };
    
    const previous = fib(n-1);
    let slice = previous.slice(-2); 
    previous.push(slice[0] + slice[1]);
    return previous;
    // return previous.push(previous.slice(-1) + previous.slice(-2, -1));  
}

