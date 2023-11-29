const container = document.querySelector('#container');

const content = document.createElement('div');
content.classList.add('content');
content.textContent = 'This is the glorious text-content!';

container.appendChild(content);

const containers = document.querySelector('#container');
const para = document.createElement('p');
para.textContent = 'Hey l am red!';
