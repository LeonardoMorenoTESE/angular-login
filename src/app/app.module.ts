import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './admin/login/login.component';
import { AdminModule } from  './admin/admin.module';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";

var config = {
  apiKey: "AIzaSyDCgz-DoAcS2EY4m9kMT27n01goFuTEc_w",
  authDomain: "tecnocultura-df5ce.firebaseapp.com",
  databaseURL: "https://tecnocultura-df5ce.firebaseio.com",
  projectId: "tecnocultura-df5ce",
  storageBucket: "tecnocultura-df5ce.appspot.com",
  messagingSenderId: "189181717351",
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
