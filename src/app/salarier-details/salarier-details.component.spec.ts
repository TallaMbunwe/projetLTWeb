import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalarierDetailsComponent } from './salarier-details.component';

describe('SalarierDetailsComponent', () => {
  let component: SalarierDetailsComponent;
  let fixture: ComponentFixture<SalarierDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SalarierDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SalarierDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
