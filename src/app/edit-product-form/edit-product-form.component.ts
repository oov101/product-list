import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.scss']
})
export class EditProductFormComponent implements OnInit {
  editProductForm = this.fb.group({
    name: [''],
    kcal: [''],
    price: [''],
    description: ['']
  });
  
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
