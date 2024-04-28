function Verificar(){
    var tab = document.getElementById('seltab')
    var num = document.getElementById('numero')
    var cnum = Number(num.value)
    var AreaResultado = document.getElementById('AreaResultado')
    var c = 1
    while(c < 11){
    let item = document.createElement('option') //bascicamente criamos um input de uma janela, isso dai é para criar um elemento desta janela        1 cria uma opçao
    item.text = `${cnum} x ${c} = ${cnum*c}` //o calculo                                                                                             2 adiciona a conta a opção
    item.value = `tab${c}` //importante pra outras linguagems para saber qual item foi selecionado
    tab.appendChild(item) //colocamos um item dentro da opção e agora colocamos a opçao no input(tab)                                               3 adiciona a opçao na janela como um item
    c++}
 //ou seja basicamente criamos uma opção e depois adicionamos ele a um valor, depois adicionamos esta opção com a conta dentro, dentro da janela    
}