// 作用域scope：變數的有效範圍。離開有效範圍的變數，無法被存取
//可避免變數間相互影響，避免命名衝突


//function內部宣告的變數，var/let/const都屬於 “函式作用域”。
//區域變數只作用於函式內，所以“不同函式可用相同名稱”的變數
function food(){
  let fruit = "banana"
  console.log(fruit) //banana
}
food()
// console.log(fruit) (not defined)

function food2(){
  var fruit = "peach"
  console.log(fruit)
}
food2()



//全域：在函式外宣告
//若變數在函式內沒宣告，屬於全域變數
let fruit1 = "apple" //全域變數
    fruit5 = "orange" //沒宣告 屬於全域變數
function food1(){
  console.log(fruit1) //apple
}
food1()
console.log(fruit1) //apple
console.log(fruit5) //orange


//“區塊作用域” let/const ，範圍只存在於{}（例如if / for的大括號中）
function food3(){
  if(true){
    const fruit = "kiwi"
    console.log(fruit) //kiwi
  }
  // console.log(fruit)  (not defined)
}
food3()


