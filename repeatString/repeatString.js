const repeatString = function(string, number) {

   if (number < 0){
       let wrong = 'ERROR';
       return wrong;
    }
    
    let greeting = "";
    let greeting2 = string;
    for (let i = 0; i < number; i++){
        //greeting.concat(greeting2);
        greeting = greeting + greeting2;

    }
    return greeting;
    
};



module.exports = repeatString;


// so i dont know how to run my code so i just assumed

//i didnt know how to print out hey next to each other in 1 line so i just concatenated it 

// a little confused on how to call everything in the same thing so ill keep it the way it is right now
