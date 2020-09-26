import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../entity/Todo";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  @Input()
  todos: Todo[] = [];

  @Output()
  todosChange = new EventEmitter<Todo[]>();

  newTodo = new Todo({id: 7});

  constructor() { }

  ngOnInit(): void {
  }

  addNewTodo() {
    if (this.newTodo.name.length > 0) {
      this.newTodo.done = false;
      this.todos.push(this.newTodo);
      this.newTodo = new Todo({
        id: this.newTodo.id + 1
      });
      this.todosChange.emit(this.todos);
    }
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(item => item.id != todo.id);
    this.todosChange.emit(this.todos);
  }

  keydownAddName(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.addNewTodo();
    }
  }

  todoChange() {
    this.todosChange.emit(this.todos);
  }
}
