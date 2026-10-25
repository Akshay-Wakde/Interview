// Example.1

function add (a,b,cb){
let result = a + b;
cb(result);
}

add(1,2, function (output) {
    console.log(output);
});