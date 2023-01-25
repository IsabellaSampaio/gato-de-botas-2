const botaoTrailer = document.querySelector(".botao-trailer");
const botaoFecharModal = document.querySelector(".fechar-modal");
const botaoDetalhes = document.querySelector(".botao-detalhes");
const botaoHome = document.querySelector(".botao-home");
const detalhes = document.querySelector(".detalhes");
const conteudoDetalhes = document.querySelector(".conteudo-detalhes");

const menuDetalhes = document.querySelector(".menu-detalhes");
const video = document.getElementById("video");
const modal = document.querySelector(".modal");
const linkDoVideo = video.src;


function alternarModal(){
	modal.classList.toggle("aberto");
}

function alternarDetalhes(){
	detalhes.classList.toggle("aberto");
}

function alternarTelas(){
	detalhes.classList.toggle("fechado");
}


botaoTrailer.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", linkDoVideo);
});

botaoFecharModal.addEventListener("click", () => {
	alternarModal();
	video.setAttribute("src", "");
});

botaoDetalhes.addEventListener("click", () =>{
	alternarDetalhes();
});

botaoHome.addEventListener("click", () =>{
	alternarDetalhes();
});
