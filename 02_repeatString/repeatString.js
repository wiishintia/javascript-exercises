const repeatString = function(string, num) {
    let newString="";
    if(num<0) {
        newString= "ERROR";
    } else {
        for(let x=0;x<num;x++){
            newString += string;
        }
    }
    return newString;
    
};

// Do not edit below this line
module.exports = repeatString;
