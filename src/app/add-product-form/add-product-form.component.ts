import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../product';
import { log } from 'util';
@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  @Input() product: Product;
  addProductForm = this.fb.group({
    name: [''],
    kcal: [''],
    price: [''],
    description: [''],
    photoURL: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() { }

  createProduct() {
      console.log(this.product);
      this.product.name = this.addProductForm.value.name;
      this.product.kcal = this.addProductForm.value.kcal;
      this.product.price = this.addProductForm.value.price;
      this.product.description = this.addProductForm.value.description;
      this.product.photoURL = this.addProductForm.value.photoURL;
  }
}
