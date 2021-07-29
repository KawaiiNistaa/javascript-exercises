

const removeFromArray = (array, ...args) => {
    

    // args stands for an array that takes in all the other parameters besides array 
    //(spread operator)

   // console logging the parameters 
    console.log("ARRAY: ", array)
    console.log("REMOVE: ", args)
    
    
    // this for loop loops over args because we only need to check if array has the same elements as args not the other way around

    // basically we find the index where args and array have matching elements ( as many times as the args length)
    // then we delete it. 
    for (let i = 0; i < args.length; i++) {
      
        //right here we are comparing and checking for if whichever place we are on args and array has the same element 
        // and we are putting that specific index in a variable
        let removeIndex = array.indexOf(args[i]);

        // here we are creating a conditional accounting for if the arg given is valid
        // if it is we follow through
        if (removeIndex >= 0 ) {
            // remove index is the starting point for where we modify the array 
            // second arguement is the delete count (the amount of elements we are deleting from the start index)
            array.splice(removeIndex, 1)

            //we are deleting 1 thing everytime it loops 
        }
         // this stands for which iteration we are on
        console.log("REMOVE INDEX: ", removeIndex, args[i])

        //(it grouping however many times it needs to to in order to get rid of however many items we need to delete hence the loop)
        // this is where my loop ends

     
    }
    return array;


  


    
};


module.exports = removeFromArray;


