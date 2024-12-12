import { Component, OnInit } from '@angular/core';
import { Hotel } from 'src/app/Backoffice/hotel-admin/hotel-model';
import { HotelServiceService } from 'src/app/Backoffice/hotel-admin/hotel-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-hotel',
  templateUrl: './list-hotel.component.html',
  styleUrls: ['./list-hotel.component.css']
})
export class ListHotelComponent  implements OnInit {

 
  hotels: Hotel[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private hoteltservice: HotelServiceService,private router: Router) { }
  ngOnInit(): void {
    console.log("ngOnInit: getAllhotels()");
    this.getAllFlights();
  }
  getAllFlights() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getHotels: spec =", spec, "sort =", sort);
    this.hoteltservice.getAllhotels().subscribe((response: Hotel[]) => {
      console.log("getFlights: response =", response);
      this.hotels = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getAllFlights();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getAllFlights();
  }
  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllFlights();
  }
  get pages(): number[] {
    const pageCount = Math.ceil(this.hotels.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.hotels.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }
  redirectToOffers(){
    this.router.navigate(['user/list-offers-user']);
  }
}
