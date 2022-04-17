let currentScrollPosition=0;
let scrollAmount=320;
const sCont= document.querySelector(".storys-container");
const hScroll = document.querySelector(".horizontal-scroll");

const btnScrollLeft = document.querySelector("#btn-scroll-left");
const btnScrollRight = document.querySelector("#btn-scroll-right");

btnScrollLeft.style.opacity="0";
    
let maxScroll= -sCont.offsetWidth + hScroll.offsetWidth ;

function scrollHorizontally(val){
    currentScrollPosition += (val * scrollAmount);

    if (currentScrollPosition >=0){
        currentScrollPosition =0
        btnScrollLeft.style.opacity="0"; 
    
    }else {
        btnScrollLeft.style.opacity="1";
    }
    
    if(currentScrollPosition <= maxScroll){
        currentScrollPosition = maxScroll;
        btnScrollRight.style.opacity="0";
    
    }else {
        btnScrollRight.style.opacity="1";
    }

    sCont.style.left = currentScrollPosition + "px";
}





function createPostContainer(mensagem) {
    const postCreator = document.querySelector(".post_creator");
    const postContainer = document.createElement("div");
    postContainer.classList.add("post_container");

    const profileDiv = createProfileRow();
    const postDescription = createPostDescription(mensagem);
    const postFooter = createPostFooter();


    postContainer.append(profileDiv, postDescription, postFooter);
    // main.append(postContainer);
    postCreator.after(postContainer)
}

function createPostFooter() {
    const postRow = document.createElement("div");
    postRow.classList.add("post_row");

    const numbers = createPostNumber();
    const icons = createPostIcons();

    postRow.append(numbers, icons);

    return postRow;
}

function createPostIcons() {
    const atividade = document.createElement("div");
    atividade.classList.add("atividade_icons");

    
    const divLikes = document.createElement("div");
    const iconLike = document.createElement("img");
    iconLike.src = "like.png";

    divLikes.append(iconLike);
    divLikes.innerHTML = divLikes.innerHTML + " Like";

    const divComments = document.createElement("div");
    const iconComments = document.createElement("img");
    iconComments.src = "comment.png";

    divComments.append(iconComments);
    divComments.innerHTML = divComments.innerHTML + " Comment"

 
    const divShare = document.createElement("div");
    const iconShare = document.createElement("img");
    iconShare.src = "share.jpg";

    divShare.append(iconShare);
    divShare.innerHTML = divShare.innerHTML + " Share"



    atividade.append(divLikes, divComments, divShare);

    return atividade;
}

function createPostNumber() {
    const number = document.createElement("div");
    number.classList.add("numbers");

    const numbersLeft = document.createElement("div");
    numbersLeft.classList.add("numbers_left");

    const numbersRight = document.createElement("div");
    numbersRight.classList.add("numbers_right");
    
    const spanComentarios = document.createElement("span");
    const spanCompartilhamentos = document.createElement("span");

    spanComentarios.innerText = "0 Comments";
    spanCompartilhamentos.innerText = "0 Shares"

    numbersRight.append(spanComentarios, spanCompartilhamentos);

    number.append(numbersLeft, numbersRight);

    return number;
}

function createPostDescription(mensagem) {
    const paragraph = document.createElement("p");
    paragraph.classList.add("post_description");

    paragraph.innerText = mensagem

    return paragraph;
}

function createProfileRow() {
    const postRow = document.createElement("div");
    postRow.classList.add("post_row");

    const userProfile = document.createElement("div");
    userProfile.classList.add("user_profile");

    const img = document.createElement("img");
    img.src = "perfil.jpg"

    const info = document.createElement("div");
    const usuario = document.createElement("p");
    const span = document.createElement("span");

    usuario.innerText = "Harry, o porquinho da India";
    span.innerText = "16 de Abril às 15:18";

    info.append(usuario, span);
    userProfile.append(img, info);
    postRow.append(userProfile);

    return postRow;
}


const postInput = document.querySelector("#post_input");
postInput.addEventListener("keydown", function(evento) {
   

    if (evento.code === "Enter" || evento.code === "NumpadEnter") {
        const texto = evento.target.value;

        createPostContainer(texto);

        evento.target.value = ""
    }
    
})