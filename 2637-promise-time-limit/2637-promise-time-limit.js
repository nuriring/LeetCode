/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    return async function(...args) {
        
        // // 시간 초과를 나타내는 Promise 생성
        // const timeoutPromise = new Promise((_, reject) => {
        //     setTimeout(() => {
        //         reject("Time Limit Exceeded");
        //     }, t);
        // });
        
        // // 주어진 함수 실행과 시간 초과 Promise를 경쟁시킴
        // return Promise.race([fn(...args), timeoutPromise]);

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject("Time Limit Exceeded")
            }, t)
            fn(...args).then(resolve).catch(reject)
        })

    };
};
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */