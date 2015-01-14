/* 
 * returns x^n only for natural x;
 * 
 * @param {number} x Value to pow
 * @param {number} n Pow value
 * @return {number} result of operation
 */
function pow(x, n) {
    if (n > 1)
        return x * pow(n - 1);
    return 1;
}