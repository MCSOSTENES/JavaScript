//function carregar (body)

function carregar(){
    // Variables declaration
    var msg = window.document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    //Mensage 
    msg.innerHTML = `Agora são ${hora} horas`
    
    // conditions for do the changes

    if (hora >= 0 && hora <=12){
        
        //img.setAttribute("style", "background-image: url('../img/morning.jpg')")
        img.src = '../img/morning.png'
        document.body.style.background = '#e2cd9f'

    }
    else if (hora > 12 && hora <= 18){
        
        //img.setAttribute("style", "background-image: url('../img/afternoon.jpg')")
        img.src = '../img/afternoon.png'
        document.body.style.background = '#b9846f'

    }
    else {
        //img.setAttribute("style", "background-image: url('../img/nigth.jpg')")
        img.src = '../img/nigth.png'
        document.body.style.background = '#515154'
    }
     
}