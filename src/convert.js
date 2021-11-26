import { appendChildren, setAttributes } from './util/util.js';

export function convert(json, components) {
	let elements = [];

	for (let tag in json) {
		if (components && tag in components) {
			let component = components[tag];
			let data = json[tag];
			convert(new component(data).render(data), components).forEach((elem) => elements.push(elem));
			continue;
		}

		let element = document.createElement(tag);
		let attributes = json[tag];
		let children = attributes.children;
		delete attributes.children;

		setAttributes(element, attributes);
		if (children) appendChildren(element, children, convert, components);

		elements.push(element);
	}

	return elements;
}
