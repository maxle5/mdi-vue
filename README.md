# @maxle5/mdi-vue3

A collection of Vue single-file components (Vue 3) for rendering Material Design Icons. This library **sources its icons weekly** from [@mdi/js](https://github.com/Templarian/MaterialDesign-JS), to ensure comprehensive icon coverage. 

With **full treeshaking support**, your application will only include the icons you actually use, optimizing performance and reducing bundle size.

## Getting started

1. Install the package

   ```console
   yarn add @maxle5/mdi-vue3
   ```

   **OR**

   ```console
   npm i @maxle5/mdi-vue3
   ```

2. Import the icon, and declare it as a local component:

   ```javascript
   import { MdiMenu } from '@maxle5/mdi-vue3';

   components: {
     MdiMenu;
   }
   ```
   > Note: [Vite](https://vitejs.dev/) and [WebPack](https://webpack.js.org) will tree shake unused icons.

   **OR**

   Declare it as a global component:

   ```javascript
   import { MdiMenu } from '@maxle5/mdi-vue3';

   Vue.component('mdi-menu', MdiMenu);
   ```

   > **Note** This library exports Icons in pascal case with a prefix of `Mdi`, e.g. `MdiCheckboxMarkedCircle`

3. Then use it in your template code!

   ```html
   <mdi-menu />
   ```

## Props
- `size` - This property overrides the `width` and `height` attributes on the
  SVG. The default is `24`.

  Example:

  ```html
  <mdi-android :size="48" />
  ```

## Icons

A list of the icons can be found at the
[Material Design Icons website](https://materialdesignicons.com/ 'Material Design Icons website'). The icons packaged here are pascal cased
versions of the names displayed on the website, to match the
[Vue Style Guide](https://vuejs.org/v2/style-guide/). For example, the icon
named `ultra-high-definition` would be imported as
`import { MdiUltraHighDefinition } from "@maxle5/mdi-vue3"`.
