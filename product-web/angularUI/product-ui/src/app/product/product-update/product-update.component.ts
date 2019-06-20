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
    this.productService.getProduct(this.route.snapshot.params['id']).subscribe((data: {}) => {
      console.log(data);
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

}
