import { Component, OnInit , EventEmitter, Output } from '@angular/core';
import { VisitorCart } from '../../../model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-visitor.component.html',
  styleUrls: ['./cart-visitor.component.css']
})
export class CartComponent implements OnInit {
  @Output() addVisitor: EventEmitter<VisitorCart>;

  constructor() {
    this.addVisitor = new EventEmitter<VisitorCart>();
  }

  ngOnInit() {
  }

  completeTask(event: any): void {
    console.log('task component, completeTask method:');
    // this.complete.emit(this.task);
  }
}
