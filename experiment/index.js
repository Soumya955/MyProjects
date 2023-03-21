

// function a(){
//    var  b=13;
//     function c(){
//         console.log(++b)
//     }
//     c()
//     c()
// }
// a()


let N=4;
let arr=[];
for(let i=0;i<N;i++){
    let arr1=new Array(N*2).fill("");
    arr1[i]="\\";
    arr1[(N*2)-1-i]="/"
    console.log(arr1.join(" "))
}


