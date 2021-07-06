const sumAll = function(begin, end) {

    let sum = 0;
    let wrong = 'ERROR';

    if (begin < 0) {
        return wrong;
    } else if (typeof end != "number" || typeof begin != "number") {
        return wrong;

    }




    if (end > begin){
        for (let i = begin; i <= end; i++){
            sum = sum + i;
        }
    } else if ( begin > end) {
        for (let i = end; i <= begin; i++){
            sum = sum + i;
        }
    }   
    return sum;
    


};

module.exports = sumAll;


// ok so i am kinda unsure so ill just psedo code it
// for loop with parameters of 1st to last number
// empty variable
//add to the variable like var = var + i so i wont run into any reset issue with my loop
//print loop