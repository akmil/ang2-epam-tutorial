import { Component, OnInit } from '@angular/core';

import { VisitorCart } from './model/cart.model';
import { CartService } from './services/cart.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // // Task Demo
  // task: Task;
  carts: Array<VisitorCart>;
  //
  constructor(
    public cartService: CartService
  ) { }
  //
  ngOnInit() {
    this.carts = this.cartService.getCarts();
    this.carts.forEach((item,idx)=>{
      item.resort =  item.resort + '__parentDataModify__' + item.id;
    });
    // this.task = this.tasksService.getTask();
    // this.tasks = this.tasksService.getTasks();
  }
  //
  onCompleteTask(cart: VisitorCart): void {
    console.log('\t \t gradParent component, fo some');
    cart.powder = !cart.powder;
  }
  //
  // onAddTask(task: Task): void {
  //   console.log('app component, onAddTask method', task);
  //   this.tasks.push(task);
  // }

  // OnInitOnDestroyComponent Demo
  // display: boolean = true;

  // toggle(): void {
  //   this.display = !this.display;
  // }

  // OnChangesComponent Demo
  // responsible: string;
  // action: string;

  // setValues(actionField: HTMLInputElement, responsibleField: HTMLInputElement): void {
  //     this.responsible = responsibleField.value;
  //     this.action = actionField.value;
  // }

  // DoCheckItemComponent Demo
  // item: any = { action: 'Learn Angular 2', responsible: 'Vitaliy', done: false};

  // DoCheckItemListComponent Demo
  // tasks: Array<any> = [];
  // responsibles: string[];
  // actions: string[];

  // ngOnInit() {
  //   this.responsibles = ['Andrey', 'Boris', 'Helen', 'Joe'];
  //   this.actions = ['Estimate', 'Create', 'Delete', 'Implement', 'Deploy'];
  //   this.addTask();
  // }

  // getRendomInt(max: number): number {
  //     return Math.floor(Math.random() * (max + 1));
  // }

  // getRendomItem(array: string[]): string {
  //     let pos: number = this.getRendomInt(array.length - 1);
  //     return array[pos];
  // }

  // addTask(): void {
  //     this.tasks.push({
  //         responsible: this.getRendomItem(this.responsibles),
  //         action: this.getRendomItem(this.actions),
  //         done: false
  //     });
  // }

  // removeTask(task: any): void {
  //     let pos = this.tasks.indexOf(task);
  //     this.tasks.splice(pos, 1);
  // }





}
