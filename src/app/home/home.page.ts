import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
products =[];
searchInput ='';
  constructor() {
    this.products = JSON.parse(localStorage.getItem('products'));
  }

  onInputSearch(){
    const searchtext = this.searchInput.toLowerCase();
    const  localProducts = JSON.parse(localStorage.getItem('products'));
    let newproducts = [];
    localProducts.forEach((element , idx) => {
      const condition = element.productName.toLowerCase().includes(searchtext);
        if(condition){
          newproducts.push(element);
        }
    });
    this.products = newproducts;
  }

}
