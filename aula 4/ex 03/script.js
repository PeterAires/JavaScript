function Verificar(){
    var incio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var i = Number(incio.value)
    var f = Number(fim.value)
    var p = Number(passo.value)
    var AreaResultado = document.getElementById('AreaResultado')
    if(incio.value.length == 0 || fim.value.length == 0 || //se o o len(le as casas) for == 0, ou seja nao tiver nada em um dos 3 inputs vai aparecer a msg error
        passo.value.length == 0){
        window.alert('Erro, Faltam dados') 
    }
    else{
    if (i < f){ //para ordem crescente, ex inicio 2 fim 10
        for(let c = i; c <= f; c += p){ //ai o calculo simples de entender
            AreaResultado.innerHTML += ` ${c} --> `}} //para exibir um numero repetidamente na tela e nao so o seu resultado usa o (+=) inves so do = 
    else{ // para ordem decrescente ex inicio 10 fim 2
        for(let c = i; c >= f; c -= p){ //ai o calculo simples de entender
            AreaResultado.innerHTML += ` ${c} --> `
        }
    }
}
}
function Resetar(){
    var AreaResultado = document.getElementById('AreaResultado')
    AreaResultado.innerHTML = ''
}