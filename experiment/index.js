// //console.log(x)
// //const x=2;
// a()
// b()
// console.log(x)
// function a(){
//     // console.log(x)
//      const x=10;
//     const y=23
//     const ab=()=>{
//         sr()
//         function sr(){
//             console.log("hello",x)
//         }
//     }
//     // console.log(x)
//     c()
//     function c(){
//         // const x=1000;
//         ab()
//         //console.log(x,y)
//     }
// }
// function b(){
//     const x=100;
//     console.log(x)
// }

// let sum=(a)=>{
//     return (b)=>{
//       if(b){
//         return sum(a+b);
//       }else{
//         return a
//       }
//     }
// }


// let sm=a=>b=>b?sum(a+b):a;
// console.log(sm(2)(3)(5)())



// var a=10
// function f1(a){
//   var b=100
//   if(b){
//     var c=1000
//   }
//   console.log(a,b,c)
// }


let note=1255;
let coins=[10,5,3,2,1];
let how_many_min_coins={}

for(let i=0;i<coins.length;i++){
  if(note>=1){
    how_many_min_coins[coins[i]]=Math.floor(note/coins[i])
   note=(note%coins[i]);
  }else{
    break;
  }
} 




console.log(how_many_min_coins)
