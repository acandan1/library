/* eslint-disable prefer-template */
/* eslint-disable no-unused-vars */

function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const popup = document.querySelector(".full-screen");

function togglePopup() {
    popup.classList.toggle('hidden');
}

const content = document.querySelector(".books")

function displayBooks(book) {
    const bookDiv = document.createElement("div");
    const ourBookName = document.createElement("h3");
    ourBookName.innerHTML = "Name: " + book.name;
    bookDiv.appendChild(ourBookName);

    const ourBookAuthor = document.createElement("h3");
    ourBookAuthor.innerHTML = "Author: " + book.author;
    bookDiv.appendChild(ourBookAuthor);

    const ourBookPages = document.createElement("h3");
    ourBookPages.innerHTML = "Pages: " + book.pages;
    bookDiv.appendChild(ourBookPages);

    const ourBookRead = document.createElement("input");
    ourBookRead.className = "checkbox";
    ourBookRead.type = "checkbox";
    ourBookRead.id = "switch";
    const ourBookReadLabel = document.createElement("label");
    ourBookReadLabel.innerHTML = "Read";
    ourBookReadLabel.for = "switch";
    ourBookReadLabel.className = "toggle";
    bookDiv.appendChild(ourBookRead);
    bookDiv.appendChild(ourBookReadLabel);

    const removeButton = document.createElement("button");
    removeButton.className = "remove";
    removeButton.innerHTML = "Remove!";
    removeButton.addEventListener('click', (event) => {
        bookDiv.parentNode.removeChild(bookDiv);
    });
    bookDiv.appendChild(removeButton);
    
    content.appendChild(bookDiv).className = "display-books";
}


function addBookToLibrary() {
    const ourName = document.getElementById("bookName").value;
    const ourAuthor = document.getElementById("bookAuthor").value;
    const ourPages = document.getElementById("bookPages").value;
    const ourRead = document.getElementById("bookRead").checked;
    const book = new Book(ourName, ourAuthor, ourPages, ourRead);
    displayBooks(book);
    togglePopup();
    document.querySelector(".pop-up-form").reset();
}

const applyButton = document.getElementById("submit-button");
applyButton.addEventListener('click', (event) => {
    event.preventDefault();
    addBookToLibrary();
});

/* let cell = document.createElement("div");
cell.innerText = myLibrary;
const content = document.querySelector(".content");
content.appendChild(cell);
 */
