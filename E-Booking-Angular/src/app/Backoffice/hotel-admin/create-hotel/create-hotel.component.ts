import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import { HotelServiceService } from '../hotel-service.service';
import { Hotel } from '../hotel-model';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { CoreService } from 'src/app/Backoffice/core.service';
import { CreateFlightComponent } from '../../flight-admin/create-flight/create-flight.component';


@Component({
  selector: 'app-create-hotel',
  templateUrl: './create-hotel.component.html',
  styleUrls: ['./create-hotel.component.css']
})
export class CreateHotelComponent {
  
  hotel : Hotel = new Hotel();
  pForm !: FormGroup;

  constructor(private hotelService: HotelServiceService ,
     private http:HttpClient,
     private router: Router ,
     private _coreService: CoreService ,
     private _dialogRef: MatDialogRef<CreateHotelComponent>,

     ) { }

  ngOnInit(): void {
  }
  
  

  addHotel(){
     this.hotelService.addhotel(this.hotel).subscribe({
      next: (val: Hotel) => {
        this._coreService.openSnackBar('Hotel added successfully');
        this._dialogRef.close(false);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }
 


}
