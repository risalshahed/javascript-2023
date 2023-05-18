let a = 5;
let b = a;
b = 6;

console.log(a, b);

const x = {
    a: 14,
    b: 15,
}

const y = x;

y.a = 202;

console.log(`x's a is ${x.a} & y's a is ${y.a}`);