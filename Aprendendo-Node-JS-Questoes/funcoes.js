function funcParImpar(num){
    if(num % 2 == 0){
        return "Par";
    }else{
        return "Impar"
    }
}

function numAleatorio(){
    // gerando números no intervalo dos números inteiros positivos entre 0 e 65000
    return Math.floor(Math.random() * 65000);
}

module.exports = {
    funcParImpar, numAleatorio
}