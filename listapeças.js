var listadepecas = ['Amortecedor', 'Filtro de Ar','Motor'];

if (listadepecas.length < 4){
    //é possível cadastrar
    console.log('É possível cadastrar mais peças.')
    } else {
        //não é possível cadastrar
        console.log('Não é possível cadastrar mais peças.')
    }
let peso = 50;
if (peso < 100){
    //não possui o peso adequado
    console.log("A peça deve pesar, no mínimo, 100g.")
    } else {
        //possui o peso adequado
        console.log("A pela possui o peso adequado.")
    }
let nomepeça = 'Disco de Freio'
if (nomepeça.length > 3) {
    console.log("O nome de peça está adequado para o cadastro!")
    } else {
        console.log("O nome deve ter, pelo menos, 3 caracteres. Digite um nome adequado.")
    }