const controle = document.querySelectorAll('.controle-ajuste')
const braco = document.querySelector('#braco')
var valor = braco.value

controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento)=>{
        operador = evento.target.textContent
        manipulaDados(operador)
    })
})


function manipulaDados(operacao){
    if (operacao === '+'){
        braco.value = parseInt(braco.value) + 1
    } else{
        braco.value = parseInt(braco.value) - 1
    }
}