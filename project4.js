console.log("project 4  is stating ");
const name1 = document.getElementById('name')
const email = document.getElementById('email')
const phone = document.getElementById('phone')
const form = document.getElementById('myform')
let boolname = false
let boolemail = false
let boolphone = false

// console.log(name1, email, phone);
name1.addEventListener('blur', () => {
    // console.log('name is blur')
    let regex = /^[a-zA-z]([0-9a-zA-Z]){2,10}$/;
    let str = name1.value;
    if (regex.test(str)) {
        console.log('name matched the expression');
        name1.classList.remove("is-invalid")
        boolname = true;


    } else {
        name1.classList.add("is-invalid")
        console.log('name not matched the expression');

    }
})

email.addEventListener('blur', () => {

    let regex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;
    let str = email.value;
    if (regex.test(str)) {
        console.log('email matched the expression');
        email.classList.remove("is-invalid")
        boolemail = true;

    } else {
        email.classList.add("is-invalid")
        console.log('email not matched the expression');

    }
})
phone.addEventListener('blur', () => {

    let regex = /^([0-9]){11}$/;
    let str = phone.value;
    if (regex.test(str)) {
        console.log('phone matched the expression');
        phone.classList.remove("is-invalid")
        boolphone = true

    } else {
        phone.classList.add("is-invalid")
        console.log('phone not matched the expression');

    }
})
let submit = document.getElementById('submit')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    if (boolname && boolemail && boolphone) {
        let success = document.getElementById("success")
        success.classList.add('show')
        form.reset()
    } else {
        let error = document.getElementById("error")
        error.classList.add('show')
    }

})