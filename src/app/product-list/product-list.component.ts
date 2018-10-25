import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { log } from 'util';
import * as moment from 'moment';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selectedProduct: Product;
  newProduct: Product;
  closeResult: string;

  constructor(private productService: ProductService, private modalService: NgbModal) { }

  ngOnInit() {
    this.getProducts();
    this.newProduct = {...this.newProduct};
  }

  getProducts(): void {
    this.productService.getProducts()
      .subscribe(products => this.products = products);
  }

  combineOnSelectAndOpen(product, content) {
    this.onSelect(product);
    this.open(content);
  }

  onSelect(product: Product): void {
    console.log(product);
    
    this.selectedProduct = product;
  }

  open(content): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  save(modal): void {
    this.productService.updateProduct(this.selectedProduct)
      .subscribe(() => {
        modal.close('Save click')
        this.selectedProduct.updateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      });
  }

  saveOld(modal, name, kcal, price, description): void {
    this.selectedProduct.name = name.value;
    this.selectedProduct.kcal = kcal.value;
    this.selectedProduct.price = price.value;
    this.selectedProduct.description = description.value;

    this.productService.updateProduct(this.selectedProduct)
      .subscribe(() => {
        modal.close('Save click')
        this.selectedProduct.updateTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      });
  }

  add(modal): void {
    let addTime = moment().format('MMMM Do YYYY, h:mm:ss a');
    let updateTime = "";
    console.log(this.newProduct);
    
    this.productService.addProduct({ ...this.newProduct, addTime, updateTime } as Product)
      .subscribe(product => {
        this.products.push(product);
      });
    modal.close('Save click');
  }

  delete(product: Product, modal): void {
    let result = confirm("Are you sure you want to delete this item?");
    if (!result) return;
    this.products = this.products.filter(h => h !== product);
    this.productService.deleteHero(product).subscribe();
    modal.close('Save click');
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }
}
