/**************************************************************
 * pairs(names):
 *
 * - It accepts an array of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish'])
 *
 * - It returns a randomized pairing of names:
 *       [['Mishmish', 'Asis'], ['Fawas', 'Hamsa']]
 *
 * - It can handle an odd number of names:
 *       pairs(['Asis', 'Hamsa', 'Fawas', 'Mishmish', 'Hussein'])
 *       returns [['Mishmish', 'Fawas'], ['Asis', 'Hussein'], ['Hamsa']]
 *
 * - It returns an empty array if it gets passed an empty array:
 *       pairs([]) returns []
 *
 * - It returns an empty array if it gets passed nothing:
 *       pairs() returns []
 ****************************************************************/

/**********************************************
 * READ ME!!!!
 *
 * We've included this handy method for you.
 * It will remove a random element from an array
 * and return it to you.
 *
 * Example Usage:
 *
 * let numbers = [1, 2, 3, 4];
 * let random = numbers.getRandom();  // randomly returns something from the array. e.g. 3
 * console.log(random); // 3 (the random element)
 * console.log(numbers);  // [1, 2, 4] (missing the random element)
 ************************************************/
 let element1;
 let element2;
 let myArray = [];

Array.prototype.getRandom = function () {
  return this.splice(Math.floor(Math.random() * this.length), 1)[0];
};

function pairs(names) {
  // Your code goes here
  if (names === [] || names === undefined){
    myArray = [];
  } 

  else if (names.length % 2 === 0){
     myArray = [];
    while (names.length !== 0){
      element1 = names.getRandom();
      element2 = names.getRandom();
      myArray.push([element1, element2]);
    }
  }

  else {
    while (names.length !== 1){
      element1 = names.getRandom();
      element2 = names.getRandom();
      myArray.push([element1, element2]);

    }
    myArray.push([names.getRandom()]);
  }
    
  return myArray;
}
  


module.exports = pairs;

//pairs(["Asis", "Hamsa", "Fawas", "Mishmish", "Hussein", "Lailz", "Mr Potato"])
