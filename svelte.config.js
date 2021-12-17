import adapter from "@sveltejs/adapter-auto";
import sveltePreprocess from "svelte-preprocess";
import path from 'path'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: [
    sveltePreprocess({
    //  css: {
    //     prependData: '@import "../static/css/app.css";',
    //   },
    }),
  ],
  kit: {
    adapter: adapter(),

    // hydrate the <div id="svelte"> element in src/app.html
    target: "#svelte",

    vite: {
      resolve: {
        alias: {
          '$helpers': path.resolve('src/lib/helpers'),
        }
      }
      // css: {
      //   preprocessorOptions: {
      //     css: {
      //       additionalData: '@import "../static/css/app.css";',
      //     },
      //   },
      // },
    },
  },
};

export default config;
