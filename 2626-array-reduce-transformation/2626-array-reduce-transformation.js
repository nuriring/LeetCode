/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function(nums, fn, init) {
    let res
    for (i=0; i<nums.length; i++) {
        const arg = nums[i]
        if (i===0) {
            res = fn(init, arg)
            console.log(res, '최초계산')
        } else {
            res = fn(res, arg)
        }
    }
    return res || init || 0 
};