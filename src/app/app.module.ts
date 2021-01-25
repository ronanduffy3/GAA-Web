import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SendVerificationEmailComponent } from './components/send-verification-email/send-verification-email.component';
import { AuthService } from './shared/services/auth.service';
import { CreateNewsComponent } from './components/create-news/create-news.component';
import { NewsArticlesComponent } from './components/news-articles/news-articles.component';


const firebaseConfig = {
  apiKey: 'AIzaSyAarKTgvQj2eMH7YnxO0yRaIIouF0eR5ls',
  authDomain: 'gaa-app-c0be7.firebaseapp.com',
  databaseURL: 'https://gaa-app-c0be7.firebaseio.com',
  projectId: 'gaa-app-c0be7',
  storageBucket: 'gaa-app-c0be7.appspot.com',
  messagingSenderId: '137154419494',
  appId: '1:137154419494:web:8fb4b90790f28b6bd8bfe7',
  measurementId: 'G-0BEVCCHW5V'
};

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    SendVerificationEmailComponent,
    CreateNewsComponent,
    NewsArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
