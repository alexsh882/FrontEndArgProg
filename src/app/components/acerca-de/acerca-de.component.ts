import { Component, OnInit } from '@angular/core';
import { faPencil, faSave } from '@fortawesome/free-solid-svg-icons';
import { Persona } from 'src/app/models/persona.model';
import { ImagesService } from 'src/app/service/images.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona('', '', '', '', '');
  image: any;
  isLogged: boolean = false;
  editDatos: boolean = false;
  editDescript: boolean = false;
  editImg: boolean = false;
  faEdit = faPencil;
  faSave = faSave;



  constructor(public personaService: PersonaService, private tokenService: TokenService, public imagesService: ImagesService) { }



  ngOnInit(): void {
    this.loadPersona();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      console.log(this.tokenService.getAuthorities());
    } else {
      this.isLogged = false;
    }
  }

  loadPersona(): void {
    this.personaService.show(1).subscribe(data => {
      this.persona = data;
    });
  }

  editDates() {
    this.editDatos = !this.editDatos;
  }

  editDesc() {
    this.editDescript = !this.editDescript;
  }

  editImage() {
    this.editImg = !this.editImg;
  }

  update(type: string): void {
    this.personaService.update(this.persona.id, this.persona).subscribe(
      data => {
        if (type == 'datos') {
          this.editDates()
        } else {
          this.editDesc()
        }
        alert(data.message)
      }, err => {
        alert("Error: " + err.error.message);
        console.log(err.error)
      }
    )
  }

  uploadImg($event: any) {
    const id = 1;
    const name = 'avatar_' + id;
    this.imagesService.uploadImage($event, name);
  }

  updateImage(){
    this.persona.image = this.imagesService.url;
    this.personaService.update(this.persona.id, this.persona).subscribe(
      data => {
        this.editImage();
      }, err => {
        alert("Error: " + err.error.message);
        console.log(err.error)
      }
    )
  }



}
