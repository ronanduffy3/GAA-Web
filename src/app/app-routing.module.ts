import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


// Import components for routing
import { SignInComponent } from '../app/components/sign-in/sign-in.component';
import { SignUpComponent } from '../app/components/sign-up/sign-up.component';
import { DashboardComponent } from '../app/components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from '../app/components/forgot-password/forgot-password.component';
import { HomeComponent } from '../app/components/home/home.component';
import { SendVerificationEmailComponent } from '../app/components/send-verification-email/send-verification-email.component';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsArticlesComponent } from './components/news-articles/news-articles.component';
import { TeamListingsComponent } from './components/team-listings/team-listings.component';
import { AuthGuard } from './shared/guard/auth.guard';

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'sign-in', component: SignInComponent},
  {path: 'register-user', component: SignUpComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'send-verification-email', component: SendVerificationEmailComponent},
  {path: 'create-news', component: CreateNewsComponent, canActivate: [AuthGuard]},
  {path: 'list-news', component: NewsArticlesComponent},
  {path: 'team-listings', component: TeamListingsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
