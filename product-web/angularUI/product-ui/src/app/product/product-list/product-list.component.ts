import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { PriceService } from '../../price.service';
import { Observable, of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']

})
export class ProductListComponent implements OnInit {

  products:any = [];

  constructor(private priceService: PriceService, private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log("ProductListComponent ngOnInit 1");
    this.getPrice();
    console.log("ProductListComponent ngOnInit 2");
    this.getProducts();
    console.log("ProductListComponent ngOnInit 3");
  }

  public getPrice() {
    console.log("ProductListComponent getPrice 1");
    console.log("ProductListComponent getPrice 2.priceService :" + this.priceService);
    console.log("ProductListComponent getPrice 3 :" + this.priceService.getPrice());
  }

  public getProducts() {
    console.log("ProductListComponent getProducts 1");

    this.products = [];
    console.log("ProductListComponent getProducts 1.1productService :" + this.productService);

    this.productService.getProducts().subscribe((data: {}) => {
      console.log("ProductListComponent getProducts 2");

      this.products = data;
    });
    console.log("ProductListComponent getProducts 3");

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
