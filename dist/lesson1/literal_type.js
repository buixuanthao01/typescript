"use strict";
var combine2 = function (a, b, typeAs //literal type
) {
    if ((typeof a == 'number' && typeof b == 'number') ||
        typeAs == 'as-number') {
        return (+a) + (+b);
    }
    else if ((typeof a == 'string' && typeof b == 'string') ||
        typeAs == 'as-string') {
        return a.toString() + b.toString();
    }
    else {
        return a && b;
    }
};
console.log(combine2(1, 2, 'as-number'));
console.log(combine2('1', '2', 'as-number'));
console.log(combine2('FPT', 'Polytechnic', 'as-string'));
console.log(combine2(true, false, 'as-string'));
