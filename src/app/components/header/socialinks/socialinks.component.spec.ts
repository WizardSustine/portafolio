import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocialinksComponent } from './socialinks.component';

describe('SocialinksComponent', () => {
  let component: SocialinksComponent;
  let fixture: ComponentFixture<SocialinksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocialinksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocialinksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
