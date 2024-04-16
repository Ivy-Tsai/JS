//字串：插入到雙/單引號中的任何字
//可用索引位置，訪問字串中的每個字

const Eng = "ABCDEFG"
let letter = Eng[2]

console.log(letter)


//單/雙引號 。 跳脫字元 “\”
let x = "It's go\\od"  // 輸出 \\ -> \
let y = 'It\'s good'   // 輸出 \' -> '
let z = "I a\nm 'Ivy'" // 輸出 \n -> 換行
let q = "I am \"Ivy\"" // 輸出 \" -> "

console.log(x)
console.log(y)
console.log(z)
console.log(q)

//字串長度 length
var txt = "Hello World"
console.log(txt.length)
var txt = "ABRGDGTRWCXTGT"
console.log(txt.length)


//字串是原始值，也可用“new”將字串定義成一個”對象(object)“
let a = "Ivy"                 //string
let b = new String("Ivy")     //object

console.log(typeof a,typeof b)

//不要創建 String 對象。會拖慢執行速度，且可能產生其他副作用？ 
//那什麼時候需要把字串定義成object？ Ａ：基本上不太會