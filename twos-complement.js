// Implement a function that takes in an integer and prints out its two's complement value by following the algorithm described above. 

var twosComplement = function( int ) {
  return ~int + 1
};

console.log( twosComplement( 25 ) );
