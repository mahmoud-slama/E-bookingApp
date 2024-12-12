import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { FormGroup } from '@angular/forms';
import { Flight } from './flight-model';
import { Observable } from 'rxjs';
import { Airline } from '../airline-admin/airline-model';
@Injectable({
  providedIn: 'root'
})
export class FlightServiceService {

  private apiUrl = 'http://localhost:8075/';

 
  
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  public getAllFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(this.apiUrl + "Flight/show-all-flights");

  }

  deleteFlightById(id:number){
    return this.http.delete(this.apiUrl +"Flight/remove-flight/"+id);
  }
  getFlightById(id:number){
    return this.http.get(this.apiUrl +"Flight/show-flight"+id);


  }


  addFlight(flight:Flight){
    return this.http.post<Flight>(this.apiUrl +"Flight/add-flight",flight);
  }


  
 

  addFlightToAirline(airlineId:number): Observable<Flight> {
    return this.http.post<Flight>(this.apiUrl +" Flight/airlines/"+ airlineId , Flight);

 
  }

  getFlightsByAirline(airlineId: number): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.apiUrl}Flight/airlines/${airlineId}/flights`);
  }

  ajoutAffecter(flightId: number, airlineId: number): Observable<any> {
    const url = `${this.apiUrl}flights/${flightId}/affect/${airlineId}`;
    return this.http.post(url, null);
  }

}
