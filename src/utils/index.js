export function cache(fn) {
    const cache = {};

    return async (...args) => {
        const cacheKey = JSON.stringify(args);
        const cachedValue = cache[cacheKey];

        if (cachedValue) {
            console.log('From cache', cache);
            return cachedValue;
        }

        const result = await fn(...args);

        cache[cacheKey] = result;

        return result;
    };
}