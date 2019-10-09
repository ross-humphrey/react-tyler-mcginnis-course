// What to do if we want multiple instances

function Dog (name, energy, breed) {
  this.name = name
  this.energy = energy
  this.breed = breed
}

Dog.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`)
  this.energy += amount
}

Dog.prototype.sleep = function (amount) {
  console.log(`${this.name} is sleeping`)
  this.energy += amount
}

Dog.prototype.play = function (amount) {
  console.log(`${this.name} is playing`)
  this.energy -= amount
}

Dog.prototype.bark = function (amount) {
  console.log('Woof-Woof')
  this.energy -= .1
}

const charlie = new Dog('Charlie', 10, 'Goldendoodle')

// This example isn't ideal - what we want is an animal base class

function Animal(name, energy) {
  this.name = name
  this.energy = energy
}

Animal.prototype.eat = function (amount) {
  console.log(`${this.name} is eating`)
  this.energy += amount
}

Animal.prototype.sleep = function (amount) {
  console.log(`${this.name} is sleeping`)
  this.energy += amount
}

Animal.prototype.play = function (amount) {
  console.log(`${this.name} is playing`)
  this.energy -= amount
}

function Dog(name, energy, breed){
  // .call() is a method on every function that allows you to Invoke
  // the function specifying in what context the function will
  // be invoked
  Animal.call(this, name, energy)
  this.breed = breed
}

Dog.prototype = Object.create(Animal.prototype)

Dog.prototype.bark = function(){
  console.log('Woof-Woof!')
  this.energy -= .1
}

Dog.prototype.constructor = Dog // must do this as if not will get Animal constructor

const charlie = new Dog('Charlie', 10, 'Goldendoodle')
charlie.name
charlie.energy
charlie.breed

// As ES6 classes

class Animal {
  constructor(name, energy){
    this.name = name
    this.energy = energy
  }
  eat(amount){
    console.log(`${this.name} is eating`)
    this.energy += amount
  }
  sleep(length){
    console.log(`${this.name} is sleeping`)
    this.energy += amount
  }
  play(length){
    console.log(`${this.name} is sleeping`)
    this.energy += length
  }
}


class Dog extends Animal { // ES6 now a subclass of animal
  constructor(name, energy, breed){
    super(name,energy)
    this.breed = breed
  }
  bark() {
    console.log('Woof-Woof!')
    this.energy -= .1
  }
}
