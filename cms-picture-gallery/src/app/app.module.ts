import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import {Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Service Layer 
import { AuthService } from './services/auth.service';
// components and tree

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginLandingComponent } from './components/admin-register-login/login-landing/login-landing.component';
import { ImageViewerComponent } from './components/main-content/image-viewer/image-viewer.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginLandingComponent,
    ImageViewerComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule ,
    RouterModule.forRoot([
    {path:'home', component:LandingPageComponent},
    
    {path:'', component:LandingPageComponent},
    {path:'**', component:LandingPageComponent},
  ])
  ],
  providers: [], //, ListsFunnelService, CoreContentService],
    bootstrap: [AppComponent, AuthService]
})
export class AppModule { }
