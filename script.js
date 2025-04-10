const themes = [
  'themes/travel.html',
  'themes/work.html',
  'themes/health.html',
  'themes/food.html'
];

function loadRandomTheme() {
  const random = themes[Math.floor(Math.random() * themes.length)];
  fetch(random)
    .then(res => res.text())
    .then(html => {
      document.getElementById('theme-content').innerHTML = html;
    });
}
