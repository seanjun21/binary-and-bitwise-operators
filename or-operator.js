// Write a function that takes in two integer values and prints out the resultant value when you AND the two input values and then also when you OR the two input values.

var andOr = function( int1, int2 ) {
  return [ ( int1 & int2 ), ( int1 | int2 ) ]
}

console.log( andOr( 3, 5 ) );
