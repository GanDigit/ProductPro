import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products:any = [];

  constructor(private productService: ProductService, private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    console.log("ProductListComponent ngOnInit 1");
    this.getProducts();
    console.log("ProductListComponent ngOnInit 2");
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
