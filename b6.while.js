// while循環
// while 循環在條件為True時，執行

var x = ""
var i = 0
while (i < 3){
  x = i++
  console.log('數字為：'+ x)
}

// do while 
//該循環至少會執行一次，即使條件為False也會執行一次，因代碼會在條件被測試前執行
//若條件為True就會重複這個循環
var a = ""
var b = 2
do{
  a = b++
  console.log('do數字:'+ a)
}
while (b<4)

//比較 for 與 while
var animal1 = ['cat','dog','pig']
for (var q=0; q<animal1.length; q++){
  console.log('A1:' +animal1[q])
}
//
let animal2 = ['cat','dog','pig']
let w = 0
while (animal2[w]){

  console.log('A2:' +animal2[w])
  w++
}

