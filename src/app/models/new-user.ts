export class NewUser {
    id?: number;
    name?: String;
    username?: String;
    email?: String;
    password?: String;
    authorities?: String[];
    

    constructor(name?: String, username?: String, email?: String, password?: String , authorities?: String[]) {
        this.name = name;
        this.username = username;
        this.email = email;
        this.password = password;
        this.authorities = authorities;
    };
}
