 const groceryBuy = ["pasta", "bread", "bagels", "arugula", "kale", "peppers", "kranch", "ketchup", "ranch", "potatoes", "berries", "tomatoes"];
 
 var momList = groceryBuy.slice(0,3)

var dadList = groceryBuy.slice(3,6)

var sisList = groceryBuy.slice(6,9)

var broList = groceryBuy.slice(9,12)



/*

What Filter is:
//filter is just slice but instead of an array with a start an a end ( it knows what to add and their indexes )
// it creates an array based on what elements match the arguement given for filter to use ( it has to find which elements match the conditional)

//filter creates an array based on which elements meet the given condition 

rather than us knowing the exact index of which elements we need in a different array as well as them being placed next to each other
*/ 


/*

My explamation of Slice:
console.log("so this thing creates a new array with the index you give it to start and end from a different array but 
those elements you take from the array dont get deleted in the process just duplicated onto another array */
 


/*const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
undefined
var others = animals.slice(2)
undefined
others
(3) ["camel", "duck", "elephant"]
const groceryBuy = ["pasta", "bread", "bagels", "arugula", "kale", "peppers", "kranch", "ketchup", "ranch", "potatoes", "berries", "tomatoes"]
undefined
var mumList = groceryBuy.slice(0,2)
undefined
mumList
(2) ["pasta", "bread"]
groceryBuy.push("pasta", "bread")
14
groceryBuy
(14) ["pasta", "bread", "bagels", "arugula", "kale", "peppers", "kranch", "ketchup", "ranch", "potatoes", "berries", "tomatoes", "pasta", "bread"]
*/
