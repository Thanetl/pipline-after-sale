import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];

  constructor(private productService: ProductService) { 
    this.products = [];
  }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts()
      .subscribe((data: Product[]) => {
        this.products = data;
      });
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id)
        .subscribe(() => {
          this.loadProducts();
        });
    }
  }
}
