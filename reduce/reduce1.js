// arr=[1,2,3,4,5,6,7];
// const sum=arr.reduce((a,b)=>a+b,1);
// console.log(sum);

// array=[1,2,3,4,5];
// array.reduce((a,b)=>b*b);
// console.log(array);
// debugger;
// arr=[1,2,3,4,5,6];
// var sum=arr.reduce((acc,currentValue,currentIndex,array)=>{
//        acc=acc+currentValue;
//        if(currentIndex==array.length-1){
//          return acc/array.length;
//        }
//        return acc;
// },0)
// console.log(sum);

// arr=[1,1,2,2,3,3];
// arr.reduce((acc,currentValue)=>{
//     if(acc==currentValue){

//     }
// })
const letters = [1,1,2,2,3,3];
const letterCounts = letters.reduce((accumulator, currentValue) => {
  accumulator[currentValue] = (accumulator[currentValue] || 0) + 1;
  return accumulator;
}, {});
console.log(letterCounts);