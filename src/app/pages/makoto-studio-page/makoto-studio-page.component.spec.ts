import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakotoStudioPageComponent } from './makoto-studio-page.component';

describe('MakotoStudioPageComponent', () => {
  let component: MakotoStudioPageComponent;
  let fixture: ComponentFixture<MakotoStudioPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakotoStudioPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MakotoStudioPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
