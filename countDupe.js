const testString = 'hello this string has some duplicates like string and this and hello';
// {
//   hello: 2,
//   this: 2,
//   string: 2,
//   has: 1,
//   some: 1,
// }
​
const obj1 = {
  hello: 'world',
  string: 'something',
  num: 1234234123,
  arr: [1,2,3,4],
};
​
const newArray = ['dog', 'cat', 'bird'];
​
const test = {
  'string1': 'hello',
  'foo': 'asdf',
  'bar': 'fdsa'
};
test['anything'] = 5123;
​
function countDupes(str) {
  const words = str.split(' ');
  const counts = {};
​
  const anything = 'some value';
  const hello = 'world';
  words.forEach((word) => {
    if (word in counts) {
      counts[word]++; 
      // counts[word] = counts[word] + 1;
    // i have no idea if i am assigning a name to this integer or if i am just adding the word string everytime we iterate
    // adding the word in the count one is the key and one is the value in that object
    } else {
      counts[word] = 1;
    }
  });
​
  return counts;
}
​
console.log(countDupes(testString));
​
/*function countDuplicates(str) {
    // find out how we can identify a word within a string of words
    //have a var in charge of counting how many duplicates
    // i dont know if i will be using an if or a for loop
    
​
    // create an empty array that has every word in this string as a variable
        // we will 
    // i want to create a nested for loop comparing each word to one another
    
let duplicates = [];
​
    const words = str.split(' ');
    for (let i = 0; i < words.length; i++){
        let word = words[i];
        for (let j = 0; j <  words.length; j++ ) {
            if (j !== i) {
                let word2 = words[j];
                if(word === word2) {
                    
                    
                }
​
​
            }
        }
​
    }
    
​
    
    
    // console.log(words);
​
​
}
*/
// countDuplicates(testString);
Collapse



