/**
 * TanStack Start always appends a TypeScript-only "Register" type block to the
 * generated src/routeTree.gen.js, even in JavaScript projects. That block only
 * provides editor types, so this plugin drops it before the file is compiled.
 */
export function routeTreeJsPlugin() {
  return {
    name: "swap-shelf:route-tree-js",
    enforce: "pre",
    transform(code, id) {
      if (!id.split("?")[0].endsWith("/src/routeTree.gen.js")) return null;
      const typeBlockStart = code.indexOf("\nimport type ");
      if (typeBlockStart === -1) return null;
      return { code: code.slice(0, typeBlockStart) + "\n", map: null };
    },
  };
}
