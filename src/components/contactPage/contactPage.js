import './contactPage.css';
import contactImage from './contact-image.jpeg';


const contactContainer = document.createElement('div');
const contactPageImage = document.createElement('img');
const contactInfo = document.createElement('p');

function contactPage() {
    const contentContainer = document.querySelector('.content-container');

    contactPageImage.src = contactImage;
    contactContainer.classList.add('contact-container');
    contactPageImage.classList.add('contact-page-image');
    contactInfo.textContent = 'Call: 888-999-1342';
    
    contentContainer.appendChild(contactContainer);
    contactContainer.appendChild(contactPageImage);
    contactContainer.appendChild(contactInfo);
}

export { contactPage }