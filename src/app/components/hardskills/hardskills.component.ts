import { Component, OnInit } from '@angular/core';
import { faPencil, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Hys } from 'src/app/models/hys';
import { HysService } from 'src/app/service/hys.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hardskills',
  templateUrl: './hardskills.component.html',
  styleUrls: ['./hardskills.component.css']
})
export class HardskillsComponent implements OnInit {

  hys: Hys[] = [];

  open: boolean = false;
  isLogged: boolean = false;

  faTrash = faTrash;
  faEdit = faPencil;

  constructor(private tokenService: TokenService, private hysService: HysService) { }

  ngOnInit(): void {
    this.loadHys();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  public loadHys() {
    this.hysService.index().subscribe(
      data => {
        this.hys = data
      }
    )
  }

  delete(id : any){
    this.hysService.delete(id).subscribe(
      data => {
        alert('H and S eliminada correctamente.')
        console.log(data);
        this.loadHys();
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
