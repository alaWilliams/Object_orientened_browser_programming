let a = 10

function selfSum(p) {
  return p + p;
}

let b = selfSum(a)

// console.log(b)


let c = {
  foo: 1,
  bar: 2,
}
let d = {
  foo: 5,
  bar: 6
}

// console.log(c.foo + d.bar)


//passing by reference
let e = c
e.foo = 10;

function selfSumObj(p) {
  p.foo = p.foo +p.bar;
  return p
}

let f = selfSumObj(c)
console.log(f)
console.log(c)

console.log(f === c)

// console.log(c.foo + d.bar)