import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Experiencia } from 'src/app/models/experiencia';
import { ExperienciaService } from 'src/app/service/experiencia.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';


@Component({
  selector: 'app-modal-experiencia',
  templateUrl: './modal-experiencia.component.html',
  styleUrls: ['./modal-experiencia.component.css']
})
export class ModalExperienciaComponent implements OnInit {

  show : boolean = false;

  @Input() experiencia = new Experiencia('', '', '', '')

  @Output() private actualizar = new EventEmitter<any>();


  constructor(private experienciaService: ExperienciaService) {
  }

  ngOnInit(): void {

  }

  update() {
    this.experienciaService.update(this.experiencia.id, this.experiencia).subscribe(
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
    this.experienciaService.save(this.experiencia).subscribe(
      data => {
        this.showModal()
        alert('Experiencia agregada correctamente.')
        console.log(data);
        this.actualizar.emit();
        this.experiencia = new Experiencia('', '', '', '')
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
