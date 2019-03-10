import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VacantDateComponent } from './vacant-date.component';

describe('VacantDateComponent', () => {
  let component: VacantDateComponent;
  let fixture: ComponentFixture<VacantDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VacantDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VacantDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
