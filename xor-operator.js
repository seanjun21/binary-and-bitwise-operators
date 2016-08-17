// Extend the previous function further by adding logic for the XOR operation when two integer values are input. Add a third parameter which denotes which type of operation to execute. Print out the resultant value for the associated operation type.

var xOr = function( int1, int2, op ) {
  if ( op === '&' ) {
    return ( int1 & int2 )
  } else if ( op === '|' ) {
    return ( int1 | int2 )
  } else if ( op === '^' ) {
    return ( int1 | int2 ) - ( int1 & int2 )
  }
}

console.log( xOr( 2, 6, '^' ) );

// 1: 0 0 0 1
// 2: 0 0 1 0
// 3: 0 0 1 1
// 4: 0 1 0 0
// 5: 0 1 0 1
// 6: 0 1 1 0
// 7: 0 1 1 1
