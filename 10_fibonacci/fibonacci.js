const fibonacci = function(x) {
    // let arr=[0,1];
    // if (x<0){
    //     return "OOPS";
    // } else {
    //     for (let i=2;i<=x;i++){
    //         arr[i]=arr[i-2]+ arr[i-1];
    //     }
    // }
    // return arr[x];
    if (x==0){
        return 0;
    }
    if (x==1 || x==2){
        return 1;
    } else {
        return fibonacci(x-1)+fibonacci(x-2);
    }
};


// Do not edit below this line
module.exports = fibonacci;
