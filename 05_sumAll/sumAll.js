const sumAll = function(x,y) {
    let n = Math.max(x,y)-Math.min(x,y)+1;
    if ((x>=0 && y>=0) && (Number.isInteger(x) && Number.isInteger(y))){
        return n*(Math.min(x,y)+ Math.max(x,y))/2;
    } else {
        return "ERROR";
    }

};

// Do not edit below this line
module.exports = sumAll;