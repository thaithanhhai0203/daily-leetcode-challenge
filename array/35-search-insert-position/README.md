# 35. Search Insert Position | Easy

***Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.***

You must write an algorithm with `O(log n)` runtime complexity.

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

Since the array is sorted and we need to achieve O(log n) runtime complexity, we can use binary search. Binary search is an efficient algorithm for finding a target element in a sorted array.

## Approach

### Initialize Pointers

- Initialize two pointers, low and high, to represent the range of elements in the array where the target may exist. Initially, set low = 0 and high = nums.length - 1.

### Binary Search

- Perform a binary search within the range [low, high].
- At each step, calculate the middle index as mid = (low + high) / 2.
- Compare the element at the middle index (nums[mid]) with the target.

### **Adjust Pointers**

- If nums[mid] is equal to the target, return mid as the index where the target is found.
- If nums[mid] is less than the target, adjust low to mid + 1.
- If nums[mid] is greater than the target, adjust high to mid - 1.

### **Handle Insertion Position**

- If the loop exits without finding the target, return the current value of low as the index where the target would be inserted.

## Complexity

- **Time complexity:**
    
    The time complexity of the provided solution is O(log n). This is because, in each iteration of the binary search, the search space is divided in half. The logarithmic time complexity arises from the fact that the algorithm repeatedly eliminates half of the remaining elements until the target is found or the search space is empty.
    
- **Space complexity:**
    
    The space complexity is O(1). The algorithm uses a constant amount of extra space regardless of the size of the input array. It only uses a few variables (low, high, mid) to perform the search, and the space required for these variables is independent of the input size. Therefore, the space complexity is constant.