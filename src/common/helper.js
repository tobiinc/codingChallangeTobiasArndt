import hash from 'object-hash';
import uuid from 'uniqid';

export function NOOP() {
    // no operation
}

export function getKey(element, useStringify = false) {
    if (!element) return uuid();
    if (element instanceof String) return element;
    if (useStringify) return JSON.stringify(element).replace(/ /g, '');
    return hash(element);
}

export function preventDefault(e) {
    e.preventDefault();
}

export function flatten(arr) {
    return arr.reduce((flat, toFlatten) => {
        return flat.concat(Array.isArray(toFlatten) ? flatten(toFlatten) : toFlatten);
    }, []);
}