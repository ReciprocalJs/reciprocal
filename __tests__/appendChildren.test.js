import { convert } from '../src/convert.js';
import { appendChildren } from '../src/util/util.js';

test('should append a h1 element to a div', () => {
	let div = document.createElement('div');
	let h1 = document.createElement('h1');
	div.appendChild(h1);

	let testDiv = document.createElement('div');
	appendChildren(testDiv, [{ h1: {} }], convert);
	expect(testDiv).toEqual(div);
});
