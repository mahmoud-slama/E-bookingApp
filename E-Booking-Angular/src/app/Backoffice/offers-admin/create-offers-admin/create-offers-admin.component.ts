import { HttpClient } from '@angular/common/http';
import { OffersService } from '../offers.service';
import { Offer } from './../offers-model';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CoreService } from '../../core.service';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-offers-admin',
  templateUrl: './create-offers-admin.component.html',
  styleUrls: ['./create-offers-admin.component.css']
})
export class CreateOffersAdminComponent {
  offer : Offer = new Offer();
  offers!: Offer[];
  id! : number ;
  hotelId!: number;

  constructor(private offerservice: OffersService ,
     private http:HttpClient,private router: Router ,
     private _coreService: CoreService ,
     private _dialogRef: MatDialogRef<CreateOffersAdminComponent>,
     private route: ActivatedRoute  )
      { }


  ngOnInit(): void {
    
  }
  
  addOffer(){
     this.offerservice.addOffer(this.offer).subscribe({
      next: (val: any) => {
        this._coreService.openSnackBar('Offer added successfully');
        this._dialogRef.close(false);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }


  addOfferToHotel() {
    this.offerservice.addOfferToHotel(this.id).subscribe(
      addedOffer => {
        // Handle the added flight
        console.log(addedOffer);
      },
      error => {
        // Handle the error
        console.error(error);
      }
    );
  }


  
 


}
