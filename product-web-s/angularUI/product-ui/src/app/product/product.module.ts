import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule}    from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductUpdateComponent } from './product-update/product-update.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductHomeComponent } from './product-home/product-home.component';


@NgModule({
  declarations: [ProductListComponent, ProductAddComponent, ProductUpdateComponent, ProductDetailComponent, ProductHomeComponent],
  imports: [
    CommonModule, BrowserModule,
    FormsModule,ReactiveFormsModule,
  ]
})
export class ProductModule { }