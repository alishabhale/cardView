import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { CartService } from 'src/app/service/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products : any = [];
  public grandTotal!: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
  }
}
