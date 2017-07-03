import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CART_PROVIDERS , CART_DECLARATIONS } from './../components/cart-list';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [ CART_DECLARATIONS  ],
  exports: [ CART_DECLARATIONS ], // to use outside of this module
  providers: [ CART_PROVIDERS ],
  bootstrap: [],
  schemas: [  NO_ERRORS_SCHEMA /*or CUSTOM_ELEMENTS_SCHEMA*/  ]
})
export class CartModule { }


