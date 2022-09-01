import {random} from '../index';

type RF = 'round' | 'ceil' | 'floor' | 'none';

const modes: RF[] = ['round', 'ceil', 'floor', 'none'];

for (let i = 0; i < 100; i++) {
	const mode: RF = modes[i % 4];
	test(`Random Less Than - Pass: ${i}`, () => {
		expect(random(5, 15, mode)).toBeLessThan(16);
	});
	test(`Random Greater Than - Pass: ${i}`, () => {
		expect(random(5, 15, mode)).toBeGreaterThan(4);
	});
	test(`Random Exact - Pass: ${i}`, () => {
		expect(random(5, 5, mode)).toBe(5);
	});
}
