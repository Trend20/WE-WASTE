const toggleBar = document.querySelector('.fa-bars');
const navbar = document.querySelector('.navbar');

toggleBar.addEventListener('click', showNavbar);

function showNavbar(){
    if (navbar.style.display === 'none') {
        navbar.style.display = 'block';
    } else {
        navbar.style.display = 'none'
    }
}
