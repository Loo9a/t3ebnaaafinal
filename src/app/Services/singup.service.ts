import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Compte } from '../Model/Compte';

@Injectable({
  providedIn: 'root'
})
export class SingupService { 


  constructor(private http: HttpClient) { }

  public adduser(compte: any){
    console.log(compte)
    const headers = new HttpHeaders({'Content-Type': 'application/json'});
    return this.http.post<any>('http://localhost:8087/comptes/inscription', compte );
    
  }



}