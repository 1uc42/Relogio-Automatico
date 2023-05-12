function carregar() {
var msg=window.document.getElementById('msg')
var img=window.document.getElementById('imagem')
var data= new Date()
var hora=data.getHours()

msg.innerHTML=`Agora São ${hora} horas.`


if(hora>=0 && hora<12){
    //bom dia
    img.src="img/manha.png"
    document.body.style.background='#966047'
} else if(hora>=12 && hora<= 18){
    //boa tarde
    img.src="img/tarde.png"
    document.body.style.background='#eeac80';
} else{
    //boa noite
    img.src="img/noiite.png"
    document.body.style.background='#71464a'
}

}