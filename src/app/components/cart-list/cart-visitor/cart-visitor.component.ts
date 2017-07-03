import {
  Component,
  EventEmitter,
  ElementRef, ViewChild,
  Input ,
  HostBinding,
  HostListener,
  AfterViewInit,
  OnInit ,
  Output   } from '@angular/core';
import { VisitorCart } from '../../../model/cart.model';

@Component({
  selector: 'app-cart',
  templateUrl: './cart-visitor.component.html',
  styleUrls: ['./cart-visitor.component.css']
})
export class CartComponent implements OnInit, AfterViewInit {
  @Input() cart: VisitorCart;
  @Output() complete: EventEmitter<VisitorCart>;


  @ViewChild('h4') inputField: ElementRef;

  //to add class to parent
  @HostBinding('class') class = 'js__binder__cart cart-visitor';

  @HostListener('mouseenter', ['$event']) onMouseEnter(event) {
     console.log(event.target);
     console.log(this.inputField);
  }
  constructor() {
    this.complete = new EventEmitter<VisitorCart>();
  }

  ngOnInit() {
  }

  completeTask(event: any): void {
    console.log('**completeTask** pass to parent ');
    this.complete.emit(this.cart);
  }

  ngAfterViewInit() {
    console.log('___ ngAfterViewInit' );
    // (<HTMLInputElement>this.inputField.nativeElement).value = 'Value From Parent'; //undefined
  }
}
