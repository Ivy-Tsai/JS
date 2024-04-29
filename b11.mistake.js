//try...catch：有兩個區塊，分別是try區塊、catch區塊，若在try區塊執行有錯誤，就跳到catch區塊去處理 
try {
  hello()                      //要被執行的部分
} catch(error) {
  console.log(error.message)   //要攔截錯誤的部分
}
// finally{
//   不管錯誤與否，都會被執行的區塊
// }


// throw new Error() 拋出異常，允許自定義錯誤
try{
  throw new Error("錯錯錯！！！")
  console.log("Hi")  //不會運行到這行，就跳到catch了
} catch (error) {
  console.log (error.message)
}


//
// function int(number){
//   if (!Number.isInteger(number)){
//     throw new Error("這不是正整數！！！")
//   }
// }

// function myFunction(num1, num2){
// try{
//   int(num1)
//   int(num2)

//   const result = num1 + num2

//   return result
//   }catch(error){
//   console.log(error.message)
//   }
// }

// const result = myFunction(25 , 1 )
// console.log(result)
