//function carregar (body)

function carregar(){
    // Variables declaration
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('img')
    var data = new Date()
    var hora = data.getHours()

    //Mensage 
    msg.innerHTML = `Agora são ${hora} horas`
    
    // conditions for do the changes

    if (hora >= 0 && hora <=12){
        
        img.setAttribute("style", "background-image: url('../img/morning.jpg')")
        document.body.style.background = '#e2cd9f'

    }
    else if (hora > 12 && hora <= 18){
        
        img.setAttribute("style", "background-image: url('../img/afternoon.jpg')")
        document.body.style.background = '#b9846f'

    }
    else {
        img.setAttribute("style", "background-image: url('../img/nigth.jpg')")
        document.body.style.background = '#515154'
    }
     
}