import { User } from 'src/app/Backoffice/user-admin/user-model';
import { Component } from '@angular/core';
import { UserServiceService } from 'src/app/Backoffice/user-admin/user-service.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './registre.component.html',
  styleUrls: ['./registre.component.css']
})
export class RegistreComponent {
  AuthenticationRequest: any = {};
  successMessage: string = '';
  roles: string[] = ['ADMIN', 'USER'];
  defaultRole:string='USER';
  isLoading: boolean = false;
  constructor(private userservice: UserServiceService ,private router: Router) { }

  ngOnInit(): void {
  }

  register() {
    this.isLoading = true;
    this.AuthenticationRequest.role = this.defaultRole;
    this.userservice.register(this.AuthenticationRequest).subscribe(
      response => {
        console.log(response);
        this.successMessage = 'Le compte a été créé avec succès !';
        // Si la requête a réussi, vous pouvez effectuer des actions supplémentaires ici, telles que rediriger l'utilisateur vers une autre page
        this.router.navigate(['user/send-code']);
        this.isLoading = false;
      },
      error => {
        console.error(error);
        // Si la requête a échoué, vous pouvez afficher un message d'erreur à l'utilisateur ici
        this.isLoading = false;
      }
    );
  }

}
