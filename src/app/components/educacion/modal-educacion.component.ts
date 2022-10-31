import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Educacion } from 'src/app/models/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-modal-educacion',
  templateUrl: './modal-educacion.component.html',
  styleUrls: ['./modal-educacion.component.css']
})
export class ModalEducacionComponent implements OnInit {

  show : boolean = false;
  
  @Input() educacion = new Educacion('', '', '');
  @Output() private actualizar = new EventEmitter<any>();

  constructor(private educacionService : EducacionService) { }

  ngOnInit(): void {
  }

  update() {
    this.educacionService.update(this.educacion.id, this.educacion).subscribe(
      data => {
        this.showModal()
        this.actualizar.emit();
        alert(data.message)
      }, err => {
        alert("Error: " + err.error.message);
        this.showModal()
        console.log(err.error)
      }
    )
  }

  store(): void {
    this.educacionService.save(this.educacion).subscribe(
      data => {
        this.showModal()
        alert('Educacion agregada correctamente.')
        console.log(data);
        this.actualizar.emit();
        this.educacion = new Educacion('', '', '');
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
