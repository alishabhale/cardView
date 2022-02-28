import { Component, HostListener, OnInit } from '@angular/core';
import { CartService } from 'src/app/service/cart.service';
declare var $:any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  count:any = 0;
  name: any = '';
  grandTotal: any;
  displayStyle = "none";
  public totalItem : number = 0;
  public products : any = [];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    // This function will get the products added in the cart.
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      this.products = res;
    })
  }

  //This function will open the shopping cart modal.
  openPopup() {
    this.name = '';
    this.displayStyle = "block";
    this.grandTotal = this.cartService.getTotalPrice();
    let modal = document.getElementById('try');
    document.addEventListener('click', function (e: any) {
      let displayStyle = "block"
      if(e.target.className === 'modal'){
         //return $('.modal').hide();
      }
    });
  }

  //This function will close the shopping cart modal.
  closePopup() {
    //$('.modal').hide();
    this.displayStyle = "none";
   }

  //This function will remove the items from the cart and will update the grand-total accordinfgly.
  removeItem(item: any) {
    this.cartService.removeCartItem(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }

  //This function will empty the whole cart.
  emptycart() {
    this.cartService.removeAllCart();
  }

  // This function will call the addtoCart function from written cart service.
  addtocart(item: any){
    this.cartService.addtoCart(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }

  removeFromCart(item: any){
    this.cartService.removeFromCart(item);
    this.grandTotal = this.cartService.getTotalPrice();
  }
}
