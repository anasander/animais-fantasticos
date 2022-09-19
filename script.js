// Acessibilidade, tecla t aumenta o texto em 150%
function handleClickT(event) {
  //   console.log(event.key);
  if (event.key === "t") {
    document.documentElement.classList.toggle("textomaior");
  }
}

window.addEventListener("keydown", handleClickT);
