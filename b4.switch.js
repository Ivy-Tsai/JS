//switch
let x;
let day = new Date().getDay();
switch (day){
  case 0: 
    x = "今天星期日";
    break;
  case 1: 
    x = "今天星期一";
    break;
  case 2: 
    x = "今天星期二";
    break;
  case 3: 
    x = "今天星期三";
    break;
  case 4: 
    x = "今天星期四";
    break;
  case 5: 
    x = "今天星期五";
    break;
  case 6: 
    x = "今天星期六";
    break;
}

console.log(x)

//default ，與case1 case2 不同時執行的
let y;
let weekend = new Date().getDay();
switch (weekend)
{
  case 6:
    y = "今天星期六";
    break;
  case 0:
    y = "今天星期日";
    break;
  default:
    y = "期待週末快快到";
}

console.log(y)

