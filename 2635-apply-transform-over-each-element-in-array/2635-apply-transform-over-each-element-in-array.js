/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    const resArr = new Array()
    for (i=0; i<arr.length; i++) {
        console.log(i, 'i')
        console.log(arr[i], '왜요')
        const arg = arr[i]
        const res = fn(arg, i)
        resArr.push(res)
    }
    console.log(resArr, 'resArr')
    return resArr
};