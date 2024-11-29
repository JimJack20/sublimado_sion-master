import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './pages/inicio/inicio.component';
import { ProductoComponent } from './pages/producto/producto.component';
import { CarritoCompraComponent } from './pages/carrito-compra/carrito-compra.component';
import { LoginComponent } from './pages/login/login.component';
import { DetallesProductoComponent } from './pages/detalles-producto/detalles-producto.component';
import { RegisterComponent } from './pages/register/register.component';
import { NgModule } from '@angular/core';
import { PersonalizarComponent } from './pages/personalizar/personalizar.component';
import { CheckoutComponent } from './pages/checkout/checkout.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path:'', component: InicioComponent },
  { path:'productos', component: ProductoComponent },
  { path:'carrito', component: CarritoCompraComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'inicio', component: InicioComponent },
  { path:'personalizar', component: PersonalizarComponent },
  { path:'lista', component: DetallesProductoComponent },
  { path:'check', component: CheckoutComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}