import { FlightServiceService } from './../../../Backoffice/flight-admin/flight-service.service';
import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Backoffice/flight-admin/flight-model';
import {Router} from "@angular/router";

@Component({
  selector: 'app-list-flight',
  templateUrl: './list-flight.component.html',
  styleUrls: ['./list-flight.component.css']
})
export class ListFlightComponent implements OnInit {
  flights: Flight[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private flightservice: FlightServiceService,private router: Router) { }
  ngOnInit(): void {
    console.log("ngOnInit: getAllFlights()");
    this.getAllFlights();
  }
  getAllFlights() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getPromotions: spec =", spec, "sort =", sort);
    this.flightservice.getAllFlights().subscribe(response => {
      console.log("getFlights: response =", response);
      this.flights = response;
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
    const pageCount = Math.ceil(this.flights.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.flights.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }
  redirectToCreatePaiement(){
    this.router.navigate(['user/create-paiement']);
  }


}
