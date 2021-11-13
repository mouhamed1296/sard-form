export const _Object = {
    isEmpty: (obj) => (obj && Object.keys(obj).length === 0 && Object.getPrototypeOf(obj) === Object.prototype),
    toMap: (obj) => (new Map(Object.entries(obj))),
    getFirstEntry: (obj) => (obj[Object.keys(obj)[0]]),
    getLastEntry: (obj) => {
        let keys = Object.keys(obj)
        return obj[keys[keys.length - 1]]
    },
    getEntry: (obj, index) => (obj[Object.keys(obj)[index]]),
    getEntries: (obj, startIndex, stopIndex) => {
        return Object.fromEntries(
            Object.keys(obj).filter(
                (entrie, index) => (index >= startIndex && index <= stopIndex)
            ).map(
                key => [key, obj[key]]
            )
        )
    },
    filter: (obj, filter_func) => {
        if (typeof filter_func === "function") {
            return Object.fromEntries(
                Object.entries(obj).filter(([key, value], index) => filter_func(value, key, index))
            )
        }
    },
    map: (obj, map_func) =>{ 
        if (typeof map_func === "function")
            return Object.fromEntries(
                Object.entries(obj).map(
                    ([key, value], index) => [key, map_func(value, key, index)]
                )
            )
    },
    forEach: (obj, fn) => {
        Object.entries(obj).forEach(([key, value], index) => {
            fn(value, key, index)
        })
    },
    freeze: () => {

    }
}