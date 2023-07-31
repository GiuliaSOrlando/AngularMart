import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { ProductService } from 'src/app/product.service';
import { ApiResponse } from 'src/app/products-api';

@Component({
  selector: 'app-single-product',
  templateUrl: './single-product.component.html',
  styleUrls: ['./single-product.component.scss'],
})
export class SingleProductComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.getProducts().subscribe(
      (response) => {
          this.products = response.products
          console.log(this.products);
      },
      (error) => {
        console.error('Error fetching products:', error);
      }
    );
  }
}
