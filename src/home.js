export default function () {
    const content = document.querySelector('#home');
    console.log(content);
    
    // Title
    const titleDiv = document.createElement('div');

    const h1 = document.createElement('h2');
    h1.textContent = 'Il Ragazzino';
    titleDiv.appendChild(h1);
    titleDiv.classList.add('title');
    content.appendChild(titleDiv);

    // Commend message
    const paraDiv = document.createElement('div');
    const para = document.createElement('para');
    para.textContent = "Il Ragazzino serves the most delectable pizzas! The ambiance and customer service transport you "
    + "to the heart of Italy, making you feel like you're enjoying a meal in a traditional Venetian pizzeria. "
    + "This is the type of place that captures your taste buds and keeps you coming back for more, creating " 
    + "an inviting experience reminiscent of the finest Italian dining establishments.";
    paraDiv.appendChild(para);
    const authorName = document.createElement('p');
    authorName.textContent = '- Geppetto';
    paraDiv.classList.add('description');
    content.appendChild(paraDiv);
    paraDiv.appendChild(authorName);


    // Hours
    const hoursDiv = document.createElement('div');
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours';
    hoursDiv.appendChild(hoursTitle);
    const hours = document.createElement('p');
    hours.textContent = 'asdas';
    hoursDiv.appendChild(hours);
    content.appendChild(hoursDiv);
}