const textArea = document.querySelector('.text-area');
const mensaje = document.querySelector('.mensaje');
const copyBotton = document.getElementById('CopyBotton')
const divImgText = document.getElementById('divImgText');

copyBotton.style.display = 'none';

textArea.addEventListener('input', ()=> {
    let contenidoTextarea = textArea.value.trim();
    if (contenidoTextarea !== '') {
      divImgText.style.display = 'none';
    } else {
      divImgText.style.display = 'block';
    }
  });

function encriptar(stringEncriptada){
    let matrizCodigo = [['e','enter'],['i', 'imes'],['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}

function desencriptar(stringDesencriptada){
    let matrizCodigo = [['e','enter'],['i', 'imes'],['a', 'ai'], ['o', 'ober'], ['u', 'ufat']];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}
let textoEncriptado;

function btnEncriptar(){
    const textoEncriptado =  encriptar(textArea.value);
    mensaje.value = textoEncriptado;
    textArea.value = '';
    if(textoEncriptado !== ''){
        copyBotton.style.display = 'block';
    }    
}

textArea.addEventListener('focus', ()=>{
    mensaje.value = '';
    divImgText.style.display = 'block';

});


function btnDesencriptar(){
    const textoEncriptado =  desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";

}


copyBotton.addEventListener('click', function() {
  const texto = mensaje.value;
  
  navigator.clipboard.writeText(texto)
    .then(() => {
      console.log('Texto copiado al portapapeles');
    })
    .catch(err => {
      console.error('Error al copiar el texto: ', err);
    });
    mensaje.value = '';
    copyBotton.style.display = 'none';
    divImgText.style.display = 'block';

});



