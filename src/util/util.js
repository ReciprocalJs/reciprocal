export const setAttributes = (element, attributes) => {
	Object.keys(attributes).forEach((name) => {
		let value = attributes[name];
		element.setAttribute(name, value);
	});
};

export const appendChildren = (element, children, callback) => {
	children.forEach((child) => {
		if (typeof child === 'string') element.appendChild(document.createTextNode(child));
		else {
			callback(child).forEach((elem) => {
				element.appendChild(elem);
			});
		}
	});
};
