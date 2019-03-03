import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminTourEditorComponent } from './admin-tour-editor.component';

describe('AdminTourEditorComponent', () => {
  let component: AdminTourEditorComponent;
  let fixture: ComponentFixture<AdminTourEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminTourEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminTourEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
