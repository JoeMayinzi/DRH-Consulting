const createArticleLink = document.querySelector(".create-art-link");
const popup = document.querySelector(".Modal");
const form = document.querySelector("form");
const passwordInput = document.querySelector("form input");
const password = 123456789;


popup.style.display = "none"

const Modal = () => {
    popup.style.display = "block";
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        if (passwordInput.value == password) {
            location.assign("http://127.0.0.1:5500/admin/admin.html");
        } else {
           location.assign("http://127.0.0.1:5500/index.html?") 
        }
        console.log(passwordInput.value)

    })

    
}

createArticleLink.addEventListener("click", event => {
    event.preventDefault()
    Modal()
})