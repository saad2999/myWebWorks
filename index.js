console.log("index .js added");

function book(name, autor, type) {
    this.name = name;
    this.autor = autor;
    this.type = type;

}

function Display() {


}
Display.prototype.add = function(book) {
        console.log("adding to ui");
        let tablebody = document.getElementById("tablebody")

        let uistring = ` <tr>
                   
                    <td>${book.name}</td>
                   <td>${book.autor}</td>
                    <td>@${book.type}</td>
                    
                    </tr>`;
        tablebody.innerHTML += uistring;
    }
    // saad
Display.prototype.clear = function() {
    let libraryForm = document.getElementById("libraryForm");

    libraryForm.reset();
}
Display.prototype.validate = function(book) {
    if ((book.name.length < 2) || (book.autor.length < 2)) {
        return false;
    } else {
        return true;
    }
}
Display.prototype.show = function(str, msg) {
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
        display.add(bookobj);
        display.clear();
        display.show("success", "your form is submitted")
    } else {
        display.show("error", "you need to fill all fields correctly")
    }

    console.log("library Form Submitted")


}