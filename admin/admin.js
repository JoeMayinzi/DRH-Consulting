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



formElement.addEventListener("submit", Event => {
    Event.preventDefault()
    const formData = new FormData(formElement)
    
    for(let key of formData.keys()){
        console.log(key, formData.get(key))
    }

    try {
        
        fetch("https://restapi.fr/api/article", {
            method : "POST",
            body : formData
        }).then((Response) => {
            Response.json()
        }).then((data)=>{
            console.log(data)
        })

    } catch(error) {
        console.error(error)
    }
    check()
})

