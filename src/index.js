import './styles/reset.scss'
import './styles/main.scss';

const hamburger = document.querySelector(".hamburger");
const navigation = document.querySelector('.header_navigation-list');

const resizing = () => {
    const image = document.querySelector(".background_image-a img");
    if (window.innerWidth > 600) image.src = "../images/image-mockups-cut.png";
    if (window.innerWidth < 600) image.src = "../images/image-mockups.png";
}

window.addEventListener('load', resizing);
window.addEventListener('resize', resizing);

const handleClickBurger = () => {
    hamburger.classList.toggle('hamburger--active');
    navigation.classList.toggle("toggle_menu");
}

hamburger.addEventListener('click', handleClickBurger)