export class Post {
    titulo: string;
    texto: string;
    autor: string;
    imagen: string;
    fecha: Date;
    categoria: string;

    constructor(ptitulo: string, pTexto: string, pAutor: string, pImagen: string, pFecha: Date, pCategoria: string) {
        this.titulo = ptitulo;
        this.texto = pTexto;
        this.autor = pAutor;
        this.imagen = pImagen;
        this.fecha = pFecha;
        this.categoria = pCategoria;
    }
}