let a = "ajdjhasdfbnkkk";
let obj = {};
for (let i = 0; i < a.length; i++) {
  obj[a[i]] = obj[a[i]] ? obj[a[i]] + 1 : 1;
}
let arr = [];
for (let key in obj) {
  if (obj[key] > 1) {
    arr.push(key, obj[key]);
  }
}
console.log(arr);
