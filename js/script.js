const nav = document.getElementById('Nav');
const btn = document.getElementById('Nav-Btn');

btn.addEventListener('click', function() {
    if (nav.style.display === 'block') {
        nav.style.display = 'none';
    } else {
        nav.style.display = 'block';
    }
});