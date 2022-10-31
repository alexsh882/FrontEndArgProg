import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../models/experiencia';

@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  URL = 'http://localhost:8080/experiencia-laboral/';


  constructor(private httpClient : HttpClient) { }

  public index () : Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.URL);
  }

  public show(id: number) : Observable<Experiencia>{
      return this.httpClient.get<Experiencia>(this.URL + '/show/' + id)
  }

  public save(experiencia : Experiencia) : Observable<any> {
    console.log(experiencia);
    return this.httpClient.post<any>(this.URL, experiencia);

  }

  public update(id: any, experiencia: Experiencia) : Observable<any>{
    return this.httpClient.put<any>(this.URL + id + "/update", experiencia);
  }

  public delete(id: number) : Observable<any>{
    return this.httpClient.delete<any>(this.URL + id + "/delete");
  }

}
