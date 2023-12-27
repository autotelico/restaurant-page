export default function() {
    const content = document.querySelector('#contact');

    const titleDiv = document.createElement('div');
    titleDiv.classList.add('title');
    const h2 = document.createElement('h2');
    h2.textContent = 'Contact Us';
    titleDiv.appendChild(h2);
    content.appendChild(titleDiv);

    const description1 = document.createElement('div');
    description1.classList.add('description');
    description1.id = 'contact-div';

    const descriptionWrap = document.createElement('div');
    descriptionWrap.id = 'contact-data'
    const h3_1 = document.createElement('h3');
    h3_1.textContent = 'Il Chef';
    descriptionWrap.appendChild(h3_1);
    const para1 = document.createElement('p');
    para1.textContent = 'Chef';
    const br1 = document.createElement('br');
    para1.after(br1);
    const para2 = document.createElement('p');
    para2.classList.add('hoverable');
    para2.title = 'Your real contact info will actually work after clicking, don\'t worry!';
    para2.textContent = '000-000-0001';
    const br2 = document.createElement('br');
    para2.after(br2);
    const para3 = document.createElement('p');
    para3.classList.add('hoverable');
    para3.title = 'Your real contact info will actually work after clicking, don\'t worry!';
    para3.textContent = 'chef@legitdomain.com';
    
    const image1 = document.createElement('img');
    image1.src = "../src/images/chef.jpg";
    image1.title = 'The best chef Milan has ever seen!';

    descriptionWrap.appendChild(para1);
    descriptionWrap.appendChild(para2);
    descriptionWrap.appendChild(para3);
    
    description1.appendChild(descriptionWrap);
    description1.appendChild(image1);

    content.appendChild(description1);
    
    // const description2 = document.createElement('div');

    // const description3 = document.createElement('div');
}