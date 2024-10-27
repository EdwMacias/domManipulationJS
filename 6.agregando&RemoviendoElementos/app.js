setTimeout(() => {
  const newPElement = document.createElement("p");
  newPElement.innerHTML = "Hello Platzi";
  const contentArea = document.getElementById("contentArea");
  contentArea.prepend(newPElement);
}, 2500);

const newItem = document.createElement("li");
newItem.textContent = "item 5";
const listArea = document.getElementById("listArea");
listArea.append(newItem);

setTimeout(() => {
  listArea.removeChild(newItem);
  
}, 5000);

 const list = document.querySelector("ul");
 list.removeChild(list.firstElementChild);

const contentArea = document.querySelector("#contentArea");
console.log(contentArea);

const originalP = contentArea.querySelector("p");
console.log(originalP);

const clonedP = originalP.cloneNode(true);
console.log(clonedP);

contentArea.append(clonedP);

clonedP.textContent = ('este es un nuevo texto')

const itemToReplace = listArea.children[2];
itemToReplace.replaceWith(clonedP);