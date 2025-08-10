// function evenStr(str){
//     const num= str.length;
//     console.log(str,num)
//     if(num%2===0){
//         console.log("even num")
//     }
//     else{
//         console.log("odd num")
//     }
// }
// evenStr("dhaka")
// evenStr("nosndi")


function doublePera(number,doDuble){
    if(doDuble === true){
        const result=number*2;
        return result;
    }
    else{
        const result = number*3;
        return result;
    }
}
console.log(doublePera(5,true))
console.log(doublePera(5,false))


