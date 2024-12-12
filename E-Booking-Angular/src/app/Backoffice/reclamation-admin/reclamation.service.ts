import { Reclamation } from './model-reclamation';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {

  private apiUrl = 'http://localhost:8075/';

 
  
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  public getAllReclamations(): Observable<Reclamation[]> {
    return this.http.get<Reclamation[]>(this.apiUrl + "Reclamtion/show-all-reclamations");

  }

  deleteReclamationById(id:number){
    return this.http.delete(this.apiUrl +"Reclamtion/remove-reclamation/"+id);
  }
  

  addReclamation(reclamation:Reclamation){
    return this.http.post<Reclamation>(this.apiUrl +"Reclamtion/add-reclamation",reclamation);
  }

 

}
