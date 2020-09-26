import {Component, EventEmitter, OnInit} from '@angular/core';
import {Todo} from "../../entity/Todo";
import {TodoListService} from "../service/todo-list.service";
import {Preset} from "../../entity/Preset";

@Component({
  selector: 'app-todo-list-dashboard',
  templateUrl: './todo-list-dashboard.component.html',
  styleUrls: ['./todo-list-dashboard.component.css']
})
export class TodoListDashboardComponent implements OnInit {
  todos: Todo[] = [];
  presets: Preset[] = [];
  todoListTitle: string;
  presetChange = new EventEmitter<Preset[]>();

  constructor(
    private _todoListService: TodoListService
  ) { }

  ngOnInit(): void {
    this.reloadTodo();
  }

  todoListTitleChange(todoListTitle: string) {
    this._todoListService.todoListTitle = todoListTitle;
  }

  todosChange(todos: Todo[]) {
    this._todoListService.todos = todos;
  }

  saveAsPreset() {
    this._todoListService.saveCurrentAsPreset().then(() => {
        this.presets = this._todoListService.presets;
        this.presetChange.emit(this.presets);
      });
  }

  reloadTodo() {
    this.todos = this._todoListService.todos;
    this.todoListTitle = this._todoListService.todoListTitle;
    this.presets = this._todoListService.presets;
  }
}
