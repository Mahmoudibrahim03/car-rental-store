import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertsConsoleComponent } from './alerts-console.component';

describe('AlertsConsoleComponent', () => {
  let component: AlertsConsoleComponent;
  let fixture: ComponentFixture<AlertsConsoleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertsConsoleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertsConsoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
