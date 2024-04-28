//check 變數 type
let a = "Ivy"
let b = 3.14157
let c = true
let d = ['dog','cat']
let e = {name:'Ivy', age:24}
let f = function(){}

console.log(typeof a,'、'+typeof b,'、'+typeof c,'、'+typeof d,'、'+typeof e,'、'+typeof f)


// Null Undefined 差別
let x = null   //object
let y          //undefined
console.log ('null= '+typeof x, ',undefined= '+typeof y)

//null 和 undefined 的值相等，但type不同
z = null === undefined  // 全等比較（不容許在比較時，自動轉type）
q = null == undefined   // 相等比較（比較時可自動轉type）
console.log(z,q)