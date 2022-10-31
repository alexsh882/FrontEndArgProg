export class Experiencia {
    id? : number;
    name : string;
    title : string;
    description : string;
    timeFor : string;

    constructor (name : string, title : string, description : string, timeFor : string){
        this.name = name;
        this.title = title;
        this.description = description;
        this.timeFor = timeFor;
    }
}
