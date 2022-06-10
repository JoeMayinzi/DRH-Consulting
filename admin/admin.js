const formElement = document.querySelector("form");
const formInput = document.querySelectorAll("form input");
const error = document.getElementById("error")

const check = () =>{
    if (!author.value || !img.value || !category.value || !titre.value || !article.value) {
        error.innerText = "Vous devez remplir tous les champs"
    } else {
        error.innerText = ""
    }
}



formElement.addEventListener("click", Event => {
    Event.preventDefault();
    const formData = new FormData(formElement);
    const entries = formData.entries();
    const entriesObject = Object.fromEntries(entries);
    const entriesObjectJson = JSON.stringify(entriesObject);
    
    fetch("https://restapi.fr/api/posts", {
        method : "POST",
        body : entriesObjectJson,
        headers : {
            "Content-Type" : "application/json"
        }
    })
})