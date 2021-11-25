import { convert } from '../src/convert.js';

test('should render an empty div element', () => {
	let div = document.createElement('div');
	expect(convert({ div: {} })).toEqual([div]);
});

test('should render a h1 element with text `This is a fake title`', () => {
	let h1 = document.createElement('h1');
	h1.innerHTML = 'This is a fake title';
	expect(convert({ h1: { children: ['This is a fake title'] } })).toEqual([h1]);
});

test('should render a div element with a h1 element with text `This is a VERY fake title`', () => {
	let div = document.createElement('div');
	let h1 = document.createElement('h1');
	h1.appendChild(document.createTextNode('This is a VERY fake title'));
	div.appendChild(h1);

	expect(convert({ div: { children: [{ h1: { children: ['This is a VERY fake title'] } }] } })).toEqual([div]);
});
