import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-update',
  templateUrl: './product-update.component.html',
  styleUrls: ['./product-update.component.css', './../../app.component.css']
})
export class ProductUpdateComponent implements OnInit {

  @Input() productData:any = { id:0, category: '', name: '', description: '', price:0 };

  constructor(public productService:ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {

    var id = this.route.snapshot.params['id'];
    console.log("ProductUpdateComponent ngOnInit id: " + id);

    this.productService.getProduct(id).subscribe((data: {}) => {
      console.log("ProductUpdateComponent ngOnInit getProduct: " + data);
      this.productData = data;
    });
  }

  updateProduct() {
    this.productService.updateProduct(this.route.snapshot.params['id'], this.productData).subscribe((result) => {
      this.router.navigate(['/product']);
    }, (err) => {
      console.log(err);
    });
  }
  products() {
    this.router.navigate(['/product']);
  }
}
