import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/models/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {

  persona: Persona = new Persona();

  constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    this.personaService.show(1).subscribe(data => {
      this.persona = data;
    });
  }

}
