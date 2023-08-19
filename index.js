// main.js
document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.getElementById('menuButton');
  const drawer = document.getElementById('drawer');

  menuButton.addEventListener('click', function () {
    drawer.classList.toggle('hidden');
  });
});
