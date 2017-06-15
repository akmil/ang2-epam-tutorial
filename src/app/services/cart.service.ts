import { Injectable } from '@angular/core';

import { VisitorCart } from './../model/cart.model';

@Injectable()
export class CartService {

  constructor() { }

  getCart(): VisitorCart {
    return new VisitorCart(8, 'Villa Bella' ,
      125,
      new Date( Math.ceil(Math.random() * 12) + '.' + Math.ceil(Math.random() * 28) + '.2015').toDateString(),
      new Date('02.15.2015').toDateString(),
      false);
  }

  getCarts(): Array<VisitorCart> {
    let day = function(){ return Math.ceil(Math.random() * 28) },
      month = function(){ return  Math.ceil(Math.random() * 12) },
      date = function(){ return new Date( day() + '.' + month() + '.2015').toDateString(); }
    console.log(  'date',  date() );
    return [
      new VisitorCart(2, 'Villa Bella' ,
        day()*3,
        date(),
        new Date('02.21.2015').toDateString(),
        false),
      new VisitorCart(3, 'Villa Violetta' ,
        day()*3,
        date(),
        new Date('02.25.2015').toDateString(),
        false)
    ];
  }

}
