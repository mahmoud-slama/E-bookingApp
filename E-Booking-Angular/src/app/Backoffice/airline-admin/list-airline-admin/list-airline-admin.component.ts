import { AirlineServiceService } from '../airline-service.service';
import { Airline } from './../airline-model';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/Backoffice/core.service';
import { CreateAirlineAdminComponent } from '../create-airline-admin/create-airline-admin.component';

@Component({
  selector: 'app-list-airline-admin',
  templateUrl: './list-airline-admin.component.html',
  styleUrls: ['./list-airline-admin.component.css']
})
export class ListAirlineAdminComponent implements OnInit{
  data: any;
  airline!:Airline;
  id!:number;
  airlines: Airline[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private airlineService: AirlineServiceService,private router: Router,private _coreService: CoreService ,private _dialog: MatDialog) { }
  ngOnInit(): void {
    console.log("ngOnInit: getAllAirlines()");
    this.getAllAirlines();
  }
  getAllAirlines() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    this.airlineService.getAllAirlines().subscribe(response => {
      console.log("getFlights: response =", response);
      this.airlines = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getAllAirlines();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getAllAirlines();
  }
  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllAirlines();
  }
  get pages(): number[] {
    const pageCount = Math.ceil(this.airlines.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.airlines.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }

 

  deleteAirline(id:number){
    this.airlineService.deleteAirlineById(id).subscribe({
      next: (res) => {
        this.router.navigateByUrl('list-airline-admin'); // navigate to the success page
      },
      error: console.log,
    
    });
  }
  

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CreateAirlineAdminComponent);
    dialogRef.backdropClick().subscribe(data => {
      console.log('Airline added successfully', data);
      // Handle success response
      this.data = data;
        console.log(data);
        // Reset the form
        this.airline = new Airline();
        this.router.navigateByUrl('list-airline-admin'); // navigate to the success page


    },
    error => {
      console.error('Error adding airline', error);
      // Handle error response
    });
      
    
  }
  
  redirectToListFlight(){
    console.log("ok");
    this.router.navigate(['admin/list-flight-admin']);
  }
  
  
}
