/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
    for(let i = digits.length - 1; i >= 0; i--) {
        if(digits[i] === 9) {
            digits[i] = 0
        } else {
            digits[i] += 1
            return digits;
        }
    }
    return [1, ...digits];
 };


console.log('Test 1: ', plusOne([9,2,1,3]))
console.log('Test 2: ', plusOne([9,9,9]))
 