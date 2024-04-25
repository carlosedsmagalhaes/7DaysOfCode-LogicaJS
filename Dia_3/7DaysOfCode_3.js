let AreaDesejada                = confirm('Você deseja seguir para área de Front-End ou seguir para a área de Back-End?(OK = Front-End/Cancelar = Back-End)')
alert('Ótima escolha!')

if (AreaDesejada){
let EspecificacaoDesejada       = confirm('Você deseja aprender React ou Vue? (OK = React/Cancelar = Vue)')
    alert(EspecificacaoDesejada ? 'React é muito interessante!' : 'Vue é uma ótima escolha!')
}else{
    let EspecificacaoDesejada   = confirm('Você deseja aprender C# ou Java? (OK = C#/Cancelar = Java)')
    alert(EspecificacaoDesejada ? 'Boa escolha!' : 'Interessante!')
}

let DesejaAprofundar = confirm('Você deseja seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? (OK = Seguir se especializando/Cancelar = Se tornar Fullstack)')

let AlgumaTecnologia = true
while (AlgumaTecnologia){
    let NovaTecnologia          = prompt('Qual tecnologia você gostaria de se especializar ou de conhecer?')
    alert(`${NovaTecnologia} é uma ótima tecnologia!`)
    AlgumaTecnologia            = confirm('Tem mais alguma tecnologia que você gostaria de aprender?')

    let Paragrafo               = document.createElement('p')
    Paragrafo.innerText         = `- ${NovaTecnologia.toUpperCase()}`
    document.body.appendChild(Paragrafo)
}
