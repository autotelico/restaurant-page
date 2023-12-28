import home from './home.js';
import menu from './menu.js';
import contact from './contact.js';
import "./style.css";
import "./meyerReset.css";

document.addEventListener("DOMContentLoaded", () => {

    home();
    menu();
    contact();

    const tabs = document.querySelectorAll('[data-tab-target]');
    tabs.forEach(tab => {

        tab.addEventListener('click', (e) => {
            // a little loop to remove all other .active classes from other tab contents
            tabs.forEach(tab => {
                tab.classList.remove('active');
                console.log('cleared all .active classes!');
            })
            
            tab.classList.add('active');
            console.log('Tab got the active class');

            const tabContents = document.querySelectorAll('[data-tab-content]');
            tabContents.forEach(tabContent => {
                tabContent.classList.remove('active');
            })

            const content = document.querySelector(tab.dataset.tabTarget);
            content.classList.add('active');
        })
    })

})