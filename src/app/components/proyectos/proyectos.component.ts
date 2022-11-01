import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Proyectos } from 'src/app/models/proyectos';
import { ImagesService } from 'src/app/service/images.service';
import { ProyectoService } from 'src/app/service/proyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  proyectos : Proyectos[] = [];
  open : boolean = false;
  image: any;
  isLogged: boolean = false;
  editDatos: boolean = false;

  faEdit = faEdit;
  faTrash = faTrash;

  constructor(public proyectoService: ProyectoService, private tokenService: TokenService, public imagesService: ImagesService, private activateRoute : ActivatedRoute) { }

  ngOnInit(): void {
    this.loadProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
      console.log(this.tokenService.getAuthorities());
    } else {
      this.isLogged = false;
    }
  }

  loadProyectos(){
    this.proyectoService.index().subscribe(data => {
      this.proyectos = data;
    });
  }

  delete(id : any){
    this.proyectoService.delete(id).subscribe(
      data => {
        alert('Educacion eliminada correctamente.')
        console.log(data);
        this.loadProyectos();
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
