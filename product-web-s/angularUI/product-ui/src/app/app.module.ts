import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule ,ReactiveFormsModule}    from '@angular/forms';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ProductModule } from './product/product.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product.service';
@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,ReactiveFormsModule,
    AppRoutingModule,ProductModule,
    HttpClientModule
  ],
  providers: [
    HttpClient, ProductService
   ],
  bootstrap: [AppComponent]
})
export class AppModule { 
}
