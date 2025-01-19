/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {
    console.log(obj.length)
    console.log(JSON.stringify(obj))
    console.log(Object.keys(obj))
    // if (obj.length === undefined && JSON.stringify(obj).includes('{}')) {
    //     return true
    // }

    // if (obj.length !== undefined && obj.length === 0) {
    //     return true
    // }

    if (!Object.keys(obj).length) {
        return true
    }

    return false
};