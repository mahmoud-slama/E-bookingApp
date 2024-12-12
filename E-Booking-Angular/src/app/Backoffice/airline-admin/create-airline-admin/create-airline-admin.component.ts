import { Airline } from './../airline-model';
import { Component } from '@angular/core';
import { AirlineServiceService } from '../airline-service.service';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CoreService } from 'src/app/Backoffice/core.service';
import { CreateFlightComponent } from '../../flight-admin/create-flight/create-flight.component';

@Component({
  selector: 'app-create-airline-admin',
  templateUrl: './create-airline-admin.component.html',
  styleUrls: ['./create-airline-admin.component.css']
})
export class CreateAirlineAdminComponent {
  
  airlines: Airline[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  message!: string;
  airline: any = {}; // Define the airline object to store form values
  selectedImageFile: File | null = null; // Store the selected image file
  constructor(private airlineservice: AirlineServiceService ,
     private http:HttpClient,private router: Router ,
     private  coreService: CoreService ,
     private  dialogRef: MatDialogRef<CreateFlightComponent>,

     ) { }

  ngOnInit(): void {
    this.getAllAirlines()
  }
  
  getAllAirlines() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    this.airlineservice.getAllAirlines().subscribe(response => {
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


  addAirline(){
    
     this.airlineservice.addAirline(this.airline).subscribe();
  }
  addAirlineImg() {
    const formData = new FormData();
    formData.append('rating', this.airline.rating);
    formData.append('name', this.airline.name);
    formData.append('pays', this.airline.pays);
    formData.append('image', this.selectedImageFile as File);

    this.http.post('http://localhost:8075/Airline/addAirlineImag', formData).subscribe(
      response => {
        console.log('Airline added successfully', response);
        // Handle success response
      },
      error => {
        console.error('Error adding airline', error);
        // Handle error response
      }
    );
  }

  onSubmit() {
    this.addAirline(); // call the addOffer method to add the offer
  }

}
