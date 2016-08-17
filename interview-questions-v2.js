// Write a function which sets the third bit of a number.
var setThird = function(int) {
	return (int | 8);
};


// Write a function which toggles the third bit of a number.
var toggleThird = function(int) {
	return (int ^ 8);
};



// Write a function which clears (sets to zero) the third bit of a number.
var clearThird = function(int) {
	return ((int | 8) ^ 8);
// return (~8 & int)
};


// Write a function which tells you whether the third bit of a number is set.
var thirdIsSet = function(int) {
	if ((int & 8) === 8) {
		alert('Sean is the man, and the third is set');
		console.log('Sean is the man, and the third is set');
		return true;
	} else {
		alert('Sean is still the man, even though third isn\'t set');
		return false;
	}
};
