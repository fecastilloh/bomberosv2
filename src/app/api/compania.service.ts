import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


import { Compania } from './../interfaces/Compania';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})  
export class CompaniaService {

  private api = 'https://is0x8kr5qd.execute-api.us-east-1.amazonaws.com';

  constructor(private http: HttpClient) { }


  getAllCompania() {
    console.log("Buscando en la Api");
    const path = `${this.api}/items`;
    const retorno  = this.http.get<Compania[]>(path);
    console.log("Respuesta ok: " + JSON.stringify(retorno));

    return retorno;
  }

  getCompania(id: string) {
    const path = `${this.api}/items/${id}`;
    return this.http.get<Compania>(path);
  }

  createCompania(task: Compania) {
    const path = `${this.api}/items`;
    return this.http.put(path, task);
  }

  updateCompania(task: Compania) {
    const path = `${this.api}/items/${task.id}`;
    return this.http.put<Compania>(path, task);
  }

  deleteTask(id: string) {
    const path = `${this.api}/items/${id}`;
    return this.http.delete(path);
  }
}
