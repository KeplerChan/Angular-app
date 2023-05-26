import { ComponentFixture, TestBed } from '@angular/core/testing';
import { S4Page } from './s4.page';

describe('S4Page', () => {
  let component: S4Page;
  let fixture: ComponentFixture<S4Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(S4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
