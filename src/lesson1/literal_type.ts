//union type: number | string | boolean
//alias type
type numberStringBoolean = number | string | boolean;

const combine2 = (
    a: numberStringBoolean,
    b: numberStringBoolean,
    typeAs: 'as-number' | 'as-string' //literal type
    ): numberStringBoolean => {
    if (
        (typeof a == 'number' && typeof b == 'number') ||
        typeAs == 'as-number'
    ) {
        return (+a) + (+b);
    } else if (
        (typeof a == 'string' && typeof b == 'string') ||
        typeAs == 'as-string'
    ){
        return a.toString() + b.toString();
    }else {
        return a && b
    }
}
console.log(combine2(1,2,'as-number'));
console.log(combine2('1','2','as-number'));
console.log(combine2('FPT','Polytechnic','as-string'));
console.log(combine2(true,false,'as-string'));