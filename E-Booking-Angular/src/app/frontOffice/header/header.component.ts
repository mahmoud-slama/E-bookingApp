import { Component } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private router: Router) {

  }

  redirectToRegister() {
    console.log("ok");
    this.router.navigate(['user/register']);
  }
  redirectToAuthenticate() {
    console.log("ok");
    this.router.navigate(['user/login']);
  }
  redirectToHome() {
    console.log("ok");
    this.router.navigate(['user']);
  }

  redirectTolistAriline() {
    console.log("ok");
    this.router.navigate(['user/List-Airline']);
  }
  redirectTolisthotel() {
    console.log("ok");
    this.router.navigate(['user/list-hotel']);
  }
  redirectTolistUser() {
    console.log("ok");
    this.router.navigate(['user/list-user']);
  }
  
  redirectadmin(){
    this.router.navigate(['admin']);
  }
  redirectToreclamtion(){
    this.router.navigate(['user/create-reclamation']);

  }


}