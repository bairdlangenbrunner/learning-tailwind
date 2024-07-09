const htmlElement = document.querySelector("html");
const button = document.querySelector("button");
const h1Element = document.querySelector("h1");

const setUserName = () => {
  const namePrompt = prompt("please enter your name");
  if (!namePrompt) {
    setUserName();
  } else {
    localStorage.setItem("name", namePrompt);
    h1Element.textContent = `changed name to ${namePrompt}`;
  }
};

// htmlElement.addEventListener("click", () => {
//   alert("you clicked");
// });

button.addEventListener("click", () => {
  setUserName();
});

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  h1Element.textContent = `${storedName} was already stored`;
}
