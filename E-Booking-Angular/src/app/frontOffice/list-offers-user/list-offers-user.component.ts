import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Offer } from 'src/app/Backoffice/offers-admin/offers-model';
import { OffersService } from 'src/app/Backoffice/offers-admin/offers.service';

@Component({
  selector: 'app-list-offers-user',
  templateUrl: './list-offers-user.component.html',
  styleUrls: ['./list-offers-user.component.css']
})
export class ListOffersUserComponent {

  offers: Offer[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private offerservice: OffersService,private router: Router) { }
  ngOnInit(): void {
    console.log("ngOnInit: getAllFlights()");
    this.getAllOffers();
  }
  getAllOffers() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    console.log("getPromotions: spec =", spec, "sort =", sort);
    this.offerservice.getAllOffers().subscribe(response => {
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
  redirectToCreatePaiement(){
    this.router.navigate(['user/create-paiement']);
  }


}
