import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ViewerComponent } from './components/viewer/viewer.component';
import { HeaderComponent } from './components/header/header.component';

import { PdfService } from "./services/pdf.service";
import { ExcerptPipe } from './excerpt.pipe';

@NgModule({
declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ViewerComponent,
    HeaderComponent,
    ExcerptPipe
],
imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
],
providers: [
    PdfService
],
bootstrap: [AppComponent]
})
export class AppModule { }
