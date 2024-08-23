const libraryDiv = document.querySelector(".library");
let formInputs = document.querySelectorAll("input");
const addButton = document.querySelector("button");
let deleteButtonList = [...document.querySelectorAll(".delete-button")];
let readButtonList = [...document.querySelectorAll(".read-button")];

let myLibrary = [];

class Book {
  constructor(title, author, read, id) {
    this.title = title;
    this.author = author;
    this.read = read;
    this.id = id;
  }
}

// // constructor function for book
// function Book(title, author, read, id) {
//   this.title = title;
//   this.author = author;
//   this.read = read;
//   this.id = id;
// }

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
    (read = true),
    (id = crypto.randomUUID())
  )
);

const populateLibrary = (library) => {
  if (library.length > 0) {
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
    <td><button class="read-button" id="${book.id}">${
          book.read ? "read" : "unread"
        }</button></td>
    <td><button class="delete-button" id="${book.id}">delete</button>
  </tr>
  `
    )
    .join("")}
  </table>
  `;
  } else {
    libraryDiv.innerHTML = "";
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
      (read = formInputs[2].checked),
      (id = crypto.randomUUID())
    )
  );
  console.log(formInputs);
  populateLibrary(myLibrary);
  addEventListeners();
};

const deleteBook = (id) => {
  myLibrary = myLibrary.filter((book) => book.id !== id);
  populateLibrary(myLibrary);
  console.log(myLibrary);
  addEventListeners();
};

const toggleReadStatus = (id) => {
  const book = myLibrary.find((b) => b.id === id);
  if (book) {
    console.log(book);
    book.read = !book.read;
    populateLibrary(myLibrary);
  } else {
    console.log("no book found");
  }
  addEventListeners();
};

const addEventListeners = () => {
  document.querySelectorAll(".delete-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      deleteBook(button.id);
    });
  });

  document.querySelectorAll(".read-button").forEach((button) => {
    button.addEventListener("click", (event) => {
      event.preventDefault();
      toggleReadStatus(button.id);
    });
  });
};

populateLibrary(myLibrary);
addEventListeners();

addButton.addEventListener("click", (event) => {
  event.preventDefault();
  addBook();
  formInputs[0].value = '';
  formInputs[1].value = '';
});
