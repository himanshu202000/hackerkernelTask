import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  formData ={
    productName: '',
    productPrice: '',
    productImage: null
  };
  form: FormGroup;

  constructor(private router: Router ,private http: HttpClient) { }

  ngOnInit() {
    this.form = new FormGroup({
      productPrice: new FormControl('', {
        updateOn: 'submit',
        validators: [
          Validators.required
        ]
      }),
      productName: new FormControl('', {
        updateOn: 'submit',
        validators: [
          Validators.required
        ]
      }),
      productImage: new FormControl('', {
        updateOn: 'submit',
        validators: [
          Validators.required
        ]
      })
    });
  }


  createProduct(value){
    // https://images.unsplash.com/photo-1572635196237-14b3f281503f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8cHJvZHVjdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60
    const data = {
      productName:this.formData.productName,
      productPrice:this.formData.productPrice,
      productImage:this.formData.productImage
    };
    let products = [];
    products = JSON.parse(localStorage.getItem('products'));
    if(products){
      products.push(data);
    }else{
      products =[];
      products.push(data);
    }
    localStorage.setItem('products' ,JSON.stringify(products));
    this.router.navigateByUrl('home');
    console.log('runinig');
  }

}
