import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  open : boolean = false;
  isLogged: boolean = false;

  faTrash = faTrash;
  faEdit = faPencil;

  constructor(private educacionService: EducacionService, private tokenService: TokenService) { }

  ngOnInit(): void {
    this.loadEducacion();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  loadEducacion(): void {
    this.educacionService.index().subscribe(
      data => { this.educacion = data; }
    )
  }

  delete(id : any){
    this.educacionService.delete(id).subscribe(
      data => {
        alert('Educacion eliminada correctamente.')
        console.log(data);
        this.loadEducacion();
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
