export class Experiencia {
    id?: number;
    position: string;
    company: string;
    img: string;
    description: string;
    mode: string;
    start: string;
    end: string;
    timelapsed: string;
    city: string;

    constructor(position: string, company: string, img: string, description: string, mode: string, start: string, end: string, timelapsed: string, city: string){
        this.position = position;
        this.company = company;
        this.img = img;
        this.description = description;
        this.mode = mode;
        this.start = start;
        this.end = end;
        this.timelapsed = timelapsed;
        this.city = city;
    }
}
