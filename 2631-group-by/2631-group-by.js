/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    console.log(fn, '뭐지')
    const res = new Map()
    this.map((item) => {
        const key = fn(item)
        console.log(key, '안녕 난 key야')
        res.set(key)
        // 빈 배열을 저장
        res.set(key, []);
    })
    this.map((item) => {
        const key = fn(item)

        if (res.has(key)) {
            res.get(key).push(item)
        }

    })
    console.log(res, 'res안녕')
    const obj = Object.fromEntries(res);
    
    return obj

};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */