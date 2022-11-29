export class Proyectos {
    id?: number;
    name: string;
    img: string;
    link: string;
    description: string;

    constructor(name: string, img: string, link: string, description: string){
        this.name = name;
        this.img = img;
        this.link = link;
        this.description = description;
    }
}
