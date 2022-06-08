const createArticleLink = document.querySelector(".create-art-link");

const Modal = () => {
    const div = document.createElement("div");
    const msg = document.createElement("p")
    msg.append(div)

    div.classList.add("modal")
    console.log(msg)
    
}

createArticleLink.addEventListener("click", event => {
    event.preventDefault()
    Modal()
})