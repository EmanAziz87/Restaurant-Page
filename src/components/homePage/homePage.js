import './homePage.css';
import rocketIconShipIcon from './rocketship.png';

const mainContainer = document.querySelector('#content');
const contentContainer = document.createElement('div');
const contentContainerText = document.createElement('p');
const rocketIcon = document.createElement('img');

function homePage() {
    rocketIcon.src = rocketIconShipIcon;
    contentContainer.classList.add('content-container');
    contentContainerText.classList.add('content-container-text');
    rocketIcon.classList.add('rocket-icon');

    contentContainerText.textContent = `Welcome to Space Chicken, The greatest fried chicken in the galaxy!`;
    
    mainContainer.appendChild(contentContainer);
    contentContainer.appendChild(contentContainerText);
    contentContainer.appendChild(rocketIcon);
    

    
    
}

export { homePage }