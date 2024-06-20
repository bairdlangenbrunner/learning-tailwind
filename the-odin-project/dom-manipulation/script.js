containerDiv = document.querySelector("#container");

const p = document.createElement("p");
p.setAttribute("style", "color:red");
p.innerText = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.style.color = "blue";
h3.textContent = "I'm blue";

const div = document.createElement("div");
div.style.border = "black 2px solid";
div.style.backgroundColor = "pink";

const pToo = document.createElement("p");
pToo.textContent = "me too";
const h1Too = document.createElement("h1");
h1Too.textContent = "I'm in a div";

div.appendChild(h1Too);
div.appendChild(pToo);

containerDiv.appendChild(h3);
containerDiv.appendChild(p);
containerDiv.appendChild(div);

// containerDiv.append()

const btn2 = document.querySelector("#btn2");
console.log(btn2);
btn2.onclick = () => alert("clicked second button");

const alertFunction = () => alert("third button CLICKED");
const btn3 = document.querySelector("#btn3");
// btn3.addEventListener("click", () => alertFunction());

btn3.addEventListener("click", (e) => {
  alertFunction();
  console.log(e);
});
