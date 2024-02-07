/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    while(low <= high) {
        let mid = Math.floor(low + high) / 1;

        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < target) {
            low = mid + 1;
        } else {
            high = mid - 1;
        }
    }

    return low;
};

const arr1 = [1,2,4,5,8];
const target1 = 8;
const test1 = searchInsert(arr1, target1);

console.log('arr1: ', arr1);
console.log('target1: ', target1);
console.log('test1: ', test1);

