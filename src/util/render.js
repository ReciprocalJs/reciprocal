import { convert } from '../convert.js';

export const render = (json, components) => {
	convert(json, components).forEach((element) => {
		document.getElementById('root').appendChild(element);
	});
};
