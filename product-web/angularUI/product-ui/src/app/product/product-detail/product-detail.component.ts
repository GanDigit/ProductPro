import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(public productService:ProductService, private route: ActivatedRoute, private router: Router) { }
  
  product:any;

  ngOnInit() {
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
      this.product = data;
    });
  }
  
}
