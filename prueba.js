function run(N, M) {
	let output = [];
	for (i = N; i <= M; i++) {
		if(i % 3 === 0 && i % 5 === 0) {
			output[i - N] = 'FizzBuzz';
		} else if (i % 3 === 0) {
			output[i - N] = 'Fizz';
		} else if (i % 5 === 0) {
			output[i - N] = 'Buzz';
		} else {
			output[i - N] = i;
		}
	}

	sequence = null;
	return output;
}
