import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrinksDetailComponent } from './drinks-detail.component';

describe('DrinksDetailComponent', () => {
  let component: DrinksDetailComponent;
  let fixture: ComponentFixture<DrinksDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrinksDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrinksDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
