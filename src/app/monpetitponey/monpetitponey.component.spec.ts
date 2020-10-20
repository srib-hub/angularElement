import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonpetitponeyComponent } from './monpetitponey.component';

describe('MonpetitponeyComponent', () => {
  let component: MonpetitponeyComponent;
  let fixture: ComponentFixture<MonpetitponeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonpetitponeyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonpetitponeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
