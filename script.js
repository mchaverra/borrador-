//console.log("hola");

const varTitulo = document.getElementById("titulo");
let estadoInicial = true;

varTitulo.addEventListener("click", () => {
if(estadoInicial === true){
    varTitulo.innerText="buenos dias";
    varTitulo.style.color="green";
    varTitulo.style.backgroundColor ="white";
} else {
    varTitulo.innerText = "hola";
    varTitulo.style.color="red";
    varTitulo.style.backgroundColor ="transparent";
}
estadoInicial = !estadoInicial;

} )

const varTexto= document.getElementById("texto");

const listaTextos=["un","mago","con","una","barita"];
let indice = 0;

varTexto.addEventListener("click",()=> {
    if (indice< listaTextos.length){
        varTexto.innerText= listaTextos[indice];
    indice = indice + 1;
} else {
    //indice=0;// si quiero que vuelvaa empezar
    varTexto.innerText="FIN.";
}
})
