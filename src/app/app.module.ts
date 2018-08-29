import '../polyfills';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatButtonModule, MatCheckboxModule, MatNativeDateModule } from '@angular/material';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {HttpClientModule} from '@angular/common/http';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './/app-routing.module';
import { QuienSomosComponent } from './quien-somos/quien-somos.component';
import { BiomagnetismoComponent } from './biomagnetismo/biomagnetismo.component';
import { EmotionalCodeComponent } from './emotional-code/emotional-code.component';
import { AcupunturaComponent } from './acupuntura/acupuntura.component';
import { HipnoterapiaComponent } from './hipnoterapia/hipnoterapia.component';
import { ContactoComponent } from './contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { NavtestComponent } from './navtest/navtest.component';  

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuienSomosComponent,
    BiomagnetismoComponent,
    EmotionalCodeComponent,
    AcupunturaComponent,
    HipnoterapiaComponent,
    ContactoComponent,
    HeaderComponent,
    MainNavComponent,
    NavtestComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    AppRoutingModule,
    LayoutModule,
  ],
  
  entryComponents: [HomeComponent],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
