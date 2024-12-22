/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    // console.log(fn.toString(), 'fn이 뭐가 들어오지?')
    const cache = new Map();
    const callCount = Symbol('callCount')
    fn[callCount] = 0; 
    // console.log(fn[callCount], 'callCount 찍어보기')
    return function(...args) {
        // console.log(args, 'args로 뭐가 들어오지?')
        const key = JSON.stringify(args);
        // console.log(key, 'key찍어보기')
        if (!cache.has(key)) {
            cache.set(key, fn(...args));
            // console.log(cache, '딕셔너리 찍어보기')
            fn[callCount]++;
        }
        return cache.get(key)
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */