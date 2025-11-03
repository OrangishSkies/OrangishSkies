document.addEventListener("DOMContentLoaded", () => {
  const interactiveDiv = document.getElementById("interactive");
  const btn = document.createElement("button");
  let count = 0;
  btn.textContent = "Click me!";
  btn.addEventListener("click", () => {
    count++;
    btn.textContent = `Clicked ${count} times`;
  });
  interactiveDiv.appendChild(btn);
});
