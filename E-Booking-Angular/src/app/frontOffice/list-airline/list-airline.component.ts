import { AirlineServiceService } from './../../Backoffice/airline-admin/airline-service.service';
import { Airline } from './../../Backoffice/airline-admin/airline-model';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Flight } from 'src/app/Backoffice/flight-admin/flight-model';
import { FlightServiceService } from 'src/app/Backoffice/flight-admin/flight-service.service';

@Component({
  selector: 'app-list-airline',
  templateUrl: './list-airline.component.html',
  styleUrls: ['./list-airline.component.css']
})
export class ListAirlineComponent implements OnInit {
  airlines: Airline[] = [];
constructor(private AirlineServiceService: AirlineServiceService, private router: Router){}
  ngOnInit(): void {
    console.log("ngOnInit: getAllAirlines()");
    this.getAllAirlines();
  }

  
  
    getAllAirlines() {
     
      
      this.AirlineServiceService.getAllAirlines().subscribe(response => {
        console.log("getAllAirlines: response =", response);
        this.airlines = response;
      });
    }
  
    
    redirectToFlights(){
      this.router.navigate(['user/list-flight']);  }
  

}
