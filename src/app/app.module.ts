import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactComponent } from './contact/contact.component';
import { PresseComponent } from './presse/presse.component';
import{Routes, RouterModule} from'@angular/router';
import { FourOFourComponent } from './four-o-four/four-o-four.component';

const appRoutes: Routes = [
  {path: "home", component: BodyComponent},
  {path: "contact", component: ContactComponent},
  {path:"soutenir", redirectTo:"https://wweeddoo.com/projets/2gQIZMfhn-"},
  {path: "presse", component: PresseComponent},
  {path: "", component:BodyComponent},
  {path: "not-found", component:FourOFourComponent},
  {path:"**", redirectTo: "/not-found"}
];


@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    ContactComponent,
    PresseComponent,
    FourOFourComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
