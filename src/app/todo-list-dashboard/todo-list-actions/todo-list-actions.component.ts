import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-todo-list-actions',
  templateUrl: './todo-list-actions.component.html',
  styleUrls: ['./todo-list-actions.component.css']
})
export class TodoListActionsComponent implements OnInit {
  @Input()
  todoListName = "Todo List 1";

  @Output()
  todoListNameChange = new EventEmitter<string>();

  @Output()
  saveAsPreset = new EventEmitter<void>();

  isNameEditing = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  keydownTodoListName(event: KeyboardEvent) {
    if (event.key == "Enter") {
      this.updateTodoListTitle();
    }
  }

  updateTodoListTitle() {
    this.todoListNameChange.emit(this.todoListName);
    this.isNameEditing = false;
  }
}
