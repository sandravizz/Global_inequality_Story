# Global inequality

This is a data driven project about gloabl inequality.

## Background

Something isn't going well in current, modern, western societies. I feel it, my friends feel it, people around us and in the world are struggeling. More and more do we hear about our democracies failing our communities splitting and inequalities rising.

In order to invesitgate about this preceived development Patrick and I decided to have a deeper and as it turns out a very deep look at data about global inequality.

## Code structure

Our project is based on [starter template](https://github.com/the-pudding/svelte-starter), which aims to quickly scaffold a [SvelteKit](https://kit.svelte.dev/) project used with [LayerCake](https://layercake.graphics/)

### Pages

The `src/routes` directory contains pages for your app. For a single-page app (most cases) you don't have to modify anything in here. `+page.svelte` represents the root page, think of it as the `index.html` file. It is prepopulated with a few things like metadata and font preloading. It also includes a reference to a blank slate component `src/components/Index.svelte`. This is the file you want to really start in for your app.

### Embedding Data

For smaller datasets, it is often great to embed the data into the HTML file. If you want to use data as-is, you can use normal import syntax (e.g., `import data from "$data/file.csv"`). If you are working with data but you want to preserve the original or clean/parse just what you need to use in the browser to optimize the front-end payload, you can load it via `+page.server.js`, do some work on it, and return just what you need. This is passed automatically to `+page.svelte` and accessible in any component with `getContext("data")`.

Made with :green_heart: by [Patrick](https://www.linkedin.com/in/patrickwojda/) && [Sandraviz](https://www.sandraviz.com/bio)

Follow me: [twitter](https://twitter.com/SandraCrypto), [linkedin](https://www.linkedin.com/in/sandradataviz/) and [observable](https://observablehq.com/@sandraviz)
