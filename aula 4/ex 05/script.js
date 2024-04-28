let num = document.getElementById('numero')
let lista = document.getElementById('flista')
let AreaResultado = document.getElementById('AreaResultado')
let valores = []

function Isnumero(n){
if(Number(n) >= 1 && Number(n) <= 100){
    return true
}
else{
    return false
}
}

function inlista(n, l){
    if (l.indexOf(Number(n)) != -1){ // verifica se ja existe o numero na lista, ou seja se for !=diferente de -1, ou seja diferente de nao ter numero (-1 representa que nao tem) por isso != de -1
        return true
    }
    else{
        return false
    }
    
}


function Adicionar(){
    if(Isnumero(num.value) && !inlista(num.value, valores)){
        valores.push(Number(num.value)) //o array vai receber os valores em todos os adicionar
        let item = document.createElement('option') //criamos uma opçao
        item.text = `valor ${num.value} adicionado `  // OU num.value   Delimitamos um texto para o item('opçao') recem criado
        lista.appendChild(item) //adicionamos ele na lista
        AreaResultado.innerHTML = '' //apaga a area sempre que adicionamos um numero
    }
    else{
        window.alert('Valor Invalido ou ja encontrado na lista.')
    }
    num.value = '' //assim que a pessoa adicionar um valor, valido ou invalido, ele vai limpar a area do input num
    num.focus() //faz fechar a area sempre que adicionamos um novo numero
}   
function Finalizar(){
   if(valores.length == 0){
    window.alert('Adicione valores para continuar')
}
else{
    let total = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0

    for (let pos in valores){
        soma += valores[pos]
        if( valores[pos] > maior){
            maior = valores[pos]
        }
        else if(valores[pos] < menor){
            menor = valores[pos]
        }
    }
    let media = soma / total

    AreaResultado.innerHTML = '' //vai zerar a area de resultado
    if(valores.length == 1){
        AreaResultado.innerHTML += `<p>No total temos apenas ${total} valor adicionado</p>`}

    else{
        AreaResultado.innerHTML += `<p>No total temos ${total} valores adicionados</p>`} //tambem da para criar uma tag br em uma variavel e ai adicionala
        AreaResultado.innerHTML += `<p>O Menor valor foi ${menor}</p>`
        AreaResultado.innerHTML += `<p>O Maior valor foi ${maior}</p>`
        AreaResultado.innerHTML += `<p>A soma de todos os valores da ${soma} </p>`
        AreaResultado.innerHTML += `<p>A media dos valores adicionados é ${media}</p>`
    }
}