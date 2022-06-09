import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from './admin.guard';
import { AuthentificationGuard } from './authentification.guard';
import { GuestGuard } from './guest.guard';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { MessageComponent } from './message/message.component';
import { ReceivedTicketsComponent } from './received-tickets/received-tickets.component';
import { RegisterComponent } from './register/register.component';
import { RequiredRolesAdminComponent } from './required-roles-admin/required-roles-admin.component';
import { TicketComponent } from './ticket/ticket.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  { path: 'home/:myInstitName/:firstName/:lastName', component: HomeComponent, canActivate: [AuthentificationGuard]},
  { path: 'home', component: HomeComponent, canActivate: [AuthentificationGuard]},
  { path: 'register', component: RegisterComponent},
  { path: 'requiredRoles/:myInstitName/:firstName/:lastName', component: RequiredRolesAdminComponent, canActivate: [AdminGuard]},
  { path: 'createTicket', component: TicketComponent, canActivate: [GuestGuard]},
  { path: 'receivedTickets', component: ReceivedTicketsComponent, canActivate: [GuestGuard] },
  { path: 'message/:idTicket', component: MessageComponent, canActivate: [GuestGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
