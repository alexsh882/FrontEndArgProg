import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hys } from 'src/app/models/hys';
import { HysService } from 'src/app/service/hys.service';

@Component({
  selector: 'app-modal-hardskills',
  templateUrl: './modal-hardskills.component.html',
  styleUrls: ['./modal-hardskills.component.css']
})
export class ModalHardskillsComponent implements OnInit {

  show : boolean = false;
  
  @Input() hys = new Hys('', 0);
  @Output() private actualizar = new EventEmitter<any>();


  constructor(private hysService : HysService) { }

  ngOnInit(): void {
  }

  update() {
    this.hysService.update(this.hys.id, this.hys).subscribe(
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
    this.hysService.save(this.hys).subscribe(
      data => {
        this.showModal()
        alert('H and S agregada correctamente.')
        console.log(data);
        this.actualizar.emit();
        this.hys = new Hys('', 0);
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
