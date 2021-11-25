import { render } from './src/util/render.js';

const Reciprocal = {
	render,
	renderClass: (_class, components) =>
		render(new _class().render(), components),
};

export default Reciprocal;
export { Reciprocal };
