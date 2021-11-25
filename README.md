![Reciprocal](assets/banner.png)

## **(👉 ﾟヮﾟ)👉 A simple web framework that converts JSON objects to html elements.**

---

### 📁 **Installation**

Using `npm` or `yarn`:

```bash
# Using NPM
npm install reciprocal

# Using YARN
yarn add reciprocal
```

---

### 📚 **Sample Usage**

```js
import { Reciprocal } from 'reciprocal';

// Title component
class Title {
	render = ({ string }) => {
		// Accepting string as argument which will be passed while rendering
		return {
			h1: {
				// Making a `h1` element with class `title`
				class: 'title',
				children: [string],
			},
		};
	};
}

// Main app
class App {
	render = () => {
		return {
			Title: { string: 'I am a title!' },
		};
	};
}

/* The first argument is the main app which will be rendered.
   The second argument is the list of components which will be used by the main app.*/
Reciprocal.render(new App(), { Title });
// OR
Reciprocal.renderClass(App, { Title });
```

> Sample usage is also given in the `src` folder.

---

### 🌐 **Official Docs Website** coming soon.

---

### Made with ❤️ with the **[ReciprocalJs](https://github.com/ReciprocalJs)** team.
