import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StupidButtonComponent } from './stupid-button.component';

describe('StupidButtonComponent', () => {
  let component: StupidButtonComponent;
  let fixture: ComponentFixture<StupidButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StupidButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StupidButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
