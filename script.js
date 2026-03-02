//console.log("hola");

const varTitulo = document.getElementById(titulo);

console.log(varTitulo)
varTitulo.addEventListener("click", ()=>{
    varTitulo.innerText= "Buenos días"
    varTitulo.style.background= "red"
})