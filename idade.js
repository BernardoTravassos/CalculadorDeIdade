function resultado(){
    var data = new Date()
    var ano = data.getFullYear()
    var txtano = window.document.getElementById('txtage')
    var sex = window.document.getElementsByName('rad')
    var resp = window.document.getElementById('resp')
    var resage = ano - Number(txtano.value)
    var genero = ''
    var img = window.document.createElement('img')
    img.setAttribute('src', 'foto')
    if (txtano.value.lenght == 0 || txtano.value > ano) {
        window.alert('ERROR')}
        if (sex[0].checked){
            genero = 'Homem'
            if (resage >= 0 && resage < 10){
            //guri
                img.setAttribute('src', 'bebe-nino.png')
            } else if (resage <= 30){
            //jovem
                img.setAttribute('src', 'jovem-nino.png')
            } else if (resage <= 50){
            //adulto
                img.setAttribute('src', 'adulto.png')
            } else {
            //idoso
                img.setAttribute('src', 'idoso.png')
            } 
            
        } else {
            genero = 'Mulher'
            if (resage >= 0 && resage < 10){
                //guri
                    img.setAttribute('src', 'bebe-nina.png')
                } else if (resage <= 30){
                //jovem
                    img.setAttribute('src', 'jovem-nina.png')
                } else if (resage <= 50){
                //adulto
                    img.setAttribute('src', 'adulta.png')
                } else {
                //idoso
                    img.setAttribute('src', 'idosa.png')
                } 
        }
    resp.style.textAlign = 'center'    
    resp.innerText = `Você é ${genero} e tem ${resage} anos de idade!`
    resp.appendChild(img)        



   
}
