import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent {
// implements OnInit 
  product: Product;

  constructor(
    private route: ActivatedRoute, 
      private router: Router, 
        private productService: ProductService) {
    this.product = new Product();
  }

  onSubmit() {
    this.productService.save(this.product).subscribe(result => this.gotoProductList());
  }

  gotoProductList() {
    this.router.navigate(['/products']);
  }

}
