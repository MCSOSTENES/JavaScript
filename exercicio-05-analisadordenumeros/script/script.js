var list_numbers = []
var cont = 0

function add_number(){
    var number_txt = document.getElementById("number")
    var number = Number(number_txt.value)

    if(number_txt.legth == 0 || number <= 0 || number > 100){
        window.alert("Erro: Campo de número fora do padrão exigido")
    }
    else if (check_number(number)){
        window.alert("O número já estar na lista")
    }
    else{
        var tab = document.getElementById("tab")
        var btanalise = document.getElementById("btanalise")
        var new_number = document.createElement("option")

        tab.setAttribute('style','display:block;')
        btanalise.setAttribute('style','display:block;')

        new_number.text = `Valor ${number} adicionado`
        new_number.value = `position${cont}`
        tab.appendChild(new_number)

        list_numbers.push(number)

        cont ++
    }
}

function analise(){
    var result = document.getElementById("result")
    var list_org = list_numbers
    list_org.sort((a,b) => a-b)
    var soma = 0

    for(let i=0; i < cont ; i++){
        soma += Number(list_numbers[i])
    }

    result.innerHTML = ` Ao todo, temos ${cont} números cadastrados <br>  O maior valor foi ${list_org[cont-1]} <br>  O menor valor foi ${list_org[0]} <br> O media dos valores é ${soma/cont} <br>`  
}

function check_number(number){
    for(let i=0; i<cont ; i++){
        if(list_numbers[i] == number){
            return true
        }
    }  
    return false
}