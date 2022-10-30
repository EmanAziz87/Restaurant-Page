import './menuPage.css';
import friedChickenImage from './fried-chicken-one.jpg';
import wingsImage from './wings.jpg';
import chickenSandwichImage from './chicken-sandwich.jpg';

const friedChickenImageContainer = document.createElement('div');
const wingsImageContainer = document.createElement('div');
const chickenSandwichImageContainer = document.createElement('div');
const friedChickenImg = document.createElement('img');
const wingsImg = document.createElement('img');
const chickenSandwichImg = document.createElement('img');

const friedChickenDescription = document.createElement('p');
const wingsDescription = document.createElement('p');
const chickenSandwichDescription = document.createElement('p');

function menuPage() {
    const contentContainer = document.querySelector('.content-container');

    friedChickenImg.src = friedChickenImage;
    wingsImg.src = wingsImage;
    chickenSandwichImg.src = chickenSandwichImage;

    friedChickenImageContainer.classList.add('menu-item-container');
    wingsImageContainer.classList.add('menu-item-container');
    chickenSandwichImageContainer.classList.add('menu-item-container');

    friedChickenImg.classList.add('menu-item-image');
    wingsImg.classList.add('menu-item-image');
    chickenSandwichImg.classList.add('menu-item-image');

    friedChickenDescription.classList.add('menu-item-description');
    wingsDescription.classList.add('menu-item-description');
    chickenSandwichDescription.classList.add('menu-item-description');

    friedChickenDescription.textContent = '$11 - Tender Chicken Breast, marinated in buttermilk, breadeded and fried';
    wingsDescription.textContent = '$16 - 1.5Lbs of breaded chicken wings with your choice of sauce';
    chickenSandwichDescription.textContent = '$9 - 3 Chicken tenders, Cheese, lettuce, and tomatoes, topped with our in house sauce';


    contentContainer.appendChild(friedChickenImageContainer);
    contentContainer.appendChild(wingsImageContainer);
    contentContainer.appendChild(chickenSandwichImageContainer);

    friedChickenImageContainer.appendChild(friedChickenImg);
    wingsImageContainer.appendChild(wingsImg);
    chickenSandwichImageContainer.appendChild(chickenSandwichImg);
    
    friedChickenImageContainer.appendChild(friedChickenDescription);
    wingsImageContainer.appendChild(wingsDescription);
    chickenSandwichImageContainer.appendChild(chickenSandwichDescription);


}

export { menuPage }