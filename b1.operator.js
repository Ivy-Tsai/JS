// (=) 賦值
let y = 5;
let z = 2;
let x =  y + z //表達式

console.log('x=' +x )

//算術運算子（+-x/% ++ -- ）
// (++） 自增
//(++x)，加完1再回傳; (x++)， 先回傳再加 1 
let a = 5;
let b = ++a;

console.log('b=' +b + ',a=' +a ) //6,6
//
let p = 5;
let r = p++;

console.log('r=' +r + ',p=' +p ) //5,6

// (--） 自減
let q = 5;
let d = --q;

console.log('d=' +d + ',q=' +q) //4,4
//
let v = 5;
let e = v--;

console.log('e=' +e + ',v=' +v) //5,4


//賦值(=)運算子（+=  -=  *=  /=  %=） :給變數賦予值
let s = 10;
let u = 5;
s = u ;
console.log ('s='+s) // s=5

let m = 10;
let n = 5;
m *= n ;
console.log ('m='+m)

//數字與字串 進行運算
let h = 5+5;        //數字
let f = '5'+5+7     //string
let k = 'abc'+5+5   //string
let t =  5+5+'abc'


console.log( 'h='+h)
console.log( 'f='+f)
console.log( 'k='+k)
console.log( 't='+t)