/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
// async function promiseAll(functions) {
//     return Promise.all(functions.map(fn => fn()));
// }

var promiseAll = function(functions) {
    // Promise.all([promise1, promise2]).then(([value1, value2]) => value1 + value2)
    // console.log(functions.length, 'functions')
    // functions.map((fn) => {
    //     console.log(fn, 'function')
    //     Promise.all(functions.then(([new Promise()] => return )))
    // })
    return Promise.all(functions.map(fn => fn()))
};

/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */