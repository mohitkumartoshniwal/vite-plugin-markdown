import dummy from "./content/dummy.md";

document.querySelector("#app").innerHTML = dummy;

if (import.meta.hot) {
  import.meta.hot.on("markdown-update", (data) => {
    document.querySelector("#app").innerHTML = data;
  });
}
