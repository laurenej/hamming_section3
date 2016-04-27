exports.compute = function(DNA1, DNA2) {

	var distance = 0; 			// this is what the program is going to return

	if (DNA1.length != DNA2.length) 
			throw new Error('DNA strands must be of equal length.')

	for (i = 0; i < DNA1.length; i++) {
		if (DNA1[i] != DNA2[i]) {
			distance = distance + 1;
		}
	}
	return distance;
};


// != means not equal to 
