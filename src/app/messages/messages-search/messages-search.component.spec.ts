import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MessagesSearchComponent } from './messages-search.component';

describe('MessagesSearchComponent', () => {
  let component: MessagesSearchComponent;
  let fixture: ComponentFixture<MessagesSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MessagesSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MessagesSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
