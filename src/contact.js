export default function() {
    const content = document.querySelector('#contact');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    titleDiv.appendChild(h2);
    content.appendChild(titleDiv);

    const description1 = document.createElement('div');
    const h3_1 = document.createElement('h3');
    h3_1.textContent = 'Il Chef';
    description1.appendChild(h3_1);
    const para1 = document.createElement('p');
    para1.textContent = 'Chef';
    const br1 = document.createElement('br');
    para1.after(br1);
    const para2 = document.createElement('p');
    para2.textContent = '000-000-0001';
    const br2 = document.createElement('br');
    para2.after(br2);
    const para3 = document.createElement('p');
    para3.textContent = 'chef@legitdomain.com';

    description1.appendChild(para1);
    description1.appendChild(para2);
    description1.appendChild(para3);
    content.appendChild(description1);
    
    // const description2 = document.createElement('div');

    // const description3 = document.createElement('div');
}