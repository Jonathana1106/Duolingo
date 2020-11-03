import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaruComponent } from './navbaru.component';

describe('NavbaruComponent', () => {
  let component: NavbaruComponent;
  let fixture: ComponentFixture<NavbaruComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaruComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaruComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
