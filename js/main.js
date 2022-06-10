const createArticleLink = document.querySelector(".create-art-link");
const popup = document.querySelector(".Modal");
const form = document.querySelector("form");
const passwordInput = document.querySelector("form input");
const password = 123456789;
const passWrong = document.querySelector("form span");

popup.style.display = "none";

const Modal = () => {
    popup.style.display = "block";
    form.addEventListener("submit", (e)=>{
        e.preventDefault();
        if (passwordInput.value == password) {
            location.assign("http://127.0.0.1:5500/admin/admin.html");
        } else {
            passWrong.innerText = "Mopt de passe Incorrect";

            setTimeout(() => { 
                location.assign("http://127.0.0.1:5500/index.html?");
            }, 1000);
        }
        console.log(passwordInput.value)

    })

    
}

createArticleLink.addEventListener("click", event => {
    event.preventDefault();
    Modal();
})