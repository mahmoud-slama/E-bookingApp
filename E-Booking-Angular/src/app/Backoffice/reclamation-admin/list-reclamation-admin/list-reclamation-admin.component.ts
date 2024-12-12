import { Component, OnInit } from '@angular/core';
import { Reclamation } from '../model-reclamation';
import { ReclamationService } from '../reclamation.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { CoreService } from 'src/app/Backoffice/core.service';
import { CreateAirlineAdminComponent } from '../../airline-admin/create-airline-admin/create-airline-admin.component';

@Component({
  selector: 'app-list-reclamation-admin',
  templateUrl: './list-reclamation-admin.component.html',
  styleUrls: ['./list-reclamation-admin.component.css']
})
export class ListReclamationAdminComponent implements OnInit {
  reclamation!:Reclamation;
  id!:number;
  reclamations: Reclamation[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private reclamationService: ReclamationService,private router: Router,private _coreService: CoreService ,private _dialog: MatDialog) { }
  ngOnInit(): void {
    console.log("ngOnInit: getAllReclamations()");
    this.getAllReclamation();
  }
  getAllReclamation() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    this.reclamationService.getAllReclamations().subscribe(response => {
      console.log("getreclamations: response =", response);
      this.reclamations = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getAllReclamation();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getAllReclamation();
  }
  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllReclamation();
  }
  get pages(): number[] {
    const pageCount = Math.ceil(this.reclamations.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.reclamations.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }

 

  deleteReclamtion(id:number){
    this.reclamationService.deleteReclamationById(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('reclamtion deleted!', 'done');
        this.getAllReclamation();
      },
      error: console.log,
    
    });
  }
  

  
  
  

  
}
