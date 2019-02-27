import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVacantTourComponent } from './edit-vacant-tour.component';

describe('EditVacantTourComponent', () => {
  let component: EditVacantTourComponent;
  let fixture: ComponentFixture<EditVacantTourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditVacantTourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditVacantTourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
