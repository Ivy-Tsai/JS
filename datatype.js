//字串內使用引號
let a = "It's good"
let b = 'It\'s good'
let c = "I am \"Ivy\""
let d = 'I am "Ivy"'

console.log(a)
console.log(b)
console.log(c)
console.log(d)

//數字可有小數點，極大or極小值可用科學符號
let x = 123.426
let y = 123e4
let z = 123e-4

console.log(x)
console.log(y)
console.log(z)

//Array
// let arr1 = ['Tom','Jeff','Andy']
// console.log(arr1)

let i
let fruit = new Array()
fruit[0] = "apple"
fruit[1] = "banana"
fruit[2] = "peach"

for(i=0; i<fruit.length; i++)
console.log(fruit[i])

//對象屬性：name+value，屬性用逗號隔開，空格、換行都無所謂
let person = { firstname: "Ivy", lastname: "Tsai", id: 12345}
console.log(person.id)


//undefined：表示變數“不含有值”。 可以將變數的值設為null。
let type
let food = "toast"
console.log(type)
console.log(food)
let drink = null
console.log(drink)