import { Injectable } from '@angular/core';
import {Todo} from "../../entity/Todo";
import {Preset} from "../../entity/Preset";

@Injectable({
  providedIn: 'root'
})
export class TodoListService {
  private _todoListTitle = "Todos";
  private _todos: Todo[] = [
  ];
  private _presets: Preset[] = [];

  constructor() { }

  get todoListTitle(): string {
    return this._todoListTitle;
  }

  set todoListTitle(value: string) {
    this._todoListTitle = value;
  }

  get todos(): Todo[] {
    return this._todos;
  }

  set todos(value: Todo[]) {
    this._todos = value;
  }

  get presets(): Preset[] {
    return this._presets;
  }

  set presets(value: Preset[]) {
    this._presets = value;
  }

  saveCurrentAsPreset(): Promise<void> {
    return new Promise<void>((resolve, reject) => {
      const todos: string[] = [];

      for (let todo of this.todos) {
        todos.push(todo.name);
      }

      this.presets.push(new Preset({
        id: this.presets.length+1,
        title: this.todoListTitle,
        todos: todos
      }));
      resolve();
    });
  }

  deletePresets(id: number) {
    this.presets = this.presets.filter(p => p.id !== id);
  }

  loadPreset(id: number) {
    const preset = this.presets.find(p => p.id === id);
    this.todoListTitle = preset.title;
    this.todos = [];

    for (let i = 0; i < preset.todos.length; i++) {
      const todo = preset.todos[i];
      this.todos.push(new Todo({
        id: i+1,
        name: todo,
        done: false
      }));
    }
  }
}
