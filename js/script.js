const seguir = document.getElementById("btn-follow");
const comentar = document.getElementById("btn-coment");
const btnLike = document.getElementById("btn-like");
const likes = document.getElementById("likes");

window.onload = btnLike.addEventListener("click", botonMegusta);
window.onload = comentar.addEventListener("click", botonComentar);
let comentarios = [];

function botonSeguir(){
    if(seguir.innerHTML == "Seguir"){
        seguir.innerHTML = "Dejar de seguir";
        seguir.style.background = "red";
    }else {
        seguir.innerHTML = "Seguir";
        seguir.style.background = "dodgerblue";
    }
}

function botonMegusta(){
    if(likes.innerHTML == "<b>200</b> likes"){
        likes.innerHTML = "<b>201</b>" + " likes";
        btnLike.style.background = "red"
        btnLike.innerHTML = "Quitar me gusta";
        btnLike.style.color = "white";
    }else{
        likes.innerHTML = "<b>200</b>" + " likes";
        btnLike.style.background = "rgb(209, 232, 255)";        
        btnLike.innerHTML = "Me gusta";
        btnLike.style.color = "dodgerblue";
    }
}


 function botonComentar(){
    const user = document.getElementById("Nombre").value;
    const comentario = document.getElementById("comentario").value;
    const mensajeError = document.getElementById("mensajeError");
    const nuevoComentario = document.getElementById("comentarioNuevo");
      let coment = {
        "nombre" : user,
        "comentario" : comentario
    }

    let html = "";
    if(user != "" && comentario != ""){
        comentarios.push(coment);
        for(let com of comentarios)
        {
            html += "<b>" + com.nombre + "</b>" + " " + com.comentario + "<br>";    
            
        }
        nuevoComentario.innerHTML = html;
    
    mensajeError.innerHTML ="";
    
    }else {
        if(user == ""){
        mensajeError.innerHTML = "Ups!, debe ingresar un usuario"; 
        }
        if(comentario == ""){
            mensajeError.innerHTML ="Ups!, debe ingresar un comentario";
        }
        
    }
}
