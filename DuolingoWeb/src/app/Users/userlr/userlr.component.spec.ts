import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserlrComponent } from './userlr.component';

describe('UserlrComponent', () => {
  let component: UserlrComponent;
  let fixture: ComponentFixture<UserlrComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserlrComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserlrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
