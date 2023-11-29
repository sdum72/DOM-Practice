// DOM - Document Object Model
const container = document.querySelector('#container');
// selects the #container div

console.dir(container.firstElementChild);
// selects the first child of #container => .display

const controls = document.querySelector('.controls');
// selects the .controls div

console.dir(controls.previousElementSibling);
// selects the prior sibling => .display

// create a new div referenced  in the variable 'div'. or // creating a new element of tag type div
const div = document.createElement('div');

// Adding inline style
//adds the indicated style rule
div.style.color = 'blue';

//adds several style rules
div.style.cssText = 'color: blue; background: white';

// adds several style rules
div.setAttribute('style', 'color: blue; background: white;');

// Editing attributes
// if id exists, update it to 'theDiv', else create an id with value "theDiv".
div.setAttribute('id', 'theDiv');

// returns value of specified attribute, in this case "theDiv"
div.getAttribute('id');

// removes specified attribute.
div.removeAttribute('id');

// Working with classes.
//adds class "new" to your new div.
div.classList.add("new");

// removes "new" class from div
div.classList.remove('new');

// if div doesn't have class "active" then add it, or if it does, then remove it.
div.classList.toggle('active');

// Adding text content.
// creates a text node containing "Hello World!" and inserts it in div.
div.textContent = 'Hello World!'

// Adding HTML content
// renders the HTML inside div - NB not to be used as can create security risks. 
// div.innerHTML = '<span>Hello World!</span>;






