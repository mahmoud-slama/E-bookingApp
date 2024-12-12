import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offer } from './offers-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OffersService {
private apiUrl = 'http://localhost:8075/';

 
  
  constructor(private http: HttpClient) { }


  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  public getAllOffers(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.apiUrl + "Offer/show-all-offres");

  }

  deleteOfferById(id:number){
    return this.http.delete(this.apiUrl +"Offer/remove-offer/"+id);
  }
  getOfferById(id:number){
    return this.http.get(this.apiUrl +"Offer/show-flight"+id);


  }


  addOffer(Offer:Offer){
    return this.http.post<Offer>(this.apiUrl +"Offer/add-offer",Offer);
  }


  
 

  addOfferToHotel(hotelId:number): Observable<Offer> {
    return this.http.post<Offer>(this.apiUrl +" Offer/offers/"+ hotelId , Offer);

 
  }

  getOffersByhotel(hotelId: number): Observable<Offer[]> {
    return this.http.get<Offer[]>(`${this.apiUrl}Offer/offers/${hotelId}/offers`);
  }

 
}
