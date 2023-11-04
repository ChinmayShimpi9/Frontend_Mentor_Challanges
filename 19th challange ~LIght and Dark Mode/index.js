const button = document.getElementById('mode-toggle');
const body = document.body;
const iconLight = document.getElementById('icon-light');
const iconDark = document.getElementById('icon-dark');

button.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        iconLight.style.display = 'inline';
        iconDark.style.display = 'none';
    } else {
        iconLight.style.display = 'none';
        iconDark.style.display = 'inline';
    }
});