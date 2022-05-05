import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { ResertPasswordPageComponent } from './resert-password-page/resert-password-page.component';
import { SignupPageComponent } from './signup-page/signup-page.component';
import { PetsPageComponentComponent } from './pets-page-component/pets-page-component.component';
import { ProductsPageComponent } from './products-page/products-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResertPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponentComponent,
    ProductsPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
