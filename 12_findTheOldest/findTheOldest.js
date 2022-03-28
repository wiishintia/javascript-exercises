const findTheOldest = function(people) {
    const yearNow = new Date().getFullYear();
    return people.reduce((acc,value) => {
        if (value.yearOfDeath == undefined || acc.yearOfDeath == undefined){
            return (yearNow- acc.yearOfBirth > yearNow- value.yearOfBirth)? acc : value
        } else {
            return (acc.yearOfDeath - acc.yearOfBirth >value.yearOfDeath - value.yearOfBirth)? acc : value
        }
        
    })
};

// Do not edit below this line
module.exports = findTheOldest;
