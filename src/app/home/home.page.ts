import { Component, OnInit } from '@angular/core';
import { TodoService, Todo } from '../services/todo.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  newTodo: Todo = {
    text: '',
    priority: 1,
    id: '' + new Date().getTime,
    done: false,
  };

  todos!: Todo[];
  filterActive: boolean = false;

  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.todos = this.todoService.getTodos();
  }

  add() {
    this.todoService.add(this.newTodo);
    this.newTodo = {
      text: '',
      priority: 1,
      id: '' + new Date().getTime,
      done: false,
    };
    console.log(this.todos);
  }
}
