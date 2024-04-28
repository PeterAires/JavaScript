function Verificar(){
    var AreaResultados = document.getElementById('arearesultados') //puxa a area onde vai exibir os resultados
    var nascimento = document.getElementById('nascimento') //puxa o input nascimento que a pessoa colocou
    var ConversorNasc = Number(nascimento.value) //Converte ele pra valor ja que eu nao pq caralhos o JS é assim
    var formsex = document.getElementsByName('radsex')//puxa o nome do input (no caso os dois) como se fosse uma classe, ai ele recebe os dois
    var genero = '' //começa vazio ja que a gente nao sabe o sexo da pessoa (vai ser atribuido pela function Verificar())
    var idade = 2024 - ConversorNasc //fazer o calculo do ano (da para importar a biblioteca de tempo tambem)
    var img = document.createElement('img') //criamos um elemento no HTML atraves do JS (elemento <img>)
    img.setAttribute('id','foto') //atribuimos a essa variavel o id foto atraves do JS
    if (idade <= 0 || idade > 120){ //if classico, (||(um ou outro tem que ser true))
        window.alert('ERRO, digite um numero valido') //janela de alerta no windows
        return //Return pra depois que o erro for executado, inves de prosseguir com o codido, volta do inicio ate a pessoa acertar
    }
    if (formsex[0].checked){ //formsex recebeu as duas caixas [0] homem e [1] mulher, o .checked é para verificar se a caixa esta marcada
        genero = 'Homem' //se sim, atribui Homem ao genero que estava vazio
        if (idade >= 0 && idade < 10){
            //criança
        }else if (idade < 21){
            //jovem
        }else if(idade < 50){
            img.setAttribute('src', 'alucard.jpg')
            //adulto
        }
        else{
            //idoso
        }
    }

    else //poderia botar um else if aqui tbm so pra garantir, porem assim é mais facil
        var genero = 'Mulher'
        if (idade >= 0 && idade < 10){
            //criança
        }else if (idade < 21){
            //jovem
        }else if(idade < 50){
            //adulto
        }else{
            //idoso
        }
    AreaResultados.innerHTML = `Detectamos um ${genero} com ${idade} anos ` // A area de resultados recebe um texto mais as variaveis
    AreaResultados.appendChild(img) //basicamente adiciona a imagem nas ares de resultado



    
}   
//comentario;;