//比較運算子
let x = 5
console.log(Boolean(x=="5")) 
console.log(Boolean(x==="5")) 
console.log(Boolean(x!=9)) 
console.log(Boolean(x!=="5"))  //不絕對等於（值 / type有一個或兩個不相等）
console.log(Boolean(x >= 9)) 



//條件運算子：變數名稱＝（condition）？ value1：value2
let age,voteable
age = 22
voteable = (age<18)? "年紀尚未達到標準":"年紀已達投票標準"
console.log(voteable)