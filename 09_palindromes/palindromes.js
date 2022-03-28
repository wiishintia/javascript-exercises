const palindromes = function (text) {
    let cleantext = text.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()/\s]/g, '').split("");
    let l = cleantext.length;
    for (let i=0;i<l/2;i++){
        if(cleantext[i] !== cleantext[l-1-i]){
            return false;
        }
    }
    return true;
};


// Do not edit below this line
module.exports = palindromes;
