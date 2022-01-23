import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthentificationGuard } from './authentification.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { RequiredRolesAdminComponent } from './required-roles-admin/required-roles-admin.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: 'home/:myInstitName/:firstName/:lastName', component: HomeComponent, canActivate: [AuthentificationGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthentificationGuard]},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'requiredRoles/:myInstitName/:firstName/:lastName', component: RequiredRolesAdminComponent, canActivate: [AdminGuard]},
  { path: 'createTicket', component: TicketComponent, canActivate: [AuthentificationGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
