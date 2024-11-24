/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const resArr = new Array()
    for (i=0; i<arr.length; i++) {
        const arg = arr[i]
        const res = fn(arg, i)
        console.log(res, '뭐지')
        if (res) {
            resArr.push(arg)
        }
    }
    return resArr
};