export class Educacion {
    id? : number;
    name : string;
    description : string;
    timeLapse : string;

    constructor (name : string,description : string, timeLapse : string){
        this.name = name;
        this.description = description;
        this.timeLapse = timeLapse;
    }
}
