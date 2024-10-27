const boton = document.querySelector("#btn");

const buttonClicked = (event)=>{
  console.log(event.target);
  console.log(event.target.innerHTML);
  event.target.innerHTML = "Clickeado";
}

boton.addEventListener("click", buttonClicked)