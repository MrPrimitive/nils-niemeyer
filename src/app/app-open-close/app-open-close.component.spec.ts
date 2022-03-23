import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppOpenCloseComponent } from './app-open-close.component';

describe('AppOpenCloseComponent', () => {
  let component: AppOpenCloseComponent;
  let fixture: ComponentFixture<AppOpenCloseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppOpenCloseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppOpenCloseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
