import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodoListPresetsComponent } from './todo-list-presets.component';

describe('TodoListPresetsComponent', () => {
  let component: TodoListPresetsComponent;
  let fixture: ComponentFixture<TodoListPresetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TodoListPresetsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TodoListPresetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
