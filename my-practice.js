// my prac 1 done;

// my prac 2 
// function nm(number){
//     const sum= number*2;
//     console.log(number)
//     return sum
// }
// console.log(nm(5))



// // my prac 3

// function evenNum(number){
//      if(number%2===0){
//         return true
//      }else {
//         return false
//      }
// }
//  const sum=evenNum(10) //even number
// console.log(sum)


// my prac 4

function sumOfNumber(numbers){
    let sum=0;
    for(const num of numbers){
    // console.log(num)
    sum = sum + num;
    

    }
  return sum;
}
let num=[5,10,5]
let result=sumOfNumber(num)
// console.log(result)


// my practice 5
function oddOfNUmbers(numbers){
    let sum=0
    for(const number of numbers)
    if(number%2===1){
        console.log(number)
        sum = sum + number

    }
    return sum;
}
let numberr=oddOfNUmbers([1,2,5,20,45,88,4,40])
console.log(numberr)

