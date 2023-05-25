import { ComponentFixture, TestBed } from '@angular/core/testing';
import { S3Page } from './s3.page';

describe('S3Page', () => {
  let component: S3Page;
  let fixture: ComponentFixture<S3Page>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(S3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
