import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListDashboardComponent } from './todo-list-dashboard.component';

describe('TodoListDashboardComponent', () => {
  let component: TodoListDashboardComponent;
  let fixture: ComponentFixture<TodoListDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
