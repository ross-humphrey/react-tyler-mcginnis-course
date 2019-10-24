// Explicit Binding

var sayName = function(lang1, lang2, lang3){
  console.log('My name is ' + this.name + ' and I know ' + lang1 + ', ' + lang2 + ', ' + lang3);
};

var stacey = {
  name: 'Stacey',
  age: 34
};


var languages = ['Javascript', 'Ruby', 'Python']

// sayName is invoked - this refers to the param
sayName.apply(stacey, languages); //the first param is this, everything after it is a normal param
// .call - calls the function
// .apply will unpickle the array
// .bind will return a function

var newFn sayName.bind(stacey, languages[0],languages[1],languages[2]) // returns a new function that can be called later
console.log('here')
newFn(); // Calling the new function
