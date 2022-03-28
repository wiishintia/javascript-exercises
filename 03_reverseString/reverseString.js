const reverseString = function(text) {
    let reverseText ="";
    const textArr = text.split("");
    for (let i=textArr.length-1;i>=0;i--){
        reverseText+=textArr[i]
    }
    return reverseText;

};

// Do not edit below this line
module.exports = reverseString;
