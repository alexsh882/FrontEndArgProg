import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Proyectos } from '../models/proyectos';

@Injectable({
  providedIn: 'root'
})
export class ProyectoService {

  URL = environment.url + 'proyectos';


  constructor(private httpClient : HttpClient) { }

  public index() : Observable<Proyectos[]>{
    return this.httpClient.get<Proyectos[]>(this.URL);
  }

  public show(id: number) : Observable<Proyectos>{
      return this.httpClient.get<Proyectos>(this.URL + '/show/' + id)
  }

  public save(proyecto : Proyectos) : Observable<any> {
    console.log(proyecto);
    return this.httpClient.post<any>(this.URL, proyecto);

  }

  public update(id: any, proyecto: Proyectos) : Observable<any>{
    return this.httpClient.put<any>(this.URL + '/' + id + "/update", proyecto);
  }

  public delete(id: number) : Observable<any>{
    return this.httpClient.delete<any>(this.URL + '/' + id + "/delete");
  }
}
