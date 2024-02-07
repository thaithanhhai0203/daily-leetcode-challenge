# 66. plus one | easy

You are given a **large integer** represented as an integer array `digits`, where each `digits[i]` is the `ith` digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading `0`'s.

Increment the large integer by one and return *the resulting array of digits*.

**Example 1:**

```
Input: nums = [1,3,5,6], target = 5
Output: 2
```

**Example 2:**

```
Input: nums = [1,3,5,6], target = 2
Output: 1
```

**Example 3:**

```
Input: nums = [1,3,5,6], target = 7
Output: 4
```

**Constraints:**

- `1 <= nums.length <= 104`
- `104 <= nums[i] <= 104`
- `nums` contains **distinct** values sorted in **ascending** order.
- `104 <= target <= 104`

## Intuition

Initially wanted to make a function variable to keep track of wether we needed to carry and was attempting to handle the edge case for if we needed to increase the size of the array in an over complicated way.

## **Approach**

Looping through the array starting at the last element, if a digit is a 9 we make it a zero and repeat. When we're able to add 1 without going over 9 we should break there, because there is no more work left to do. If we dont't find a number that isn't 9 (meaning we never reach the else condition in the loop), we should then create a new array with 1 as the first element followed by the array digits that got turned to all 0's.

## Complexity

- Time complexity: O(n)
- Space complexity: O(n)