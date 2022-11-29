export class Experiencia {
    id?: number;
    position: string;
    company: string;
    img: string;
    description: string;
    mode: string;
    startt: string;
    endd: string;
    timelapsed: string;
    city: string;

    constructor(position: string, company: string, img: string, description: string, mode: string, startt: string, endd: string, timelapsed: string, city: string){
        this.position = position;
        this.company = company;
        this.img = img;
        this.description = description;
        this.mode = mode;
        this.startt = startt;
        this.endd = endd;
        this.timelapsed = timelapsed;
        this.city = city;
    }
}
