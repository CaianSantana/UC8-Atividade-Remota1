let data = "22/2/2023"
let idade = 18
let participantes = ["João","Júlia","Carlos"]

if (data === "22/2/2023"){
    console.log('A data é válida. Prosseguindo com o cadastro.')
    if (idade >= 18){
        console.log('Idade válida. Prosseguindo com o cadastro')
        if (participantes.length<100){
            console.log("Parabéns! Você concluiu a inscrição.")
        }else{
            console.log("Desculpe, o número de inscrições atingiu seu limite.")
        }
    }else{
        console.log('Menores de idade não podem participar do evento.')
    }

}else{
    console.log('Infelizmente as inscrições para o evento já se encerraram.')
}