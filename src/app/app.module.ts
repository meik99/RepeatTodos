import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { TodoComponent } from './todo-list-dashboard/todo-list/todo/todo.component';
import { TodoListComponent } from './todo-list-dashboard/todo-list/todo-list.component';
import {FormsModule} from "@angular/forms";
import { TodoListDashboardComponent } from './todo-list-dashboard/todo-list-dashboard.component';
import { TodoListActionsComponent } from './todo-list-dashboard/todo-list-actions/todo-list-actions.component';
import { TodoListPresetsComponent } from './todo-list-dashboard/todo-list-presets/todo-list-presets.component';
import { DeleteComponent } from './delete/delete.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TodoListComponent,
    TodoListDashboardComponent,
    TodoListActionsComponent,
    TodoListPresetsComponent,
    DeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
