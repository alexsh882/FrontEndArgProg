import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-experiencias',
  templateUrl: './experiencias.component.html',
  styleUrls: ['./experiencias.component.css']
})
export class ExperienciasComponent implements OnInit {
  experiencias: Experiencia[] = [];
  open : boolean = false;

  isLogged : boolean = false;

  faTrash = faTrash;
  faEdit = faPencil;

  constructor(private experienciaService: ExperienciaService, private tokenService: TokenService) { }

  

  ngOnInit(): void {
    this.loadExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadExperiencia(): void {
    this.experienciaService.index().subscribe(
      data => { this.experiencias = data; }
    );
  }

  delete(id : any){
    this.experienciaService.delete(id).subscribe(
      data => {
        alert('Experiencia eliminada correctamente.')
        console.log(data);
        this.loadExperiencia();
      }, err => {
        alert("Error: " + err.error.message);
        console.log(err.error)        
      }
    );
  }

  openModal()
  {
    this.open = true;
  }

}
