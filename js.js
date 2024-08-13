// VARIABLES

const textArea = document.getElementById("tex_encriptar");
const mensaje = document.getElementById("desencritarTexto");
let copiar = document.getElementById('botoncopiar');
let parrafo = document.getElementById ('TextoParrafo');
let titulo = document.getElementById ('textoTitulo');
let mensajecopiar = document.getElementById ('mensajecopiado');
// let modalVent = document.getElementById('modalventana');
// const cerrarmodal = document.getElementById("cerrarmodal");
// const noHayTexto = document.getElementById ('noHayTexto')
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "a" es convertida para "ai"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"


// STYLOS INICIO

copiar.style.display = 'none';
mensajecopiar.style.display = 'none';
textArea.focus();
// cerrarmodal.style.display = 'none';
// noHayTexto.style.display ='none';
// modalVent.stylo.display = 'none';
// FUNCION TEXTO OBLIGATORIO
// function btnEncriptar1(btnEncriptar){
// var textArea = document.getElementById("tex_encriptar");
//     if  (textArea.value.trim === 'none')
//         {alert('nada');
        
//     } else {
//         alert ('joli');
//     }
// }


// FUNCION BOTONES
function reset() {
    const textArea = document.getElementById("tex_encriptar");
    textArea.value = '';
    textArea.focus();
    const mensaje = document.getElementById("desencritarTexto");
    mensaje.value = '';
    mensaje.style.backgroundImage = '';
    parrafo.style.display = '';
    titulo.style.display = '';
    copiar.style.display = 'none';
    
    // modalVent.stylo.display = 'none';
    // cerrarmodal.style.display = 'none';
    // noHayTexto.style.display ='none';
        // modalVent.stylo.display = 'block';
    }
    
// ENCRIPTAR

function btnEncriptar() {
    
    if  (textArea.value === ''){
    alert ('Escriba un mensaje, por favor.');
    // cerrarmodal.style.display = 'block';    
    // noHayTexto.style.display = 'block'    
    }
    else {
    
    const textoEncriptado = encriptar(textArea.value)
    console.log (textArea.value.trim());
    mensaje.focus();
    mensaje.value = textoEncriptado
    textArea.value = '';
    mensaje.style.backgroundImage = 'none';
    copiar.style.display = '';
    parrafo.style.display = 'none';
    titulo.style.display = 'none';

    }
    
}
// DESENCRIPTAR

function btndesencriptar() {
    if  (textArea.value === ''){
        alert ('Escriba un mensaje, por favor.');
        // cerrarmodal.style.display = 'block';    
        // noHayTexto.style.display = 'block'    
        }
        else {
    const textoEncriptado = desencriptar(textArea.value)
    mensaje.focus();
    mensaje.value = textoEncriptado;
    textArea.value = '';
    copiar.style.display = '';
    parrafo.style.display = 'none';
    titulo.style.display = 'none';
    mensaje.style.backgroundImage = 'none';}
}

// FUNCION COPIAR

function btncopiar() {
    
    const texto = document.getElementById('desencritarTexto');

    
    texto.select();
    texto.setSelectionRange(0, 99999);
    
    try {
        
        document.execCommand('copy');
        
        document.getElementById('mensajecopiado').textContent = 'Texto copiado';
        mensajecopiar.style.display = '';
        } catch (err) {
    document.getElementById('mensajecopiado').textContent = 'Error al copiar el texto';
    }
    
}

// FUNCION PEGAR 

async function btnpegar() {
    try {
        
        const texto = await navigator.clipboard.readText();
        mensajecopiar.style.display = 'none';
        
        document.getElementById('tex_encriptar').value = texto;
        
        document.getElementById('mensaje').textContent = 'Texto pegado desde el portapapeles';
    } catch (err) {
                
        ;
    }
}

// ENCRIPTAR Y DESENCRIPTAR FUNCIONES


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


