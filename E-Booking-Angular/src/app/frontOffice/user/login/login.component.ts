import { AuthenticationRequest, User } from './../../../Backoffice/user-admin/user-model';
import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Backoffice/user-admin/user-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login-user',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email!: string;
  password!: string;
  role!:string;

  constructor(private userService :UserServiceService ,private router: Router ) { }

  ngOnInit(): void {
   
  }
  Login() {
    console.log(this.email+"  "+this.password);
    const request: AuthenticationRequest = { email: this.email, password: this.password };
    this.userService.authenticate(request).subscribe(
      response => {
        console.log(response.token);
        // Enregistrer le token JWT dans le localStorage
        localStorage.setItem('token', response.token);
        // Rediriger l'utilisateur en fonction de son rôle
        console.log(response.token.split('.'));
        const user: User = JSON.parse(atob(response.token.split('.')[1])); // décoder le token JWT pour obtenir les données utilisateur
        console.log(user);
        if (user.role === 'USER') {
          this.router.navigate(['user/'+user.id]);
        } else if (user.role === 'ADMIN'){
          this.router.navigate(['admin/'+user.id]);
        }
      },
      error => {
        console.error(error);
      }
    );
  }

 
}
