const app = Vue.createApp({
    data(){
        return {
            botonSeguir: 'Seguir',
            botonMegusta: 'Me gusta',
            cantMegusta: 200,
            Comentarios: [],
            agregarComentario: false,
            usuario: '',
            comentario: '',
            errorUsuario: '',
            errorComentario: '' 
        }
    },
    methods: {
        cambiarBtnSeguir() {
            if(this.botonSeguir == "Seguir"){
                this.botonSeguir = "Dejar de seguir";
            }else{
                this.botonSeguir = "Seguir";
            }
        },
        sumarMegusta(){
            if(this.cantMegusta =="200"){
                this.cantMegusta = "201";
                this.botonMegusta = "Quitar me gusta";
            }else {
                this.cantMegusta = "200";
                this.botonMegusta = "Me gusta";
            }
        },
        ingresar() {
            if (this.usuario == "") {
                this.errorUsuario = "Ups!, debe ingresar un usuario";
                this.agregarComentario = false;
            } else {
                this.errorUsuario = "";
                this.agregarComentario = true;
                localStorage.setItem("usuario", this.usuario);
            }
        },
        comentar() {
            if (!this.agregarComentario) {
                this.errorComentario = "Ups!, debe ingresar un usuario";
                this.errorUsuario = "";
                return;
            }
            if (this.comentario == "") {
                this.errorComentario = "Ups!, debe ingresar un comentario";
                this.errorUsuario = "";
                return;
            }

            this.errorComentario = "";
            this.errorUsuario = "";
            this.Comentarios.push({ usuario: this.usuario, comentario: this.comentario, fixed: false });
            this.comentario = "";
        },
        eliminar(index) {
            this.Comentarios.splice(index, 1);
        }
    },
    
    
})

const appMontada = app.mount("#app");
