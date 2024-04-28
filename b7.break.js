// break and continue
// break 跳出循環
// continue 跳過循環中的一個迭代，進入下個迭代

//break 跳出循環後，會繼續執行該循環後面的程式碼（如果有的話）
let i = 0
for (i=0; i<8; i++){
  if (i==3){
    break
  }
  console.log('break：' +i)
}

//continue (for) 例子在值=3时，直接跳過
let a = 0
for (a=0; a<4; a++){
  if (a==2){
    continue
  }
  console.log('for-continue:' +a)
}

//continue (while)
let z = 0;
while (z < 4){
  if (z==1){
    z++;
    continue;
  }
  
  console.log('while-continue:' +z)
  z++
}

