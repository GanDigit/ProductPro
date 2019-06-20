import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-home',
  templateUrl: './product-home.component.html',
  styleUrls: ['./product-home.component.css', './../../app.component.css']
})
export class ProductHomeComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    console.log("ProductHomeComponent ---> ngOnInit");
  }
  products() {
    this.router.navigate(['/product']);
  }
}
