/* 
 * returns x^n only for natural x;
 * 
 * @param {number} x Value to pow
 * @param {number} n Pow value
 * @return {number} result of operation
 */
function pow(x, n) {
    if (n > 0)
        return x * pow(x,n - 1);
    return 1;
}
console.log(pow(5,2));