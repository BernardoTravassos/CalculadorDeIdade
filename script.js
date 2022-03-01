function carregar(){
    var msg = window.document.getElementById('msg')
    var msg2 = window.document.getElementById('msg2')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    //var hora = data.getHours()
    var hora = 20
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        msg2.innerHTML= "BOM DIA!"
        img.src = 'manha.png'
        document.body.style.background = '#b3e9b4'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        msg2.innerHTML = 'BOA TARDE!'
        img.src = 'tarde.png'
        document.body.style.background = '#db5c03'
    } else {
        //BOA NOITE
        msg2.innerHTML = 'BOA NOITE!'
        img.src = 'noite.png'
        document.body.style.background = '#332329'
    }    
}    
    
    