const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");



/*Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/

function btnEncriptar(){
    const textoEncriptado =  encriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.stylebackgroundImage = "none";
}
function btnDesencriptar(){
    const textoEncriptado =  desencriptar(textArea.value)
    mensaje.value = textoEncriptado;
    textArea.value = "";

}


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


function verificarContenidoTextarea() {
    var textarea = document.getElementById('.mensaje');
    return textarea.value.trim() !== '';
  }


// Obtener referencias a los elementos del DOM
const containerPrueba = document.getElementById('ocultar-OnOFF');
// Escuchar el evento de cambio en el textarea
textArea.addEventListener('input', function() {
  // Verificar si el textarea no está vacío
  if (textArea.value.trim() !== '') {
    // Si el textarea no está vacío, ocultar el div
    containerPrueba.style.display = 'none';
  } else {
    // Si el textarea está vacío, mostrar el div
    containerPrueba.style.display = 'block';
  }
});

// if(textArea.value = ''){
//     mensaje.value = ''
// }




