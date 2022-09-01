/**
 * Returns a random number between min and max
 *
 * @param {number} min
 * @param {number} max
 * @param {string} roundFunction Rounding function: round, ceil, floor, none
 * @returns {number} A random number between min and max
 */
function random(
	min: number,
	max: number,
	roundFunction: RoundFunction = 'round'
) {
	const randNum = min + Math.random() * (max - min);
	switch (roundFunction) {
		case 'round':
			return Math.round(randNum);
		case 'ceil':
			return Math.ceil(randNum);
		case 'floor':
			return Math.ceil(randNum);
		default:
			return randNum;
	}
}

export {random};
