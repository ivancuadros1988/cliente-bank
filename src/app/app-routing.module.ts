import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AutenticacionService } from './services/autenticacion.service'

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './components/security/security.module#SecurityModule' },
  {
    path: 'dashboard', loadChildren: './components/dashboard/dashboard.module#DashboardModule',
    canActivate: [AutenticacionService]
  },
  { path: '**', redirectTo: 'login' } // otherwise redirect to home 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
