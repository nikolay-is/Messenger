import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { CommonModule } from '@angular/common';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';


const appRoutes: Routes = [
  {path:'', component: HomeComponent},
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'dashboard', component: DashboardComponent},
  {path:'profile', component: ProfileComponent}
]

@NgModule({
  declarations: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    DashboardComponent,
    ProfileComponent
  ],
  imports:  [RouterModule.forRoot(appRoutes)], // CommonModule
  exports: [RouterModule]
})

export class AppRoutesModule {}