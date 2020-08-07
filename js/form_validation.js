const name = document.getElementById('full-name');
const email = document.getElementById('email-address');

let name_not_touched = true;
let email_not_touched = true;

name.addEventListener("click", () => {
    if (name_not_touched) {
        name.classList.add("touched");
        var arr;
        arr = name.className.split(" ");
        if (arr.indexOf("touched") == -1) {
            element.className += " " + "touched";
        }
    }
    name_not_touched = false;
});


email.addEventListener("click", () => {
    if (email_not_touched) {
        email.classList.add("touched");
        var arr;
        arr = element.className.split(" ");
        if (arr.indexOf("touched") == -1) {
            element.className += " " + "touched";
        }
    }
    email_not_touched = false;
}
);


function touch_email(element) {
    
}