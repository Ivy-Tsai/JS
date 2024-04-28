// for loop
var fruit = ["apple","banana","orange","lemon"]

for (var i=0; i<fruit.length; i++){
  console.log(fruit[i])
}


// for (语句 1; 语句 2; 语句 3)
// 语句 1 （代码块）開始前執行
// 语句 2 定義運行循環（代码块）的條件
// 语句 3 在循环（代码块）已被執行後執行
for (var i=0; i<5; i++){  //loop開始前設變數; 定義loop條件; 代碼塊已執行後增加值(i++)
  console.log('n='+i)
}

//省略語句1 
var animal = ['cat','dog','horse','pig']
var i=0, len=animal.length  //for loop前，已先定義

for ( ;i<len ; i++){
  console.log(animal[i])
}

