import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { ToDoListComponent } from './to-do-list.component';

describe('ToDoListComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToDoListComponent ],
      imports: [ HttpClientTestingModule ]
    })
    .compileComponents();
  });

  it('should create', () => {
    const fixture = TestBed.createComponent(ToDoListComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
