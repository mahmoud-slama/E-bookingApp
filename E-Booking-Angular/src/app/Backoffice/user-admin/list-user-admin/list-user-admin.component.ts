import { Component, OnInit } from '@angular/core';
import { User } from '../user-model';
import { UserServiceService } from '../user-service.service';
import { Router } from '@angular/router';
import { CoreService } from '../../core.service';
import { MatDialog } from '@angular/material/dialog';
import { CreateUserComponent } from '../create-user/create-user.component';

@Component({
  selector: 'app-list-user-admin',
  templateUrl: './list-user-admin.component.html',
  styleUrls: ['./list-user-admin.component.css']
})
export class ListUserAdminComponent implements OnInit {

  data: any;
  user!:User;
  id!:number;
  users: User[] = [];
  spec: string = '';
  sort: string = 'id,asc';
  pageNumber: number = 0;
  pageSize: number = 5;
  pageTotal: number = 0;

  constructor(private userService: UserServiceService,private router: Router,private coreService: CoreService ,private dialog: MatDialog) { }
  ngOnInit(): void {
    console.log("ngOnInit: getAllUsers()");
    this.getAllUsers();
  }
  getAllUsers() {
    const spec = encodeURIComponent(this.spec);
    const sort = encodeURIComponent(this.sort);
    this.userService.getAllUsers().subscribe(response => {
      console.log("getAllUsers: response =", response);
      this.users = response;
    });
  }

  onSpecChange() {
    this.sort = 'id,asc'; // réinitialisation du tri par défaut
    this.pageNumber = 0; // réinitialisation du numéro de page
    this.getAllUsers();
  }
  onSortChange(sort: string) {
    this.sort = sort;
    this.getAllUsers();
  }
  onPageChange(pageNumber: number) {
    this.pageNumber = pageNumber;
    this.getAllUsers();
  }
  get pages(): number[] {
    const pageCount = Math.ceil(this.users.length / this.pageSize);
    return Array.from(Array(pageCount), (_, i) => i);
  }

  get itemsToDisplay(): any[] {
    const startIndex = this.pageNumber * this.pageSize;
    return this.users.slice(startIndex, startIndex + this.pageSize);
  }

  onPageChange2(page: number): void {
    this.pageNumber = page;
  }

 

  deleteUser(id:number){
    this.userService.deleteUserById(id).subscribe({
      next: (res) => {
        this.router.navigateByUrl('list-user-admin'); // navigate to the success page
      },
      error: console.log,
    
    });
  }
  

 
}
