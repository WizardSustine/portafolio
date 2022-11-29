export class Habilidades {
    id?: number;
    name: string;
    img: string;
    porcentaje: number;

    constructor(name: string, img: string, porcentaje: number){
        this.name = name;
        this.img = img;
        this.porcentaje = porcentaje;
    }
}
