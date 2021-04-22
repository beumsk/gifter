import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {
  @Input() todos: any;
  showTodo = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleTodo(): void {
    this.showTodo = !this.showTodo;
  }
}
