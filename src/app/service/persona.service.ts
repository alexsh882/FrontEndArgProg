import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  url = 'http://localhost:8080/personas/';

  

  constructor(private http: HttpClient) { }

  public show(id: number) : Observable<Persona>{
    return this.http.get<Persona>(this.url  + id );
  }
}
