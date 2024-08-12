const textArea = document.getElementById("tex_encriptar");
const mensaje = document.getElementById("desencritarTexto");
let copiar = document.getElementById('botoncopiar');
let parrafo = document.getElementById ('TextoParrafo');
let titulo = document.getElementById ('textoTitulo');
let mensajecopiar = document.getElementById ('mensajecopiado')
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


// STYLOS
copiar.style.display = 'none';
mensajecopiar.style.display = 'none';

// FUNCION BOTONES

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

// FUNCION COPIAR

function btncopiar() {
    // Obtener el elemento que contiene el texto
    const texto = document.getElementById('desencritarTexto');

    // Seleccionar el contenido del campo de texto
    texto.select();
    texto.setSelectionRange(0, 99999); // Para dispositivos móviles

    try {
        // Copiar el texto al portapapeles
        document.execCommand('copy');
        // Mostrar un mensaje de confirmación
        document.getElementById('mensajecopiado').textContent = 'Texto copiado';
        mensajecopiar.style.display = '';
    } catch (err) {
        // Mostrar un mensaje de error si ocurre algún problema
        document.getElementById('mensajecopiado').textContent = 'Error al copiar el texto';
    }
}

// FUNCION PEGAR 

async function btnpegar() {
    try {
        // Leer el contenido del portapapeles
        const texto = await navigator.clipboard.readText();
        mensajecopiar.style.display = 'none';
        // Pegar el contenido en el campo de texto
        document.getElementById('tex_encriptar').value = texto;
        
        // Mostrar un mensaje de confirmación
        document.getElementById('mensaje').textContent = 'Texto pegado desde el portapapeles';
    } catch (err) {
        // Mostrar un mensaje de error si ocurre algún problema
        document.getElementById('mensaje').textContent = 'Error al pegar el texto';
    }
}

// ENCRIPTAR Y DESENCRIPTAR

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


