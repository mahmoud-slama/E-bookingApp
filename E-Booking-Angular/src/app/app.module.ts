import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent} from './frontOffice/user/login/login.component';
import { HomeComponent } from './frontOffice/home/home.component';
import { HeaderComponent } from './frontOffice/header/header.component';
import { RegistreComponent } from './frontOffice/user/registre/registre.component';
import { AllTemplateUserComponent } from './frontOffice/all-template-user/all-template-user.component';
import { ListFlightComponent } from './frontOffice/flight/list-flight/list-flight.component';
import { ListHotelComponent } from './frontOffice/hotel/list-hotel/list-hotel.component';
import { ListUserComponent } from './frontOffice/user/list-user/list-user.component';
import { CreateFlightComponent } from './Backoffice/flight-admin/create-flight/create-flight.component';
import { ListFlightAdminComponent } from './Backoffice/flight-admin/list-flight-admin/list-flight-admin.component';
import { HeaderAdminComponent } from './Backoffice/header-admin/header-admin.component';
import { HomeAdminComponent } from './Backoffice/home-admin/home-admin.component';
import { CreateHotelComponent } from './Backoffice/hotel-admin/create-hotel/create-hotel.component';
import { ListHotelAdminComponent } from './Backoffice/hotel-admin/list-hotel-admin/list-hotel-admin.component';
import { ListUserAdminComponent } from './Backoffice/user-admin/list-user-admin/list-user-admin.component';
import { CreateUserComponent } from './Backoffice/user-admin/create-user/create-user.component';
import { AllTemplateAdminComponent } from './Backoffice/all-template-admin/all-template-admin.component';
import { FooterAdminComponent } from './Backoffice/footer-admin/footer-admin.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';

import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListAirlineComponent } from './frontOffice/list-airline/list-airline.component';
import { ListAirlineAdminComponent } from './Backoffice/airline-admin/list-airline-admin/list-airline-admin.component';
import { CreateAirlineAdminComponent } from './Backoffice/airline-admin/create-airline-admin/create-airline-admin.component';
import { CreateReclamationComponent } from './frontOffice/Reclamation/create-reclamation/create-reclamation.component';
import { ListReclamationComponent } from './frontOffice/Reclamation/list-reclamation/list-reclamation.component';
import { ListReclamationAdminComponent } from './Backoffice/reclamation-admin/list-reclamation-admin/list-reclamation-admin.component';
import { FooterComponent } from './frontOffice/footer/footer.component';
import { CreatePaiementComponent } from './frontOffice/paiement/create-paiement/create-paiement.component';
import { UploadImageComponent } from './Backoffice/upload-image/upload-image.component';
import { CarouselComponent } from './frontOffice/home/carousel/carousel.component';
import { MatNativeDateModule } from '@angular/material/core';
import { CarouselAdminComponent } from './Backoffice/home-admin/carousel-admin/carousel-admin.component';
import { ListOffersUserComponent } from './frontOffice/list-offers-user/list-offers-user.component';
import { ListOffersAdminComponent } from './Backoffice/offers-admin/list-offers-admin/list-offers-admin.component';
import { CreateOffersAdminComponent } from './Backoffice/offers-admin/create-offers-admin/create-offers-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterAdminComponent,
    ListAirlineComponent,
    ListAirlineAdminComponent,
    CreateAirlineAdminComponent,
    CreateReclamationComponent,
    ListReclamationComponent,
    ListReclamationAdminComponent,
    AllTemplateAdminComponent,
    CreateUserComponent,
    ListUserAdminComponent,
    ListHotelAdminComponent,
    CreateHotelComponent,
    HomeAdminComponent,
    HeaderAdminComponent,
    ListFlightAdminComponent,
    CreateFlightComponent,
    ListUserComponent,
    ListHotelComponent,
    ListFlightComponent,
    AllTemplateUserComponent,
    RegistreComponent,
    FooterComponent,
    CreatePaiementComponent,
    UploadImageComponent,
    CarouselComponent,
    CarouselAdminComponent,
    ListOffersUserComponent,
    ListOffersAdminComponent,
    CreateOffersAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatNativeDateModule,
    MatRadioModule,
    MatSelectModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSnackBarModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
