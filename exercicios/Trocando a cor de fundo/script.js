function Theme(){
    if  (document.body.style.backgroundColor == 'aliceblue') //igual
        {document.body.style.backgroundColor = 'rgb(90, 89, 89)' //recebe
        var b = document.getElementById('botao')
        b.style = 'background-color:aliceblue;color:black'
        b.value = '☀️'
        
        }

    else
        {document.body.style.backgroundColor = 'aliceblue'
        var b = document.getElementById('botao')
        b.style = 'background-color:rgb(90, 89, 89)'
        b.value = '🌙'
    }
}