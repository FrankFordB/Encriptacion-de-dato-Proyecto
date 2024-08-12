const textArea = document.getElementById("tex_encriptar");
const mensaje = document.getElementById("desencritarTexto");
let copiar = document.getElementById('botoncopiar');
let parrafo = document.getElementById ('TextoParrafo');
let titulo = document.getElementById ('textoTitulo');
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

copiar.style.display = 'none';


function btnEncriptar() {
    const textoEncriptado = encriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = '';
    mensaje.style.backgroundImage = 'none'
    copiar.style.display = '';
    parrafo.style.display = 'none'
    titulo.style.display = 'none';
}

function btndesencriptar() {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.value = textoEncriptado
    textArea.value = '';
}


function encriptar (stringEncriptada){
let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
stringEncriptada = stringEncriptada.toLowerCase()

for(let i = 0; i < matrizCodigo.length; i++){
    if(stringEncriptada.includes(matrizCodigo[i][0])){
        stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])
    }
}
return stringEncriptada
}

function desencriptar (stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i","imes"], ["a", "ai"], ["o","ober"], ["u","ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()
    
    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0])
        }
    }
    return stringDesencriptada
    }