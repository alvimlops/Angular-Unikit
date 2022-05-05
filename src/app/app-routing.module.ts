
import { FramePageComponent } from './pages/master/frame.page';

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './pages/acconts/login-page/login-page.component';
import { ProductsPageComponent } from './pages/store/products-page/products-page.component';
import { CardPageComponent } from './pages/store/card-page/card-page.component';
import { PetsPageComponentComponent } from './pages/acconts/pets-page-component/pets-page-component.component';
import { SignupPageComponent } from './pages/acconts/signup-page/signup-page.component';
import { ResertPasswordPageComponent } from './pages/acconts/resert-password-page/resert-password-page.component';



const routes: Routes = [
  {
    path:'',
    component: FramePageComponent,
    children:[
      { path: '', component: ProductsPageComponent },
      { path: 'card', component: CardPageComponent}
    ]
  },
  {
    path:'account',
    component: FramePageComponent,
    children:[
      { path: 'pets', component: PetsPageComponentComponent},
    ]
  },
  { path:'login', component: LoginPageComponent},
  { path: 'signup', component: SignupPageComponent},
  { path: 'reset-password', component: ResertPasswordPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
