//function verificar (onclick)

function verificar(){
    // Variables declaration
    var date = new Date()
    var actualyear = date.getFullYear()
    
    var nascimento = window.document.getElementById('nascimento')
    var msg = document.querySelector('div#msg')
    var img = document.getElementById('img')
    
    if (nascimento.value.length == 0 || Number(nascimento.value) > actualyear){
        window.alert ('ERRO : Verifique os dados e tente novamente')
    }
    else {
      
        var age = actualyear - Number(nascimento.value)
        var sex = document.getElementsByName('rdsex')
        var gender = 'oi'
        
        if(sex[0].checked){
            gender = 'Homem'
        }
        else (sex[1].checked){
            gender = 'Mulher'
        }
        
        msg.innerHTML = (`É ${gender} com ${age} anos`)

    }

}