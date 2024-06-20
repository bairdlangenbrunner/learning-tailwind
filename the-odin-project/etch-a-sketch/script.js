const containerDiv = document.querySelector("#container-div");
const button = document.querySelector("#button");

let squaresPerSide = 50;

const updateUI = () => {
  containerDiv.innerHTML = "";
  for (let row = 1; row <= squaresPerSide; row++) {
    const newRowDiv = document.createElement("div");
    newRowDiv.id = `row${row}`;
    newRowDiv.className = "row-div";
    containerDiv.appendChild(newRowDiv);

    for (let col = 1; col <= squaresPerSide; col++) {
      const newDiv = document.createElement("div");
      newDiv.id = `${row}${col}`;
      newDiv.className = "interior-div";
      // newDiv.innerText = `row${row}col${col}`;
      newRowDiv.appendChild(newDiv);
    }
  }
};

containerDiv.addEventListener("mouseover", (event) => {
  event.target.classList.add("visited");

  setTimeout(() => {
    event.target.classList.remove("visited");
  }, 2000);
});

button.addEventListener("click", (event) => {
  const requestedResolution = prompt(
    "enter a resolution (integer between 1 and 500)",
    `${squaresPerSide}`
  );
  if (requestedResolution === null) {
    return
  }
  if (!Number(requestedResolution)) {
    alert("you need to enter a number between 1 and 500, using default of 50");
    squaresPerSide = 50;
    updateUI();
    return;
  }
  squaresPerSide = requestedResolution;
  updateUI();
});

// set initial UI
updateUI();