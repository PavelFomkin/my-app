import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminVacantDateComponent } from './admin-vacant-date.component';

describe('AdminVacantDateComponent', () => {
  let component: AdminVacantDateComponent;
  let fixture: ComponentFixture<AdminVacantDateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminVacantDateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminVacantDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
