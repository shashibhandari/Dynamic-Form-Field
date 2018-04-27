import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators } from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit {
 form: FormGroup;
 title = 'Add Products'
 arry = [];
 constructor( private _formBuilder: FormBuilder){

 }

 ngOnInit(){
   this.form = this._formBuilder.group({
     products: this._formBuilder.array([this.createProduct()])
   })
   console.log(this.form);
 }

 createProduct(): FormGroup{
   return this._formBuilder.group({
     name:'',
     price:''
   });
 }

addProduct(){
const product = this.createProduct();
this.products.push(product);
console.log(this.products.length)
}

removeProduct(){
this.products.removeAt(this.products.length-1);
}

get products(): FormArray {
  return this.form.get('products') as FormArray;
}

saveProduct(){
  console.log(this.form.value);
  this.form.reset();
}
}
