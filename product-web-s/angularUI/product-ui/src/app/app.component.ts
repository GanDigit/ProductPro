import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'product-ui';
  constructor( private route: ActivatedRoute, private router: Router) { }

  products() {
    console.log("Hi this is product click 1");
    this.router.navigate(['/product']);
    console.log("Hi this is products click 2");
  }

  orders() {
    this.router.navigate(['/orders']);
  }
}
