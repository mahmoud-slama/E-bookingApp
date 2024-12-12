import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hotel } from './hotel-model';

@Injectable({
  providedIn: 'root'
})
export class HotelServiceService {

  private apiUrl = 'http://localhost:8075/';

  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  public getAllhotels(): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl + "Hotel/show-all-hotels");

  }

  public addhotel(hotel: Hotel): Observable<Hotel>{
    return this.http.post<Hotel>(this.apiUrl + "Hotel/add-hotel",hotel );
  }

  deleteHotelById(id:number){
    return this.http.delete(this.apiUrl +"Hotel/remove-hotel/"+id);
  }
  public gethotelById(id:number): Observable<Hotel[]> {
    return this.http.get<Hotel[]>(this.apiUrl + "Hotel/show-hotel");

  }
  
}
