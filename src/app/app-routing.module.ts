import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {TodoListDashboardComponent} from "./todo-list-dashboard/todo-list-dashboard.component";

const routes: Routes = [
  {path: '', component: TodoListDashboardComponent, pathMatch: 'full'}
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
