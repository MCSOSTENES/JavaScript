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
        var gender = ''
        
        if(sex[0].checked){
            gender = 'Homem'
            
            if(age < 12){
                
                img.setAttribute('style', "background-image: url('../img/01-kid-m.jpg')")
                
            }
            else if(age < 18){
                             
                img.setAttribute('style', "background-image: url('../img/02-ado-m.jpg')")
            }
            else if(age < 65){
                             
                img.setAttribute('style', "background-image: url('../img/03-adut-m.jpg')")
            }
            else if (age < 116){
                             
                img.setAttribute('style', "background-image: url('../img/04-old-m.jpg')")
            }
            else{
                img.setAttribute('style', "background-image: url('../img/10-dead-m.jpg')")
            }

        }
        else {
            gender = 'mulher'
            
            if(age < 12){
                
                img.setAttribute('style', "background-image: url('../img/05-kid-f.jpg')")
            }
            else if(age < 18){
                             
                img.setAttribute('style', "background-image: url('../img/06-ado-f.jpg')")
            }
            else if(age < 65){
                             
                img.setAttribute('style', "background-image: url('../img/07-adut-f.jpg')")
            }
            else if (age < 116){
                             
                img.setAttribute('style', "background-image: url('../img/08-old-f.jpg')")
            }
            else{
                img.setAttribute('style', "background-image: url('../img/10-dead-f.jpg')")
            }
        }
        
        msg.style.textAlign = 'center'
        msg.innerHTML = (`É ${gender} com ${age} anos`)

    }

}