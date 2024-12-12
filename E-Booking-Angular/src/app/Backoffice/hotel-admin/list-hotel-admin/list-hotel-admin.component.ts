import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel-model';
import { HotelServiceService } from '../hotel-service.service';
import {Router} from "@angular/router";
import { CreateHotelComponent } from '../create-hotel/create-hotel.component';
import { CoreService } from 'src/app/Backoffice/core.service';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-list-hotel-admin',
  templateUrl: './list-hotel-admin.component.html',
  styleUrls: ['./list-hotel-admin.component.css']
})
export class ListHotelAdminComponent implements OnInit {

  hotels: Hotel[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;
  currentIndex = -1;
  id!:number;

  constructor(private hoteltservice: HotelServiceService,private router: Router,
    private _coreService: CoreService ,private _dialog: MatDialog,) { }
  ngOnInit(): void {
    console.log("ngOnInit: getAllhotels()");
    this.getAllhotels();
  }
  getAllhotels() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getHotels: spec =", spec, "sort =", sort);
    this.hoteltservice.getAllhotels().subscribe((response: Hotel[]) => {
      console.log("getAllhotels: response =", response);
      this.hotels = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getAllhotels();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getAllhotels();
  }
  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllhotels();
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

  redirectToListOffers(){
    console.log("ok");
    this.router.navigate(['admin/list-offers-admin']);
  }

 
  deleteHotel(id:number){
    this.hoteltservice.deleteHotelById(id).subscribe(()=>this.hoteltservice.getAllhotels().subscribe);
  }

  gethotel(id:number){
   
    this.hoteltservice.gethotelById(id).subscribe();


  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CreateHotelComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllhotels();
        }
      },
    });
  }


  


}
