// Dynamic footer year and last modified date
const year = new Date().getFullYear();
const lastModified = new Date(document.lastModified).toLocaleDateString();

document.getElementById('year').textContent = year;
document.getElementById('lastModified').textContent = lastModified;

// Mobile menu toggle
document.getElementById('menu-toggle').addEventListener('click', function() {
    document.getElementById('nav-menu').classList.toggle('show');
});
