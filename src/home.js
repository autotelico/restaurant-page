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
    paraDiv.id = 'commendation';
    const para = document.createElement('para');
    para.textContent = "Il Ragazzino serves the most delectable pizzas! The ambiance and customer service transport you "
    + "to the heart of Italy, making you feel like you're enjoying a meal in a traditional Venetian pizzeria. "
    + "This is the type of place that captures your taste buds and keeps you coming back for more, creating " 
    + "an inviting experience reminiscent of the finest Italian dining establishments.";
    paraDiv.appendChild(para);
    const authorName = document.createElement('p');
    authorName.id = 'author-name';
    authorName.textContent = '- Geppetto';
    paraDiv.classList.add('description');
    content.appendChild(paraDiv);
    paraDiv.appendChild(authorName);


    // Hours
    const hoursDiv = document.createElement('div');
    hoursDiv.classList.add('description');
    const hoursTitle = document.createElement('h3');
    hoursTitle.textContent = 'Hours';
    hoursDiv.appendChild(hoursTitle);
    const hoursList = document.createElement('ul');
    const day1 = document.createElement('li');
    const day2 = document.createElement('li');
    const day3 = document.createElement('li');
    const day4 = document.createElement('li');
    const day5 = document.createElement('li');
    const day6 = document.createElement('li');
    const day7 = document.createElement('li');
    day1.textContent = 'Sunday: 8am - 8pm';
    day2.textContent = 'Monday: 6am - 6pm';
    day3.textContent = 'Tuesday: 6am - 6pm';
    day4.textContent = 'Wednesday: 6am - 6pm';
    day5.textContent = 'Thursday: 6am - 10pm';
    day6.textContent = 'Friday: 6am - 10pm';
    day7.textContent = 'Saturday: 8am - 10pm';
    hoursList.appendChild(day1);
    hoursList.appendChild(day2);
    hoursList.appendChild(day3);
    hoursList.appendChild(day4);
    hoursList.appendChild(day5);
    hoursList.appendChild(day6);
    hoursList.appendChild(day7);
    hoursDiv.appendChild(hoursList);
    content.appendChild(hoursDiv);
}