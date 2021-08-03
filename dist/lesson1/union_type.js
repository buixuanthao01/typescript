"use strict";
//union type: number | string | boolean
var combine = function (a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else if (typeof a == 'string' && typeof b == 'string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(combine(1, 2));
console.log(combine('1', '2'));
console.log(combine('FPT', 'Polytechnic'));
console.log(combine(true, false));
