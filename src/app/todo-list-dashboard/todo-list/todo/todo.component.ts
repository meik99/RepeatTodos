import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Todo} from "../../../../entity/Todo";

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  @Input()
  todo: Todo = new Todo();

  @Output()
  deleteTodo = new EventEmitter<Todo>();

  @Output()
  todoChange = new EventEmitter<Todo>();

  isEditing = false;

  constructor() { }

  ngOnInit(): void {
  }

  delete() {
    this.deleteTodo.emit(this.todo);
  }

  edit() {
    this.isEditing = !this.isEditing;
    if (!this.isEditing) {
      this.todoChange.emit(this.todo);
    }
  }

  editKeyPress(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.isEditing = false;
      this.todoChange.emit(this.todo);
    }
  }
}
