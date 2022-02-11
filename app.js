const addBook = document.querySelector('.add-book');
const section2 = document.querySelector('.section-2');
let btnRemove;
let card;
const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

const example = new Book('Um guia para ser feliz', 'Pedro Ferreira', 224, true);
myLibrary.push(example);
appendBook();

addBook.addEventListener('click', addBookToLibrary);

let book;
function addBookToLibrary() {
    const title = prompt('Title of the book');
    const author = prompt('Author of the book');
    const pages = +prompt('Quantity of pages');
    let read = +prompt('The book was already readed? Say 1 for yes and 0 for no');
    read = Boolean(read);
    console.log(read);
    book = new Book(title, author, pages, read);
    myLibrary.push(book);
    appendBook();
}

function appendBook() {
    section2.innerHTML = '';
    for (let i = 0; i < myLibrary.length; i++) {

        console.log(myLibrary[i]);
        card = document.createElement('div');
        card.className = 'card';

        const title = document.createElement('span');
        title.className = 'title';
        console.log(myLibrary[i].title);
        title.textContent = myLibrary[i].title;

        const author = document.createElement('span');
        author.className = 'info';
        author.innerHTML = `<i class="fas fa-user"></i> ${myLibrary[i].author}`;

        const pages = document.createElement('span');
        pages.className = 'info';
        pages.innerHTML = `<i class="fas fa-copy"></i> ${myLibrary[i].pages} pages`;

        const btnStatus = document.createElement('button');

        if (myLibrary[i].read) {
            btnStatus.className = 'btn status-true';
            btnStatus.textContent = 'READED';
        } else {
            btnStatus.className = 'btn status-false';
            btnStatus.textContent = 'NOT READED';
        }

        btnRemove = document.createElement('button');
        btnRemove.className = 'btn remove';
        btnRemove.textContent = 'REMOVE';

        section2.append(card);
        card.append(title);
        card.append(author);
        card.append(pages);
        card.append(btnStatus);
        card.append(btnRemove);
        const cardId = card.dataset.id = i;

        btnRemove.addEventListener('click', () => {
            console.log('aaaaaaaaaaaaaa');
            console.log(myLibrary);
            myLibrary.splice(cardId, 1);
            appendBook();
            console.log(card);
        });

        btnStatus.addEventListener('click', () => {
            if (myLibrary[i].read) {
                myLibrary[i].read = false;
            } else {
                myLibrary[i].read = true;
            }
            appendBook();
        })
    }
}

