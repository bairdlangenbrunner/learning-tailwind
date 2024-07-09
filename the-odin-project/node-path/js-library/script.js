const libraryDiv = document.querySelector(".library");
let formInputs = document.querySelectorAll("input");
const addButton = document.querySelector("button");
let deleteButtonList = [...document.querySelectorAll(".delete-button")];

let myLibrary = [];

// constructor function for book
function Book(title, author, read, id) {
  this.title = title;
  this.author = author;
  this.read = read;
  this.id = id;
}

const book1 = new Book(
  (title = "One flew over"),
  (author = "Ken Kesey"),
  (read = false),
  (id = crypto.randomUUID())
);
const book2 = new Book(
  (title = "To kill a mockingbird"),
  (author = "Harper Lee"),
  (read = true),
  (id = crypto.randomUUID())
);

myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(
  new Book(
    (title = "title test"),
    (author = "author test"),
    (read = false),
    (id = crypto.randomUUID())
  )
);

const populateLibrary = (library) => {
  if (library.length>0) {
  libraryDiv.innerHTML = `
<table class="library-table">
  <tr>
    <th>book</th>
    <th>author</th>
    <th>read?</th>
    <th></th>
  </tr>
  ${library
    .map(
      (book) =>
        `
  <tr id="${book.id}">
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${{ read } ? "already read" : "not yet read"}</td>
    <td><button class="delete-button" id="${book.id}">delete</button>
  </tr>
  `
    )
    .join("")}
  </table>
  `;
  }
  else {
    libraryDiv.innerHTML = ''
  }
};

const addBook = () => {
  formInputs = document.querySelectorAll("input");
  if (!formInputs[0] || !formInputs[1]) {
    alert("please provide both a title and an author");
    return;
  }
  myLibrary.push(
    new Book(
      (title = formInputs[0].value),
      (author = formInputs[1].value),
      (read = formInputs[2].value),
      (id = crypto.randomUUID())
    )
  );
  populateLibrary(myLibrary);
  addDeleteListeners();
};

const addDeleteListeners = () => {
  deleteButtonList = [...document.querySelectorAll(".delete-button")];
  deleteButtonList.map((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      deleteBook(button.id);
      console.log(button.id, " deleted");
    });
  });
};

const deleteBook = (id) => {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  populateLibrary(myLibrary);
  console.log(myLibrary);
  addDeleteListeners()
};

populateLibrary(myLibrary);
addDeleteListeners()

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  addBook();
  deleteButtonList = [...document.querySelectorAll(".delete-button")];
});