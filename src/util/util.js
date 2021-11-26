export const setAttributes = (element, attributes) => {
	Object.keys(attributes).forEach((name) => {
		let value = attributes[name];
		element.setAttribute(name, value);
	});
};

export const appendChildren = (element, children, callback, components) => {
	children.forEach((child) => {
		if (typeof child === 'string') element.appendChild(document.createTextNode(child));
		else {
			callback(child, components).forEach((elem) => {
				element.appendChild(elem);
			});
		}
	});
};
