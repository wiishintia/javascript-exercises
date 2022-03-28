const getTheTitles = function(books) {
    // let listTitles =[];
    // for (let i =0;i<books.length;i++){
    //     listTitles.push(books[i].title);
    // }
    // return listTitles
    return books.map(x=> x.title)
};

// Do not edit below this line
module.exports = getTheTitles;

