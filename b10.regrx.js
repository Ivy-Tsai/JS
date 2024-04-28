//正規表示式 search() and replace()
//search()：搜尋指定字串，並返回字串的起始位置

//搜索Ivy字串/不區分大小寫，並顯示匹配的起始位置
let str1 = "hello I am Ivy"
let x = str1.search(/Ivy/i)    //方法1
console.log(x)

let y = str1.search("Ivy")    //方法2：字串做參數，字串會轉換為正規表示式
console.log(y)

//replace()：將字串中的dog 替換成 cat
let str2 = "I have a dog"
let txt1 = str2.replace(/dog/i, "cat")    //方法1
console.log('txt1= ' + txt1)

let txt2 = str2.replace("dog","pig")     //方法2
console.log('txt2= ' + txt2)


// test()：檢索字串是否含有匹配的文字，True / False
let a = new RegExp("e")
console.log(a.test("The best things in life are free"))

//exec()：檢索字串是否含有匹配的文字，有 返回匹配結果，無 返回null
let z = new RegExp("c")
console.log(z.exec("The best things in life are free"))