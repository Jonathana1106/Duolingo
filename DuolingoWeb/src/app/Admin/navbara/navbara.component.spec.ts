import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbaraComponent } from './navbara.component';

describe('NavbaraComponent', () => {
  let component: NavbaraComponent;
  let fixture: ComponentFixture<NavbaraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbaraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbaraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
