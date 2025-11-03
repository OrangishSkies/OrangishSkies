async function loadNav() {
  const navEl = document.getElementById("nav");
  const res = await fetch("assets/data/pages.json");
  const pages = await res.json();

  navEl.innerHTML = pages.map(
    p => `<a href="#${p.id}" data-page="${p.id}">${p.name}</a>`
  ).join("");
}

document.addEventListener("DOMContentLoaded", loadNav);
