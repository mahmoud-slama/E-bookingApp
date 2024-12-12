import { ReclamationService } from './../../../Backoffice/reclamation-admin/reclamation.service';
import { Reclamation } from './../../../Backoffice/reclamation-admin/model-reclamation';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { CreateFlightComponent } from 'src/app/Backoffice/flight-admin/create-flight/create-flight.component';
import { CoreService } from 'src/app/Backoffice/core.service';

@Component({
  selector: 'app-create-reclamation',
  templateUrl: './create-reclamation.component.html',
  styleUrls: ['./create-reclamation.component.css']
})
export class CreateReclamationComponent implements OnInit {
  reclamation : Reclamation = new Reclamation();


  constructor(private reclamationService: ReclamationService ,
     private http:HttpClient,private router: Router ,
    

     ) { }

  ngOnInit(): void {
  }
  
  

  addReclamation(){
     this.reclamationService.addReclamation(this.reclamation).subscribe({
      next: (val: any) => {
       
      },
      error: (err: any) => {
        console.error(err);
      },
    });
  }


}
