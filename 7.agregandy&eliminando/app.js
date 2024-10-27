const container = document.querySelector(".container");

const button = document.querySelector("#btn");

container.addEventListener("mouseover", () => {
  container.style.backgroundColor = "blue";
});

container.addEventListener("mouseout", () => {
  container.style.backgroundColor = "yellow";
});

// button.addEventListener("click", () => {
//   alert("Click");
// });

const buttonClickCallBack = () => {
  alert("Click");
  button.removeEventListener("click", buttonClickCallBack);
  console. log('se quito la opcion de hover');
};

button.addEventListener("click", buttonClickCallBack);

