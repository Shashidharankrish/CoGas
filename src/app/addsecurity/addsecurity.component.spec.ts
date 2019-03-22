import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddsecurityComponent } from './addsecurity.component';

describe('AddsecurityComponent', () => {
  let component: AddsecurityComponent;
  let fixture: ComponentFixture<AddsecurityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsecurityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsecurityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
