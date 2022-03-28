const caesar = function(text,num) {
    let newText = "";
    for(let i=0;i<text.length;i++){
        if (text.charCodeAt(i)>= 65 && text.charCodeAt(i) <= 90){
            if (num <0){
                newText += String.fromCharCode((text.charCodeAt(i) - 65 +num + 26)%26 + 65);
            } else {
                newText += String.fromCharCode((text.charCodeAt(i) - 65 +num)%26 + 65);
            }
        } else if (text.charCodeAt(i)>=97 && text.charCodeAt(i) <=122){
            if (num <0){
                newText += String.fromCharCode((text.charCodeAt(i) - 97 +num + 26)%26 + 97);
            } else {
                newText += String.fromCharCode((text.charCodeAt(i) - 97 +num)%26 + 97);
            }
        } else{
            newText += String.fromCharCode(text.charCodeAt(i));
        }
        
    }
    return newText;
};

// Do not edit below this line
module.exports = caesar;
