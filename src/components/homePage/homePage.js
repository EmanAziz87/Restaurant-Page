import './homePage.css';
import rocketIconShipIcon from './rocketship.png';

function homePage() {

    const mainContainer = document.querySelector('#content');
    const contentContainer = document.createElement('div');
    const navContainer = document.createElement('nav');
    const navMenuButton = document.createElement('div');
    const navHomeButton = document.createElement('div');
    const navContactUsButton = document.createElement('div');
    const contentContainerText = document.createElement('p');
    const rocketIcon = document.createElement('img');

    rocketIcon.src = rocketIconShipIcon;


    contentContainer.classList.add('content-container');
    contentContainerText.classList.add('content-container-text');
    navContainer.classList.add('nav-container');
    navMenuButton.classList.add('nav-button');
    navHomeButton.classList.add('nav-button');
    navContactUsButton.classList.add('nav-button');
    rocketIcon.classList.add('rocket-icon');


    contentContainerText.textContent = `Welcome to Space Chicken, The greatest fried chicken in the galaxy!`;
    navMenuButton.textContent = 'Menu';
    navHomeButton.textContent = 'Home';
    navContactUsButton.textContent = 'Contact';



    mainContainer.appendChild(contentContainer);
    mainContainer.appendChild(navContainer);
    contentContainer.appendChild(contentContainerText);
    contentContainer.appendChild(rocketIcon);
    navContainer.appendChild(navMenuButton);
    navContainer.appendChild(navHomeButton);
    navContainer.appendChild(navContactUsButton);

    
    
}

export { homePage }