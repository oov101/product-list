import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Product } from '../product';
import { log } from 'util';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {
  @Input() product: Product;
  editProductForm = this.fb.group({
    name: [''],
    kcal: [''],
    price: [''],
    description: ['']
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.getSelectedProduct();
  }

  getSelectedProduct() {
    this.editProductForm.setValue({
      name: this.product.name,
      kcal: this.product.kcal,
      price: this.product.price,
      description: this.product.description
    });
  }
}
