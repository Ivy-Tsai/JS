// if -> 當條件為true，才執行
let x= ""
let time1 = new Date().getHours()
if (time1 < 13){
  x = "Good morning"
}

console.log(x)

// if...else...
let y = ""
let time2 = new Date().getHours()
if (time2 < 20){
  y = "Good day"
}
else{
  y = "Good night"
}

console.log(y)

//if...else if...else
let a = ""
let time3 = new Date().getHours()
if (time3 < 10)
{
  a = "Good morning"
}
else if (time3 >= 10 && time3 < 20)
{
  a = "Good dayyy"
}
else
{
  a = "Good night"
}

console.log(a)