import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product-form',
  templateUrl: './add-product-form.component.html',
  styleUrls: ['./add-product-form.component.scss']
})
export class AddProductFormComponent implements OnInit {
  addProductForm = this.fb.group({
    name: [''],
    kcal: [''],
    price: [''],
    description: [''],
    photoURL: ['']
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
