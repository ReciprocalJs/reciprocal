import { Reciprocal } from '../../reciprocal.js';
import { Banner } from './banner.js';
import { Title } from './title.js';

class App {
	render = () => {
		return {
			Banner: {},
			Title: {},
		};
	};
}

Reciprocal.renderClass(App, { Banner, Title });
