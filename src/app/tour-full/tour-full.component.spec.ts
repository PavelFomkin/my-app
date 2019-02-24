import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TourFullComponent } from './tour-full.component';

describe('TourFullComponent', () => {
  let component: TourFullComponent;
  let fixture: ComponentFixture<TourFullComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TourFullComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TourFullComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
