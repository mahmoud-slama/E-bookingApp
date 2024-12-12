import { Router } from '@angular/router';
import { OffersService } from './../offers.service';
import { Component, OnInit } from '@angular/core';
import { CoreService } from '../../core.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateOffersAdminComponent } from '../create-offers-admin/create-offers-admin.component';
import { CreateAirlineAdminComponent } from '../../airline-admin/create-airline-admin/create-airline-admin.component';
import { Offer } from '../offers-model';

@Component({
  selector: 'app-list-offers-admin',
  templateUrl: './list-offers-admin.component.html',
  styleUrls: ['./list-offers-admin.component.css']
})
export class ListOffersAdminComponent implements OnInit {

  offer!:Offer;
  id!:number;
  offers: Offer[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private offersService: OffersService,private router: Router,private _coreService: CoreService ,private _dialog: MatDialog) { }
  
  ngOnInit(): void {
    this.getAllOffers();
  }




  getAllOffers() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getPromotions: spec =", spec, "sort =", sort);
    this.offersService.getAllOffers().subscribe(response => {
      console.log("getFlights: response =", response);
      this.offers = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getAllOffers();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getAllOffers();
  }
  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllOffers();
  }
  get pages(): number[] {
    const pageCount = Math.ceil(this.offers.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.offers.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }

  redirectToCreateOffer(){
    console.log("ok");
    this.router.navigate(['admin/create-offer-admin']);
  }

  deleteOffer(id:number){
    this.offersService.deleteOfferById(id).subscribe({
      next: () => {
        
          this.getAllOffers();
        
      },
           error: console.log,
    
    });
  }
  SearchOffer(id:number){
    this.offersService.getOfferById(id).subscribe();

  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(CreateOffersAdminComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllOffers();
        }
      },
    });
  }
  
  openEditForm(data: any) {
    const dialogRef = this._dialog.open(CreateAirlineAdminComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getAllOffers();
        }
      },
    });
  }
  



}
