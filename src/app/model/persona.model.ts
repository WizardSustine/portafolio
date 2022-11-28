export class persona{
    id?: number;
    nombre: String;
    apellido: String;
    img: String;
    position: String;
    company: String;
    ubicacion: String;
    about: String;

    constructor(nombre: String, apellido: String, img: String, position: String, company: String, ubicacion: String, about: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.img = img;
        this.position = this.position;
        this.company = company;
        this.ubicacion = ubicacion;
        this.about = about;
    }
}