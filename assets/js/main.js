// Theme toggle — initial theme is applied by the inline script in <head>
(function () {
  var btn = document.getElementById("theme-toggle");
  if (!btn) return;

  btn.addEventListener("click", function () {
    var next = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = next;
    localStorage.setItem("theme", next);
  });

  // Follow OS changes only while the user hasn't chosen a theme explicitly
  matchMedia("(prefers-color-scheme: dark)").addEventListener("change", function (e) {
    if (!localStorage.getItem("theme")) {
      document.documentElement.dataset.theme = e.matches ? "dark" : "light";
    }
  });
})();
