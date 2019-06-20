import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css', './../../app.component.css']

})
export class ProductListComponent implements OnInit {

  products:any = [];

  constructor( private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.getProducts();
  }

  public getProducts() {
    this.products = [];
    this.productService.getProducts().subscribe((data: {}) => {
      this.products = data;
    });
  }
  
  public add() {
    this.router.navigate(['/product-add']);
  }
  
  public delete(id) {
    this.productService.deleteProduct(id)
      .subscribe(res => {
          this.getProducts();
        }, (err) => {
          console.log(err);
        }
      );
  }
}
