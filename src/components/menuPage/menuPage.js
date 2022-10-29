import './menuPage.css';
import friedChickenImageOne from './fried-chicken-one.jpg';


const friedChickenFirstImage = document.createElement('img');

function menuPage() {
    const contentContainer = document.querySelector('.content-container');
    friedChickenFirstImage.src = friedChickenImageOne;
    friedChickenFirstImage.classList.add('fried-chicken-image');
    contentContainer.appendChild(friedChickenFirstImage);
}

export { menuPage }