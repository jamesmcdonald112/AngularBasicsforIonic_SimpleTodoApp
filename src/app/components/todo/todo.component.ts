import { Component, OnInit, Input } from '@angular/core';
import { TodoService, Todo } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss'],
})
export class TodoComponent  implements OnInit {

  @Input('todo')
  todo!: Todo;
  
  constructor(private todoService: TodoService) { }

  ngOnInit() {}

  public setDone() {
    this.todoService.setDone(this.todo.id);
  }

}
