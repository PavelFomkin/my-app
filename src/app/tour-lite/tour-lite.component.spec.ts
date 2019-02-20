import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourLiteComponent } from './tour-lite.component';

describe('TourLiteComponent', () => {
  let component: TourLiteComponent;
  let fixture: ComponentFixture<TourLiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourLiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourLiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
