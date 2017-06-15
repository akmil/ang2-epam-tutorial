import { Component, OnInit , EventEmitter, Input, Output } from '@angular/core';
import { VisitorCart } from './../../model/cart.model';
// import { CartService } from './../../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Input()  carts: Array<VisitorCart>;
  @Output() complete: EventEmitter<VisitorCart>;
  // @Output() addVisitor: EventEmitter<VisitorCart>;

  // cart: VisitorCart;
  // carts: Array<VisitorCart>;
  // cartService: CartService;

  constructor(/*cartService: CartService*/) {
    this.complete = new EventEmitter();
    // this.cartService = cartService;
    console.log('constructor fin' );
  }


  ngOnInit() {
    /*this.cart = this.cartService.getCart();
    this.carts = this.cartService.getCarts();
    console.log('list inited',this.cart);
    console.log('this.carts',this.carts);*/
  }

  onCompleteTask(cart: VisitorCart): void {
    console.log('task-list component, completeTask method', cart);
    this.complete.emit(cart);
  }

}
