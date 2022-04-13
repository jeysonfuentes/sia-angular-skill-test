import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopStatusComponent } from './top-status.component';

describe('TopStatusComponent', () => {
  let component: TopStatusComponent;
  let fixture: ComponentFixture<TopStatusComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopStatusComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopStatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
