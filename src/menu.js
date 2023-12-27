export default function() {
    const content = document.querySelector('#menu');
    console.log(content);
    
    const para = document.createElement('p');
    para.textContent = 'Love yourself some Italian food? Then check out our options!';
    
    const foodDiv1 = document.createElement('div');
    foodDiv1.classList.add('food-div');
    const image1 = document.createElement('img');
    image1.src = '../src/images/tiramisu.jpg';
    foodDiv1.appendChild(image1);
    
    const foodDiv2 = document.createElement('div');
    foodDiv2.classList.add('food-div');
    const image2 = document.createElement('img');
    image2.src = '../src/images/pizza-napoletana.jpg';
    foodDiv2.appendChild(image2);
    
    const foodDiv3 = document.createElement('div');
    foodDiv3.classList.add('food-div');
    const image3 = document.createElement('img');
    image3.src = '../src/images/spaghetti-alla-carbonara.jpg';
    foodDiv3.appendChild(image3);
    
    content.appendChild(para);
    content.appendChild(foodDiv1);
    content.appendChild(foodDiv2);
    content.appendChild(foodDiv3);
}