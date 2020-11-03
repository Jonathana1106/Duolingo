import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminlrComponent } from './adminlr.component';

describe('AdminlrComponent', () => {
  let component: AdminlrComponent;
  let fixture: ComponentFixture<AdminlrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminlrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
