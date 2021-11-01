import { Component } from '@angular/core';

import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products = products;
 
searchItem (searchKeyword: String){
  var searchResoul = new Array();
  this.products.forEach(function (item){
    if (item.name == searchKeyword){
      searchResoul.push(item);
  }
});
this.products =searchResoul
}


































  // searchItem(searchKeyword: string) {
  //   var searchResults = new Array();
  //   this.products.forEach(function (item) {
  //     if (item.name == searchKeyword) {
  //       searchResults.push(item);
  //     }
  //   });
  //   this.products = searchResults;
  // }

  share(id: number) {
    window.alert('The product has been shared! ' + id);
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

 
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
