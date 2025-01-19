/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const resArr = []
    let subArr = [];
    for (let i = 0; i < arr.length; i++) {
        subArr.push(arr[i])

        if (subArr.length === size) {
            resArr.push(subArr)
            subArr = []
        }
    }

    if (subArr.length > 0) {
        resArr.push(subArr)
    }

    return resArr
 
};
