import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  
  redirectTolisthotel(){
    console.log("ok");
    this.router.navigate(['admin/list-hotel-admin']);
  }

  redirectToCreateHotel() {
    console.log("ok")
    this.router.navigate(['admin/create-hotel'])

  }
  redirectToCreateUser(){
    console.log("ok")
    this.router.navigate(['admin/create-user'])

  }
  redirectToHomeAdmin(){
    console.log("ok")
    this.router.navigate(['admin'])
  }
  redirectToRegister() {
    console.log("ok");
    this.router.navigate(['user/register']);
  }
  redirectToAuthenticate() {
    console.log("ok");
    this.router.navigate(['user/login']);
  }
  redirectToFront(){
    this.router.navigate(['user']);
  }   
  redirectToListAirlines(){
    this.router.navigate(['admin/list-airline-admin']);
  }
  redirectToListReclamation(){
    this.router.navigate(['admin/list-reclamation-admin']);

  }
  redirectTolistUser(){
    this.router.navigate(['admin/list-user-admin']);

  }

}
