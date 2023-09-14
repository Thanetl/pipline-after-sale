import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  productForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private productService: ProductService) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.productForm.valid) {
      const productData = this.productForm.value;
      // Send the product data to the service for API communication.
      this.productService.createProduct(productData).subscribe(
        (response) => {
          console.log('Product created:', response);
        },
        (error) => {
          console.error('Error creating product:', error);
        }
      );
    } else {
      // Handle form validation errors
    }
  }
}
