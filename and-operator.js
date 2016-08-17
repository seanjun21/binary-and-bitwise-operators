// Write a function that takes an integer value and checks to see if it is even or odd using the big-wise AND operator. Hint: Think about what the value of the least-significant bit will be for even and odd numbers.

// Whenever an integer is even, its binary's least significant bit is zero
// Whenever an integer is odd, its binary's least significant bit is one

var isOdd = function( int ) {
  if ( ( int & 1 ) === 0 ) {
    return false;
  } else if ( ( int & 1 ) === 1 ) {
    return true;
  }
};

// 1: 0 0 0 1
// 2: 0 0 1 0
// 3: 0 0 1 1
// 4: 0 1 0 0
// 5: 0 1 0 1
// 6: 0 1 1 0
// 7: 0 1 1 1

console.log( isOdd( 2 ) );


// Why would using bit-wise operations be potentially faster for checking whether a number is even or odds as opposed to using something like the modulo operator (for example randInt % 2)?
// 
// Computer will handle bit-wise operations (potentially) faster because bit-wise operations do not involve mathematics. It's simply looking up at binary digits and making comparisons
