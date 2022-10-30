import './navBar.css';
import { homePage } from '../homePage/homePage';
import { menuPage } from '../menuPage/menuPage';
import { contactPage } from '../contactPage/contactPage';


const mainContainer = document.querySelector('#content');
const navContainer = document.createElement('nav');
const navMenuButton = document.createElement('div');
const navHomeButton = document.createElement('div');
const navContactUsButton = document.createElement('div');

function navBar() {

    navContainer.classList.add('nav-container');
    navMenuButton.classList.add('nav-button');
    navHomeButton.classList.add('nav-button');
    navContactUsButton.classList.add('nav-button');

    navMenuButton.textContent = 'Menu';
    navHomeButton.textContent = 'Home';
    navContactUsButton.textContent = 'Contact';

    mainContainer.appendChild(navContainer);
    navContainer.appendChild(navMenuButton);
    navContainer.appendChild(navHomeButton);
    navContainer.appendChild(navContactUsButton);

    

    navMenuButton.addEventListener('click', () => {
        const contentContainer = document.querySelector('.content-container');
        while(contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.lastChild);
        }
        menuPage();
    });

    navHomeButton.addEventListener('click', () => {
        const contentContainer = document.querySelector('.content-container');
        while(contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.lastChild);
        }
        homePage();
    });

    navContactUsButton.addEventListener('click', () => {
        const contentContainer = document.querySelector('.content-container');
        while(contentContainer.firstChild) {
            contentContainer.removeChild(contentContainer.lastChild);
        }
        contactPage();

    });
}

export { navBar }