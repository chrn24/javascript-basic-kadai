//変数numに整数を代入する
let num=11;

//変数numが3と5の倍数であれば、「3と5の倍数です」と出力する
if(num%3===0 && num%5===0){
    console.log('3と5の倍数です')
}

//変数numが3の倍数の場合、「3の倍数です」と出力する
else if(num%3===0){
    console.log('3の倍数です')
}

//変数numが5の倍数であれば、「5の倍数です」と出力する
else if(num%5===0){
    console.log('5の倍数です')
}

//それ以外のときは、変数numの値を出力する
else {
    console.log(num)
}


