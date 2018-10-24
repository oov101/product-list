import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-product-form',
  templateUrl: './edit-product-form.component.html',
  styleUrls: ['./edit-product-form.component.css']
})
export class EditProductFormComponent implements OnInit {
  name = new FormControl('');
  
  constructor() { }

  ngOnInit() {
  }

}
