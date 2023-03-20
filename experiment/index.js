


var b=12;
console.log(b)
function a(){
     b=13;
    console.log(b)
    function c(){
         b=14;
        console.log(b)
        function d(){
            b=15;
            console.log(b)
        }
        d()
    }
    c()
}
a()

