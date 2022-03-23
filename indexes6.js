console.log("index es6 added");


function addtolocal(book) {
    let books = localStorage.getItem("books");

    if (books == null) {
        booksobj = [];

    } else {
        booksobj = JSON.parse(books);



    }
    booksobj.push(book);
    localStorage.setItem("books", JSON.stringify(booksobj))
}

function gettolocal() {
    let books = localStorage.getItem("books");

    if (books == null) {
        booksobj = [];

    } else {
        booksobj = JSON.parse(books);



    }
    return booksobj;
}

function deleteBook(index) {

    let bookarray = gettolocal()
    bookarray.splice(index, 1);
    localStorage.setItem("books", JSON.stringify(bookarray))
    add();




}

function add() {
    let books = localStorage.getItem("books");

    if (books == null) {
        booksobj = [];

    } else {
        booksobj = JSON.parse(books);



    }
    let html = "";
    booksobj.forEach(function(element, index) {

        html += ` <tr>
               
        <td>${element.name}</td>
       <td>${element.autor}</td>
        <td>@${element.type}</td>
        <td> <button id="${index}"onclick="deleteBook(this.id)" class="btn btn-primary">Delete Book</button></td>
        </tr>`;

    });
    let notesElm = document.getElementById("tablebody");


    if (localStorage.length == 0) {
        notesElm.innerHTML = `<h1>nothing to show<h1> `;
    } else {

        notesElm.innerHTML = html;
    }



}
class book {
    constructor(name, autor, type) {
        this.name = name;
        this.autor = autor;
        this.type = type;

    }
}
class Display {

    clear() {
        let libraryForm = document.getElementById("libraryForm");

        libraryForm.reset();
    }
    validate = function(book) {
        if ((book.name.length < 2) || (book.autor.length < 2)) {
            return false;
        } else {
            return true;
        }
    }
    show(str, msg) {
        let myalert = document.getElementById("myalert");
        let newstr = `<div class="alert alert-warning alert-dismissible fade show" role="alert">
                <strong>${str}</strong> ${msg}
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
                </div>`;
        myalert.innerHTML = newstr;
        setTimeout(() => {
            myalert.innerHTML = '';
        }, 2000);


    }
}
add()


let libraryForm = document.getElementById("libraryForm");
libraryForm.addEventListener("submit", libraryFormSubmit);

function libraryFormSubmit(e) {
    e.preventDefault();
    let name = document.getElementById('bookName').value;
    let autor = document.getElementById('Author').value;
    let fiction = document.getElementById("Fiction");
    let programming = document.getElementById("Programming");
    let Advanture = document.getElementById("Advanture");
    let type;
    if (fiction.checked) {
        type = fiction.value;
    } else if (Advanture.checked) {
        type = Advanture.value;

    } else if (programming.checked) {
        type = programming.value;

    }
    let bookobj = new book(name, autor, type);
    let display = new Display();
    if (display.validate(bookobj)) {

        addtolocal(bookobj)

        add();
        display.clear();
        display.show("success", "your form is submitted")
    } else {
        display.show("error", "you need to fill all fields correctly")
    }

    console.log("library Form Submitted")

}