import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; // Import FormsModule

import {Router, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// Service Layer 
import { AuthService } from './services/auth.service';
import { CoreContentService } from './services/core-content.service';
// components and tree

import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LoginLandingComponent } from './components/admin-register-login/login-landing/login-landing.component';
import { ContentViewerComponent } from './components/main-content/content-viewer/content-viewer.component';
import { CardComponent } from './components/main-content/card/card.component';
import { MailFormComponent } from './components/misc/mail-form/mail-form.component';
import { RegisterFormComponent } from './components/admin-register-login/register-form/register-form.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    LoginLandingComponent,
    ContentViewerComponent,
    CardComponent,
    MailFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule, ReactiveFormsModule ,
    RouterModule.forRoot([
    {path:'home', component:LandingPageComponent},
    
    {path:'', component:LandingPageComponent},
    {path:'**', component:LandingPageComponent},
    {path: 'view/:theme', component: LoginLandingComponent },
    {path: 'contact', component: MailFormComponent },

    {path: 'view/contact', component: MailFormComponent },
    {path: 'contact/contact', component: MailFormComponent },
  ])
  ],
  providers: [], //, ListsFunnelService, CoreContentService],
    bootstrap: [AppComponent, AuthService, CoreContentService]
})
export class AppModule { }
