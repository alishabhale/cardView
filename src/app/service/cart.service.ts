import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any =[]
  public productList = new BehaviorSubject<any>([]);
  isItemAdded : boolean = false;
  constructor() { }

  //Question, can we relate the $watch and observable concepts?
  getProducts() {
    return this.productList.asObservable();
  }

  // This function will add the selected items to the cart
  addtoCart(product : any) {
    if(this.cartItemList.indexOf(product) === -1) {
      this.isItemAdded = true;
      this.cartItemList.push(product);
      this.productList.next(this.cartItemList);
    }
    product.quantity++;
    product.isAddedToTheCart ='Yes';
  }

  getTotalPrice() {
    let totalPrice = 0;
    this.cartItemList.map((a:any)=> {
      console.log("a",a);
      totalPrice += a.price * a.quantity;
      console.log("total price from the service", totalPrice);
    })
    return totalPrice.toFixed(2);
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a:any, index:any)=>{
      if(product.id === a.id){
        product.quantity = 0;
        this.cartItemList.splice(index,1);
      }
    })
    this.productList.next(this.cartItemList);
  }

  removeFromCart(product: any) {
    if(product.quantity > 1 ) {product.quantity--;}
  }

  removeAllCart() {
    this.cartItemList.map((a:any, index:any)=>{
      a.quantity = 0;
    })
    this.cartItemList = []
    this.productList.next(this.cartItemList);
  }
}
