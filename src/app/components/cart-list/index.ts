/**
 * import here everything related to this page
 * Pipe , Directive , Component , Module
 */

import { CartListComponent } from './../cart-list/cart-list.component';
import { CartComponent } from './../cart-list/cart-visitor/cart-visitor.component';
import { CartService } from '../../services/cart.service';


export const CART_PROVIDERS = [CartService];
export const CART_DECLARATIONS = [CartListComponent, CartComponent];
/*
import { PostService } from '../services/product/product.service';
import { ProductListComponent } from '../../common/product/components/product-list/product-list.component';
import { ProductEditComponent } from '../../common/product/components/product-edit/product-edit.component';
import { ProductDetailComponent } from '../../common/product/components/product-detail/product-detail.component';

export {
  PostService
};

export const PRODUCTS_PROVIDERS = [PostService];
export const PRODUCTS_DECLARATIONS = [
  // Pipe,
  // Directive,
  // Component
  ProductListComponent,
  ProductEditComponent,
  ProductDetailComponent
];
*/
