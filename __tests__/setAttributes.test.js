import { setAttributes } from '../src/util/util';

test('should set attributes of a div element', () => {
	let div = document.createElement('div');
	div.setAttribute('class', 'empty-div');

	let testDiv = document.createElement('div');
	setAttributes(testDiv, { class: 'empty-div' });

	expect(testDiv).toEqual(div);
});
