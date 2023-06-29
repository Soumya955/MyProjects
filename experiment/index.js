
const x=2;

console.log(x)
console.log(x)
console.log(x)
console.log(x)
console.log(x)
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


// let note=1255;
// let coins=[10,5,3,2,1];
// let how_many_min_coins={}

// for(let i=0;i<coins.length;i++){
//   if(note>=1){
//     how_many_min_coins[coins[i]]=Math.floor(note/coins[i])
//    note=(note%coins[i]);
//   }else{
//     break;
//   }
// } 




// console.log(how_many_min_coins)


// function common(arr1,arr2){
//   let obj={}
//   let ans=[]
//   for(let i=0;i<arr1.length;i++){
//    obj[arr1[i]]=1;
//   }
//   for(let i=0;i<arr2.length;i++){
//     if(obj[arr2[i]]){
//       ans.push(arr2[i])
//     }
//    }
//    return ans;
// }

// console.log(common([1,2,3],[2,3,4]))



// function factorial(N){
//   if(N==1){
//     return 1;
//   }
//   return N*factorial(N-1)
// }
// console.log(factorial(5))

// function triangle(height){
//   let count=1;
//   for(let i=0;i<height;i++){
//      let arr=[]
//      for(let j=0;j<count;j++){
//       arr.push("*")
//      }
//      count++
//      console.log(arr.join(" "))
//   }
// }
// triangle(5);

// function ok(N,M,arr,bobI,bobJ,shopI,shopJ){
// console.log(N,M,arr,bobI,bobJ,shopI,shopJ,"ok")
//     console.log(fn(N,M,0,[],arr,bobI,bobJ,shopI,shopJ))
    
//     function fn(N,M,path,arr1,arr,bobI,bobJ,shopI,shopJ){
//         if(bobI<0||bobI>=N||bobJ<0||bobJ>=M){
//             return [];
//         }
//         //console.log(bobI,bobJ)
//         if(arr[bobI][bobJ]==0){
//             return [];
//         }
//         if(bobI==shopI&&bobJ==shopJ){
//             return [path];
//         }
    
//         let a1=fn(N,M,path+1,arr1,arr,bobI+1,bobJ,shopI,shopJ);
//         let a2=fn(N,M,path+1,arr1,arr,bobI-1,bobJ,shopI,shopJ);
//         let a3=fn(N,M,path+1,arr1,arr,bobI,bobJ+1,shopI,shopJ);
//         let a4=fn(N,M,path+1,arr1,arr,bobI,bobJ-1,shopI,shopJ);
//         arr1=[...arr1,...a1,...a2,...a3,...a4];
    
//         return arr1
//     }
     
//     }

    


//    ok(3,10,
//     [[1,1 ,1 ,1 ,1 ,1, 1, 1 ,1, 1],
//     [1 ,1, 0 ,1 ,1, 0, 1 ,1, 0, 1],
//     [1 ,1, 1 ,1 ,1, 1 ,1, 1 ,1 ,1]],
//     0, 0,
//     1, 7)






// function ok(len,arr){


//     let ans=0;
//     // for(let i=0;i<arr.length;i++){
//     //     for(let j=0;j<arr[0].length;j++){
//     //       let a= fn(arr,i,j) 
//     //       console.log(a,i,j,arr)
//     //       if(a>ans){
//     //           ans=a
//     //       }
//     //     }
//     // }

    
//     console.log(fn([...arr],1,3))
    
//     function fn(arr,i,j){
//         if(i<0||j<0||i>=arr.length||j>=arr[0].length){
//             return 0;
//         }
//         if(arr[i][j]=="W"){
//             return 0
//         }
        
//         arr[i][j]="W";
//         console.log(i,j,arr[i][j],arr)
//         let o=fn(arr,i+1,j)+fn(arr,i-1,j)+fn(arr,i,j+1)+fn(arr,i,j-1);
//         return o+1;
//     }
     
//     }
//     ok( 5,[["T","T","T","W","W"],["T","W","W","T","T"], ["T","W","W","T","T"],["T","W","T","T","T"],["W","W","T","T","T"]])

    
    