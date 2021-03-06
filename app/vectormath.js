/**
 * Created by James on 2017-01-28.
 */

function vector_add(v1, v2) {
    let result = [];

    if (v1.length != v2.length)
        throw new Error('Invalid vectors');

    for (let i = 0; i < v1.length; i++)
        result[i] = v1[i] + v2[i];

    return result;
}

function vector_subtract(v1, v2) {
    let result = [];

    if (v1.length != v2.length)
        throw new Error('Invalid vectors');

    for (let i = 0; i < v1.length; i++)
        result[i] = v1[i] - v2[i];

    return result;
}

function vector_magnitude(v) {
    let m = 0;
    for (let e of v) {
        m += e * e;
    }

    return Math.sqrt(m);
}

export default {
    add: vector_add,
    subtract: vector_subtract,
    magnitude: vector_magnitude
};