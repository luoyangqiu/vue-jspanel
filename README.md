# Vue jsPanel

> Vue jsPanel wrapper

## Usage

### Directly in the browser
Just a modern mobile or desktop browser like FF, Chrome, Edge, IE10/IE11, Brave, Opera, Vivaldi. jsPanel 4 is pure javascript and does not depend on any other library.

Drop the library in with a `<script>` tag alongside Vue to globally install all components:

```html
<div id="app"><js-panel></js-panel></div>

<script src="https://unpkg.com/vue"></script>
<script src="https://unpkg.com/vue-jspanel"></script>
<script>
  new Vue({ el: '#app' })
</script>
```

### In a module system (without Vue CLI)

Install the library with NPM:

```bash
npm install vue-jspanel
```

Then register the library as a plugin to globally install all components:

```js
import VueJsPanel from 'vue-jspanel'
import 'vue-jspanel4/dist/jspanel.min.css'

Vue.use(VueJsPanel)
```

Or, import components individually for local registration:

```js
import { JsPanel } from 'vue-jspanel'
import 'vue-jspanel4/dist/jspanel.min.css'

export default {
  components: { JsPanel }
}
```

### In a module system (with Vue CLI)

> If using Vue CLI 3 with Babel or TypeScript, it's recommended that you import the library from its `src` directory. This will minimize the size of your application by preventing duplicate or unnecessary polyfills.

Install the library with NPM:

```bash
npm install vue-js-panel
```

Then register the library as a plugin to globally install all components:

```js
import VueJsPanel from 'vue-jspanel'
import 'vue-jspanel4/dist/jspanel.min.css'

Vue.use(VueJsPanel)
```

Or, import components individually for local registration:

```js
import { JsPanel } from 'vue-jspanel'
import 'vue-jspanel4/dist/jspanel.min.css'

export default {
  components: { JsPanel }
}
```
