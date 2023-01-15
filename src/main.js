import init, * as wasm from "../dist/lib";

init();

addEventListener("DOMContentLoaded", () => {
  const $submitButton = document.getElementById("submit");
  const $nameInput = document.getElementById("name");

  $submitButton.addEventListener("click", () => {
    alert(wasm.greet($nameInput.value));
  });
});
