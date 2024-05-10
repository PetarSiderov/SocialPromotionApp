import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramPhoneNumbersComponent } from './telegram-phone-numbers.component';

describe('TelegramPhoneNumbersComponent', () => {
  let component: TelegramPhoneNumbersComponent;
  let fixture: ComponentFixture<TelegramPhoneNumbersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelegramPhoneNumbersComponent]
    });
    fixture = TestBed.createComponent(TelegramPhoneNumbersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
