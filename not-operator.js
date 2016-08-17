// Write a function that takes in an integer value and prints out its complement value.

var complement = function( int ) {
  return ~int
}

console.log( complement( 500 ) );

// What do you notice about the numbers which are output? What about if you give a large input value?

// Complement of input = converts into negative integer then substarcts 1
