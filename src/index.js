import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import "./style.css";
import "./meyerReset.css";

document.addEventListener("DOMContentLoaded", () => {

    
    const tabs = document.querySelectorAll('[data-tab-target]');
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            // a little loop to remove all other .active classes from other tab contents
            const tabContents = document.querySelectorAll('[data-tab-content]');
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
                console.log('.active Classes cleared.');
            })
            
            const content = document.querySelector(tab.dataset.tabTarget);
            content.classList.add('active');
            console.log('the class .active has been added');
        })
    })
    
    home();
    menu();
    contact();
})