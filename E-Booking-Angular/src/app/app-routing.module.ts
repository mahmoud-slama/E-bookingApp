import { ListAirlineComponent } from './frontOffice/list-airline/list-airline.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './frontOffice/home/home.component';
import { LoginComponent } from './frontOffice/user/login/login.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { ListFlightComponent } from './frontOffice/flight/list-flight/list-flight.component';
import { ListHotelComponent } from './frontOffice/hotel/list-hotel/list-hotel.component';
import { ListUserComponent } from './frontOffice/user/list-user/list-user.component';
import { RegistreComponent } from './frontOffice/user/registre/registre.component';
import { ListAirlineAdminComponent } from './Backoffice/airline-admin/list-airline-admin/list-airline-admin.component';
import { AllTemplateAdminComponent } from './Backoffice/all-template-admin/all-template-admin.component';
import { CreateFlightComponent } from './Backoffice/flight-admin/create-flight/create-flight.component';
import { ListFlightAdminComponent } from './Backoffice/flight-admin/list-flight-admin/list-flight-admin.component';
import { HomeAdminComponent } from './Backoffice/home-admin/home-admin.component';
import { CreateHotelComponent } from './Backoffice/hotel-admin/create-hotel/create-hotel.component';
import { ListHotelAdminComponent } from './Backoffice/hotel-admin/list-hotel-admin/list-hotel-admin.component';
import { ListReclamationAdminComponent } from './Backoffice/reclamation-admin/list-reclamation-admin/list-reclamation-admin.component';
import { CreateUserComponent } from './Backoffice/user-admin/create-user/create-user.component';
import { ListUserAdminComponent } from './Backoffice/user-admin/list-user-admin/list-user-admin.component';
import { NotFoundComponent } from './Backoffice/not-found/not-found.component';
import { CreateReclamationComponent } from './frontOffice/Reclamation/create-reclamation/create-reclamation.component';
import { CreatePaiementComponent } from './frontOffice/paiement/create-paiement/create-paiement.component';
import { UploadImageComponent } from './Backoffice/upload-image/upload-image.component';
import { ListOffersUserComponent } from './frontOffice/list-offers-user/list-offers-user.component';
import { ListOffersAdminComponent } from './Backoffice/offers-admin/list-offers-admin/list-offers-admin.component';

const routes: Routes = [
  
  {

    path:'user', component: AllTemplateUserComponent,
    children:[
        {path:'',component:HomeComponent},
        {path:'list-flight', component:ListFlightComponent},
        {path:'list-hotel', component:ListHotelComponent},
        {path:'list-user', component:ListUserComponent},
        {path:'register',component: RegistreComponent     },
        {path:'login',component:LoginComponent },
        {path:'List-Airline',component:ListAirlineComponent },
        {path:'create-reclamation',component:CreateReclamationComponent},
        {path:'create-paiement',component:CreatePaiementComponent},
        {path:'list-offers-user',component:ListOffersUserComponent},

        {path:"**",component:NotFoundComponent}


    ]


  ,},

  {
    path:'admin', component:AllTemplateAdminComponent,
       children :[

        {path:'',component:HomeAdminComponent},
        {path:'create-flight', component:CreateFlightComponent},
        {path:'list-flight-admin', component:ListFlightAdminComponent},
        {path:'list-airline-admin', component:ListAirlineAdminComponent},
        {path:'create-hotel', component:CreateHotelComponent},
        {path:'list-hotel-admin', component:ListHotelAdminComponent},
        {path:'create-user', component:CreateUserComponent},
        {path:'list-user-admin', component:ListUserAdminComponent},
        {path:'list-reclamation-admin', component:ListReclamationAdminComponent},
        {path:'upload-img', component:UploadImageComponent},
        {path:'list-offers-admin',component:ListOffersAdminComponent},

        {path:"**",component:NotFoundComponent}

    ]

  }

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

