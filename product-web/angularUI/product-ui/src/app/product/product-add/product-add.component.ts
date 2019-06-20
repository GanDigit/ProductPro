import { Component, OnInit, Input } from '@angular/core';
import { ProductService } from '../../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  @Input() productData:any = {  category: '', name: '', description: '', price:0 };

  constructor(public productService:ProductService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  addProduct() {
    this.productService.addProduct(this.productData).subscribe((result) => {
      this.router.navigate(['/product-details/'+result.id]);
    }, (err) => {
      console.log(err);
    });
  }
}
