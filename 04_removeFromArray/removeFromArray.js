const removeFromArray = function(myarray,...xs) {
    for (let i=0; i<myarray.length;i++){
        for (let x of xs){
            if (myarray[i] === x){
                myarray.splice(i,1);
            }
        }
    }
    return myarray;    
    
};

// Do not edit below this line
module.exports = removeFromArray;
