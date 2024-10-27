// document.querySelector* chooses the element using the schema 
// for example #app-title or .menu-items one chooses an id, and the next one chooses the class

// it also exists document.getElementsByClassName which returns an array of elements

// it also exists document.getElementsByTagName which returns an array of elements

function changeText() {
  document.getElementsByTagName("p")[0].innerHTML = "Hello World";
  
  // Cierra el bloque del 'if'
  if (document.getElementsByTagName("p")[0].innerHTML == "Hello World") {
    document.getElementsByTagName("p")[0].className = "changed";
  }
}

// Añadir el timer
setTimeout(changeText, 2500);

const parent = document.getElementById("parent");
console.log(parent);

const children = parent.children;
console.log(children);

const firstChild = parent.firstElementChild;
console.log(firstChild);

const previousSibling = parent.previousElementSibling;
console.log(previousSibling);

const nextSibling = parent.nextElementSibling;
console.log(nextSibling);

const lastChild = parent.lastElementChild;
console.log(lastChild);

console.log('elementos padre ------------');

const children2 = document.querySelector('li')
console.log(children2);

const parent2 = children2.parentNode;
console.log(parent2);

const grandParent = parent2.parentElement;
console.log(grandParent);

const grandGrandParent = children2.closest('menu');
console.log(grandGrandParent);