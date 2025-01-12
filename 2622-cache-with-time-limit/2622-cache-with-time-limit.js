var TimeLimitedCache = function() {
    this.cacheMap = new Map()
};

/** 
 * @param {number} key
 * @param {number} value
 * @param {number} duration time until expiration in ms
 * @return {boolean} if un-expired key already existed
 */
TimeLimitedCache.prototype.set = function(key, value, duration) {
    let alreadyExists = false;
    if (this.cacheMap.has(key)) {
        clearTimeout(this.cacheMap.get(key).timeout)
        alreadyExists = true;
    }

    const timeout = setTimeout(() => {
        this.cacheMap.delete(key)
    }, duration)

    this.cacheMap.set(key, {value, timeout})
    console.log(this.cacheMap, '이렇게 해야되나')
    return alreadyExists
};

/** 
 * @param {number} key
 * @return {number} value associated with key
 */
TimeLimitedCache.prototype.get = function(key) {
    if (this.cacheMap.has(key)) {
        return this.cacheMap.get(key).value
    }
    return -1
};

/** 
 * @return {number} count of non-expired keys
 */
TimeLimitedCache.prototype.count = function() {
    return this.cacheMap.size
};

/**
 * const timeLimitedCache = new TimeLimitedCache()
 * timeLimitedCache.set(1, 42, 1000); // false
 * timeLimitedCache.get(1) // 42
 * timeLimitedCache.count() // 1
 */