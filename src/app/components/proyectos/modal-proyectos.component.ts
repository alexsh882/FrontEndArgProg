import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Proyectos } from 'src/app/models/proyectos';
import { ImagesService } from 'src/app/service/images.service';
import { ProyectoService } from 'src/app/service/proyecto.service';

@Component({
  selector: 'app-modal-proyectos',
  templateUrl: './modal-proyectos.component.html',
  styleUrls: ['./modal-proyectos.component.css']
})
export class ModalProyectosComponent implements OnInit {

  show : boolean = false;
  
  @Input() proyecto = new Proyectos('', '', '','','');
  @Output() private actualizar = new EventEmitter<any>();

  constructor(private activateRoute: ActivatedRoute, private proyectoService : ProyectoService, public imagesService : ImagesService) { }

  ngOnInit(): void {
    console.log('asdas');
    console.log(this.activateRoute.snapshot.params);
  }

  uploadImg($event: any, nameP : string) {
    const id = this.proyecto.url;
    let name = 'proyecto_' + nameP;
    console.log(nameP);
    console.log(name);
    this.imagesService.uploadImage($event, name);
  }

  update(): void{
    this.proyecto.image = this.imagesService.url;
    this.proyectoService.update(this.proyecto.id, this.proyecto).subscribe(
      data => {
        this.showModal()
      }, err => {
        alert("Error: " + err.error.message);
        console.log(err.error)
        this.showModal()
      }
    )
  }

  store(): void {
    this.proyecto.image = this.imagesService.url;
    this.proyectoService.save(this.proyecto).subscribe(
      data => {
        this.showModal()
        alert('proyecto agregada correctamente.')
        console.log(data);
        this.actualizar.emit();
        this.proyecto = new Proyectos('', '', '','','');
        this.showModal()
      }, err => {
        alert("Error: " + err.error.message);
        this.showModal()
        console.log(err.error)
      }
    );
  }

  showModal() {
    this.show = !this.show;

  }

}
