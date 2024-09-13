// vite.config.js
import { readFileSync } from "fs";
import { sveltekit } from "file:///Users/pewe/Code/story/gini/node_modules/@sveltejs/kit/src/exports/vite/index.js";
import { timeFormat } from "file:///Users/pewe/Code/story/gini/node_modules/d3/src/index.js";
import path from "path";
import svg from "file:///Users/pewe/Code/story/gini/node_modules/vite-plugin-svgstring/index.js";
import dsv from "file:///Users/pewe/Code/story/gini/node_modules/@rollup/plugin-dsv/dist/es/index.js";
var { version } = JSON.parse(readFileSync("package.json", "utf8"));
var timestamp = timeFormat("%Y-%m-%d-%H:%M")(/* @__PURE__ */ new Date());
var config = {
  define: {
    __VERSION__: JSON.stringify(version),
    __TIMESTAMP__: JSON.stringify(timestamp)
  },
  plugins: [sveltekit(), dsv(), svg()],
  resolve: {
    alias: {
      $actions: path.resolve("./src/actions"),
      $components: path.resolve("./src/components"),
      $data: path.resolve("./src/data"),
      $routes: path.resolve("./src/routes"),
      $stores: path.resolve("./src/stores"),
      $styles: path.resolve("./src/styles"),
      $svg: path.resolve("./src/svg"),
      $utils: path.resolve("./src/utils")
    }
  }
};
var vite_config_default = config;
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvcGV3ZS9Db2RlL3N0b3J5L2dpbmlcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIi9Vc2Vycy9wZXdlL0NvZGUvc3RvcnkvZ2luaS92aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vVXNlcnMvcGV3ZS9Db2RlL3N0b3J5L2dpbmkvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyByZWFkRmlsZVN5bmMgfSBmcm9tIFwiZnNcIjtcbmltcG9ydCB7IHN2ZWx0ZWtpdCB9IGZyb20gXCJAc3ZlbHRlanMva2l0L3ZpdGVcIjtcbmltcG9ydCB7IHRpbWVGb3JtYXQgfSBmcm9tIFwiZDNcIjtcbmltcG9ydCBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgc3ZnIGZyb20gXCJ2aXRlLXBsdWdpbi1zdmdzdHJpbmdcIjtcbmltcG9ydCBkc3YgZnJvbSBcIkByb2xsdXAvcGx1Z2luLWRzdlwiO1xuXG5jb25zdCB7IHZlcnNpb24gfSA9IEpTT04ucGFyc2UocmVhZEZpbGVTeW5jKFwicGFja2FnZS5qc29uXCIsIFwidXRmOFwiKSk7XG5jb25zdCB0aW1lc3RhbXAgPSB0aW1lRm9ybWF0KFwiJVktJW0tJWQtJUg6JU1cIikobmV3IERhdGUoKSk7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgZGVmaW5lOiB7XG4gICAgX19WRVJTSU9OX186IEpTT04uc3RyaW5naWZ5KHZlcnNpb24pLFxuICAgIF9fVElNRVNUQU1QX186IEpTT04uc3RyaW5naWZ5KHRpbWVzdGFtcCksXG4gIH0sXG4gIHBsdWdpbnM6IFtzdmVsdGVraXQoKSwgZHN2KCksIHN2ZygpXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAkYWN0aW9uczogcGF0aC5yZXNvbHZlKFwiLi9zcmMvYWN0aW9uc1wiKSxcbiAgICAgICRjb21wb25lbnRzOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9jb21wb25lbnRzXCIpLFxuICAgICAgJGRhdGE6IHBhdGgucmVzb2x2ZShcIi4vc3JjL2RhdGFcIiksXG4gICAgICAkcm91dGVzOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9yb3V0ZXNcIiksXG4gICAgICAkc3RvcmVzOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9zdG9yZXNcIiksXG4gICAgICAkc3R5bGVzOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9zdHlsZXNcIiksXG4gICAgICAkc3ZnOiBwYXRoLnJlc29sdmUoXCIuL3NyYy9zdmdcIiksXG4gICAgICAkdXRpbHM6IHBhdGgucmVzb2x2ZShcIi4vc3JjL3V0aWxzXCIpLFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBjb25maWc7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQW1RLFNBQVMsb0JBQW9CO0FBQ2hTLFNBQVMsaUJBQWlCO0FBQzFCLFNBQVMsa0JBQWtCO0FBQzNCLE9BQU8sVUFBVTtBQUNqQixPQUFPLFNBQVM7QUFDaEIsT0FBTyxTQUFTO0FBRWhCLElBQU0sRUFBRSxRQUFRLElBQUksS0FBSyxNQUFNLGFBQWEsZ0JBQWdCLE1BQU0sQ0FBQztBQUNuRSxJQUFNLFlBQVksV0FBVyxnQkFBZ0IsRUFBRSxvQkFBSSxLQUFLLENBQUM7QUFFekQsSUFBTSxTQUFTO0FBQUEsRUFDYixRQUFRO0FBQUEsSUFDTixhQUFhLEtBQUssVUFBVSxPQUFPO0FBQUEsSUFDbkMsZUFBZSxLQUFLLFVBQVUsU0FBUztBQUFBLEVBQ3pDO0FBQUEsRUFDQSxTQUFTLENBQUMsVUFBVSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUM7QUFBQSxFQUNuQyxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxVQUFVLEtBQUssUUFBUSxlQUFlO0FBQUEsTUFDdEMsYUFBYSxLQUFLLFFBQVEsa0JBQWtCO0FBQUEsTUFDNUMsT0FBTyxLQUFLLFFBQVEsWUFBWTtBQUFBLE1BQ2hDLFNBQVMsS0FBSyxRQUFRLGNBQWM7QUFBQSxNQUNwQyxTQUFTLEtBQUssUUFBUSxjQUFjO0FBQUEsTUFDcEMsU0FBUyxLQUFLLFFBQVEsY0FBYztBQUFBLE1BQ3BDLE1BQU0sS0FBSyxRQUFRLFdBQVc7QUFBQSxNQUM5QixRQUFRLEtBQUssUUFBUSxhQUFhO0FBQUEsSUFDcEM7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxJQUFPLHNCQUFROyIsCiAgIm5hbWVzIjogW10KfQo=
