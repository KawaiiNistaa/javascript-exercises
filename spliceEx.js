const array = [1, 2, 3, 4];

array.splice(1)

array.slice(3)

array.splice(3)

array
[1]
const newArray = [1, 2, 3, 4];

newArray.splice(2, 5)
(2) [3, 4]
newArray.push(3)
3
newArray.push(4)
4
newArray
(4) [1, 2, 3, 4]
newArray.splice(2,2)
(2) [3, 4]
newArray.push(3)
3
newArray.push(4)
4
newArray.splice(2, 1)
[3]
newArray.splice(2,0, 3) 

newArray
(4) [1, 2, 3, 4]
const groceryList = [ "apricots", "apples", "bananas", "tomatoes", "strawberries", "arugula" ]
undefined
groceryList.splice(3, 0, "basil");
[]
groceryList
(7) ["apricots", "apples", "bananas", "basil", "tomatoes", "strawberries", "arugula"]
groceryList.splice(4,1)
["tomatoes"]
groceryList
(6) ["apricots", "apples", "bananas", "basil", "strawberries", "arugula"]
groceryList.splice(1,3)
(3) ["apples", "bananas", "basil"]
groceryList
(3) ["apricots", "strawberries", "arugula"]
groceryList.splice(2, 1, "apples", "bananas", "basil")
["arugula"]
groceryList
(5) ["apricots", "strawberries", "apples", "bananas", "basil"]

// this one mutates the array