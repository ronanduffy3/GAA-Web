import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SendVerificationEmailComponent } from './send-verification-email.component';

describe('SendVerificationEmailComponent', () => {
  let component: SendVerificationEmailComponent;
  let fixture: ComponentFixture<SendVerificationEmailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SendVerificationEmailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SendVerificationEmailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
