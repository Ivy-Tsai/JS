// number -> string
let x = 123
console.log('數字變字串：'+typeof x , x)
console.log(typeof x.toString(),x.toString())
console.log(typeof String(x),String(x))

// string -> number
let y = "3.14"
let z = " "
let s = "99 88 77"

console.log('字串變數字：' + typeof s, s)
console.log(typeof Number(y), Number(y))
console.log(typeof Number(z), Number(z))
console.log(typeof Number(s), Number(s)) //NaN 非數字，不等於任何值包括自身

// 日期 -> String
let date = Date()
console.log(date, typeof date)

//自動轉換
let a = 5 + null     // null -> 0
let b = '5'+ null    // null -> "null"
let c = '5'+ 2       // 2 -> "2"
let d = '5'- 1       // '5' -> 5
console.log('a=' +a)
console.log('b=' +b)
console.log('c=' +c)
console.log('d=' +d)

//一元運算符 “＋” ，可將變數轉換為number (type)
let p = "5"   // string
let k = +p    // number

console.log('k='+k, typeof k )

//若變數不能轉換，仍然是一個number，但值 = NaN(Not a number)
let m = "Ivy"
let n = +m

console.log('n='+n, typeof n)