import { Observable } from 'rxjs';
import { Airline } from './airline-model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AirlineServiceService {
  private apiUrl = 'http://localhost:8075/';
  
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  public getAllAirlines(): Observable <Airline[]> {
    return this.http.get<Airline[]>(this.apiUrl + "Airline/show-all-airlines");

  }

  deleteAirlineById(id:number){
    return this.http.delete(this.apiUrl +"Airline/remove-airline/"+id);
  }

  addAirline(airline:Airline){
    return this.http.post<Airline>(this.apiUrl +"Airline/add-airline",airline);
  }

 

}
