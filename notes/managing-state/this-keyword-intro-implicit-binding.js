// 'this' keyword: Intro and Implicit Binding

// Why does 'this' exist.'this' allows you to decide which object should be focal
//when invoking a function or method

// Allows us to reuse objects in different contexts

// RULES
// IMPLICIT Binding
// Explicit Binding
// New Binding
// Window Binding

// Where is this function invoked? - The question always to ask yourself

var sayName = function(name){
  console.log('Hello, ' + name)
}

// You don't know what name is - until the function is invoked
sayName('Tyler')

// Implicit Binding
// Left of the Dot at call time

var me = {
  name: 'Ross',
  age: 29,
  sayName: function(){
    console.log(this.name);
  }
};

me.sayName(); // this in this case - me is to the left of the dot and therefore is the context


var sayNameMixin = function(obj){
  obj.sayName = function(){
    console.log(this.name)
  }
}
