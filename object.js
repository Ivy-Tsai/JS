//如 a car是一個對象，此對象有他的屬性，重量顏色等等、方法有啟動停止等等

//屬性
//定義一個對象（可包含多個屬性（鍵：值） name:value） 
//屬性間 用逗號隔開！！！ 空格換行無所謂

let person = {
  firstName : "Ivy",
  lastName  : "Tsai",
  age       : 24,
  haircolor : "black"
}
//訪問屬性 兩種方式
console.log(person.firstName + '今年' + person.age + '歲')        //抓屬性 (常用)
console.log(person["firstName"] + "今年" + person["age"] + "歲") //陣列“字串” （CSS會用到 因為字串裡面的字可以-分開 ex. "first-name"）

//方法
//對象方法是一個 ”函數“，且作為一個屬性值
let person2 = {
  firstName : "Ivy",
  lastName  : "Tsai",
  fullName  : function()
  {
    return this.firstName + " " + this.lastName // 用this可抓object，就算改名字也沒差
  }
}
console.log(person2.fullName()) 
//let abc = person1.fullName()
//console.log(abc)

