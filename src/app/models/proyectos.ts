export class Proyectos {
    id? : number;
    title : string;
    url : string;
    description : string;
    dateFrom : string;
    image : string;

    constructor (title : string,description : string, dateFrom : string, url : string, image : string){
        this.title = title;
        this.url = url;
        this.description = description;
        this.image = image;
        this.dateFrom = dateFrom;
    }
}
