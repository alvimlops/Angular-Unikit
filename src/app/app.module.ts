import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LoginPageComponent } from './pages/acconts/login-page/login-page.component';
import { ResertPasswordPageComponent } from './pages/acconts/resert-password-page/resert-password-page.component';
import { SignupPageComponent } from './pages/acconts/signup-page/signup-page.component';
import { PetsPageComponentComponent } from './pages/acconts/pets-page-component/pets-page-component.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CardPageComponent } from './pages/store/card-page/card-page.component';
import { AppRoutingModule } from './app-routing.module';
import { FramePageComponent } from './pages/master/frame.page';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginPageComponent,
    ResertPasswordPageComponent,
    SignupPageComponent,
    PetsPageComponentComponent,
    ProductsPageComponent,
    CardPageComponent,
    AppRoutingModule,
    FramePageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
