const reverseString = function(string) {
 
    let empty = "";

    
    for (let i = string.length - 1; i >= string.length-string.length; i--){
        empty = empty + string[i];

    }
    console.log(empty);
    return empty;


};

module.exports = reverseString;


// we have a string
// what i need to do is: have an empty string
// find out the char length of the string
// make a for loop and reverse it : i needs to be equal to the full length of the string
//we need to get to the start number which is 0 and make the loop end on that number
// we keep adding each letter in each for loop iteration to get the fully reversed word