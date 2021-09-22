import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassProgressComponent } from './class-progress.component';

describe('ClassProgressComponent', () => {
  let component: ClassProgressComponent;
  let fixture: ComponentFixture<ClassProgressComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ClassProgressComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClassProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
