

export class Persona {
    id?: number;
    name?: String;
    last_name?: String;
    job?: String;
    description?: String;
    image?: String;

    constructor(name?: String, last_name?: String, job?: String, description?: String , image?: String) {
        this.name = name;
        this.last_name = last_name;
        this.job = job;
        this.description = description;
        this.image = image;
    };
}

