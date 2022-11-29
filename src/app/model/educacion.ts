export class Educacion {
    id?: number;
    career: string;
    school: string;
    degree: string;
    img: string;
    startt: string;
    endd: string;

    constructor(career: string, school: string, degree: string, img: string, startt: string, endd: string){
        this.career = career;
        this.school = school;
        this.degree = degree;
        this.img = img;
        this.startt = startt;
        this.endd = endd;
    }
}
