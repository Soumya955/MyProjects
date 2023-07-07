
function soumya(input){
  console.log(input)
let object={}
for(let i=0;i<input.length;i++){
object[input[i]]=object[input[i]]?object[input[i]]+1:1;
}

let max=-Infinity;
for(let  key in object){
if(object[key]>max){
max=object[key];
}
}

console.log(object,max)

let ans="";
for(let  key in object){
if(object[key]==max){
ans+=key;
}
}
console.log(ans)

}
console.log(soumya("bananan"))