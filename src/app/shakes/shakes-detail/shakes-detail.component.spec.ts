import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShakesDetailComponent } from './shakes-detail.component';

describe('ShakesDetailComponent', () => {
  let component: ShakesDetailComponent;
  let fixture: ComponentFixture<ShakesDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShakesDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShakesDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
