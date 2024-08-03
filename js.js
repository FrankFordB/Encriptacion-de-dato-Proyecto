

function Encriptar(){
    const ventana = document.getElementById('imagen_borrar');
    const tex_copiar = document.getElementById('tex_copiar');

    if(ventana.style.visibility === 'hidden') {
        ventana.style.visibility = 'visible';
        tex_copiar.style.visibility = 'hidden';
    }else {
        ventana.style.visibility = 'hidden';
        tex_copiar.style.visibility = 'visible';
    } 
    }
document.getElementById('imagen_borrar').style.display = 'visible';

