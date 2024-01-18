/*169. Majority Element
Solved
Easy
Topics
Companies
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.

 

Example 1:

Input: nums = [3,2,3]
Output: 3
Example 2:

Input: nums = [2,2,1,1,1,2,2]
Output: 2
 

Constraints:

n == nums.length
1 <= n <= 5 * 104
-109 <= nums[i] <= 109
*/

//approch 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let majorValue = nums[0]
    let votes = 1

    for (let i =1; i<nums.length; i++){
        if(votes == 0 ){
            votes++
            majorValue = nums[i]
        }else if(majorValue == nums[i]){
            votes++
        }else{
            votes--
        }
    } 

return majorValue
};


// i'm free friday 10am - 1pm 