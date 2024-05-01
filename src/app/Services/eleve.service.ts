// eleve.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EleveService {

  private baseUrl = 'localhost:8087/eleve/add'; // Base URL of your Spring Boot backend

  constructor(private http: HttpClient) { }

  createEleve(eleveData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}`, eleveData);
  }
}
