import { MatDialog } from '@angular/material/dialog';
import { FlightServiceService } from './../flight-service.service';
import { Flight } from './../flight-model';
import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import { CreateFlightComponent } from '../create-flight/create-flight.component';
import { CoreService } from 'src/app/Backoffice/core.service';
import { Airline } from '../../airline-admin/airline-model';


@Component({
  selector: 'app-list-flight-admin',
  templateUrl: './list-flight-admin.component.html',
  styleUrls: ['./list-flight-admin.component.css']
})
export class ListFlightAdminComponent implements OnInit {
  flight!:Flight;
  id!:number;
  flights: Flight[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private flightservice: FlightServiceService,private router: Router,private _coreService: CoreService ,private _dialog: MatDialog) { }
  ngOnInit(): void {
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

  redirectToCreateFlight(){
    console.log("ok");
    this.router.navigate(['admin/create-flight']);
  }

  deleteFlight(id:number){
    this.flightservice.deleteFlightById(id).subscribe({
      next: () => {
        
          this.getAllFlights();
        
      },
           error: console.log,
    
    });
  }
  SearchFlight(id:number){
    this.flightservice.getFlightById(id).subscribe();

  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CreateFlightComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllFlights();
        }
      },
    });
  }
  
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CreateFlightComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllFlights();
        }
      },
    });
  }
  



  
 
}
