async function loadPage(page) {
  const content = document.getElementById("content");
  try {
    const res = await fetch(`assets/js/pages/${page}.html`);
    const html = await res.text();
    content.innerHTML = html;
  } catch {
    content.innerHTML = "<h2>Page not found 😢</h2>";
  }

  document.querySelectorAll("nav a").forEach(a => 
    a.classList.toggle("active", a.dataset.page === page)
  );
}

function setupRouting() {
  document.querySelectorAll("nav a").forEach(a => {
    a.addEventListener("click", e => {
      e.preventDefault();
      const page = a.dataset.page;
      window.history.pushState({}, "", `#${page}`);
      loadPage(page);
    });
  });

  window.addEventListener("popstate", () => {
    const page = location.hash.slice(1) || "home";
    loadPage(page);
  });
}

window.addEventListener("DOMContentLoaded", () => {
  setupRouting();
  const initialPage = location.hash.slice(1) || "home";
  loadPage(initialPage);
});
