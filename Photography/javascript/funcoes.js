
var add;

function cameraTakePicture(){
  navigator.camera.getPicture(onSuccess, onFail, {
    quality: 100,destinationType: Camera.DestinationType.DATA_URL
});

 function onSuccess(imageData) {
    var image = document.getElementById('cimg');
    image.src = "data:image/jpeg;base64," + imageData;
    showImage(image);
   }

function onFail(message) {
    alert('Falha devido a: ' + message);
   }
}
    /*chamando a camera e pegando a imagem capturada*/

function showImage(image){

    var imagem = document.createElement("img");

    imagem.id = "imagem"

    imagem.style = 'width: 100%; height 100%; position:absolute; top:0%; border:10px blue solid;'

    imagem.src= image.src;

    add = document.getElementsByTagName('body')[0]

    add.appendChild(imagem);

    /*adicionando a imagem capturada*/
      
    var voltar = document.createElement("img");

    voltar.id= "voltar"

    voltar.style = 'width: 16%; height 16%; position:absolute; top:4%; left:6%;'

    voltar.src= "../componentes/retornar.png";

    add.appendChild(voltar);

    var aux = document.getElementById('voltar');

    aux.addEventListener("click", remover, false); 

    /*adicionando a opçao de retorno para a tela principal*/
}
   function remover(){
      add.removeChild(imagem);
      add.removeChild(voltar);
   }