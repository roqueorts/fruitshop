import { Component, OnInit } from '@angular/core';
import { Product, Purchase } from 'src/app/shared/models/product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];
  quantity: number = 0;
  purchases: Array<Purchase>= [];

  constructor(private productService: ProductService) {
  }

  ngOnInit() {
    this.productService.findAll().subscribe(data => {
      this.products = data;
      console.log(this.products);
      
    });
}
add(product: Product, i: number, quantity:any){
  this.purchases.push(new Purchase(product,quantity));
   console.log(this.purchases);
}
purchase() {
   
  
 this.productService.purchase(this.purchases).subscribe(data => {
    //this.products = data;
    console.log(data);
    
  });
}
}
