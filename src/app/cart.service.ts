import { Injectable } from '@angular/core';
import { Product } from './products';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  items: Product[] = [];

  countCartItem() {
    return this.items.length;
  }

  

  addToCart(product: Product) {
    this.items.push(product);
  }

  deleteCart(itemIndex: number) {
    delete this.items[itemIndex];
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }
  constructor(private http: HttpClient) {}
  getShippingPrices() {
    return this.http.get<{ type: string; price: number }[]>(
      '/assets/shipping.json'
    );
  }
}
