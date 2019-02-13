function sum (...arg) {
    return arg.reduce((acc, el) => acc + el, 0);
};

function min (...arg) {
    return arg.reduce((acc, el) => acc - el, 0);
};

function pow (a, b) {
    return Math.pow(a, b);
};

export { pow, sum, min };