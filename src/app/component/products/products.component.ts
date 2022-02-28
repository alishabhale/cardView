import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { ApiService } from 'src/app/service/api.service';
import { CartService } from 'src/app/service/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public productList : any;
  constructor(private api : ApiService, private cartService : CartService) { }

  // This function will show the product list on the page  from written api service
  ngOnInit(): void {
    this.api.getProduct()
    .subscribe(res=> {
      this.productList = res;
    })
  }

  // This function will call the addtoCart function from written cart service
  addtocart(item: any){
    this.cartService.addtoCart(item);
  }

}
