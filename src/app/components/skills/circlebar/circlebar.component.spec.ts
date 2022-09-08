import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CirclebarComponent } from './circlebar.component';

describe('CirclebarComponent', () => {
  let component: CirclebarComponent;
  let fixture: ComponentFixture<CirclebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CirclebarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CirclebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
