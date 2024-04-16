//e.g.可在某事件發生時，直接調用function。（比如用戶點擊按鈕）
//函數將值 返回調用他的地方 -> return

let a
let b
function myFunction(a,b)
{
  return a*b
}
console.log(myFunction(2,3))


let name
let job
function myFunction1(name,job='oo'){ //參數：定義function時，所列出需要的變數name,job
	console.log(("Welcome " + name + ", the " + job));
}
  myFunction1("ivy","student") //引數：實際傳送給function or函式接收到的值
  myFunction1("ivy0") //若參數原本就有預設值，沒有引數也沒關係，會顯示出預設值。若有引數就顯示引數值。
  myFunction1("ivy123", "teacher")



// 若 x>y，顯示true，否則計算x+y
function fun(x,y)
{
  if (x > y)
  {
    return true
  }else{
    return (x+y) 
  }
}
console.log(fun(5,6))


// var 區域變數：此函數運行後即刪除，可在不同函數使用相同名稱的變數。不受區塊限制，但受函數範圍限制
// let 全域變數：不可使用相同名稱的變數。受區塊限制，區塊外變數存取失敗
