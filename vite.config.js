// vite.config.ts
import Inspect from "vite-plugin-inspect";
import myPlugin from "./vite-plugin-markdown";
// import Markdown from "markdown-it";
// const md = new Markdown();

export default {
  plugins: [
    Inspect(),
    myPlugin(),
    // {
    //   name: "vite-plugin-markdown",
    //   transform(code, id) {
    //     if (/\.(md)$/.test(id)) {
    //       const result = md.render(code);

    //       return `export default ${JSON.stringify(result)}`;
    //     }
    //   },
    // },
  ],
};
