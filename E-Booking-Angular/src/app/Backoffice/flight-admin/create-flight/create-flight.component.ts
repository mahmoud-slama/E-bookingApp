import {ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Flight } from '../flight-model';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { FlightServiceService } from '../flight-service.service';
import { CoreService } from 'src/app/Backoffice/core.service';
import { MatDialogRef } from '@angular/material/dialog';
import { Airline } from '../../airline-admin/airline-model';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent implements OnInit {
  flight : Flight = new Flight();
  airline !: Airline;
  flights!: Flight[];
  id! : number ;
  flightId!: number;

  constructor(private flightservice: FlightServiceService ,
     private http:HttpClient,private router: Router ,
     private _coreService: CoreService ,
     private _dialogRef: MatDialogRef<CreateFlightComponent>,
     private route: ActivatedRoute  )
      { }


  ngOnInit(): void {
    

  }
  
  

  addFlight(){
     this.flightservice.addFlight(this.flight).subscribe({
      next: (val: any) => {
        this._coreService.openSnackBar('Flight added successfully');
        this._dialogRef.close(false);
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }


  addFlightToAirline() {
    
    
    this.flightservice.addFlightToAirline(this.id).subscribe(
      addedFlight => {
        // Handle the added flight
        console.log(addedFlight);
      },
      error => {
        // Handle the error
        console.error(error);
      }
    );
  }


  addAffect(): void {
    this.flightservice.ajoutAffecter(this.flightId, this.id)
      .subscribe(
        () => {
          console.log('Affectation added successfully');
        },
        (error) => {
          console.error('Error adding affectation:', error);
        }
      );
  }



}
