import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TelegramNewAccountsComponent } from './telegram-new-accounts.component';

describe('TelegramNewAccountsComponent', () => {
  let component: TelegramNewAccountsComponent;
  let fixture: ComponentFixture<TelegramNewAccountsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TelegramNewAccountsComponent]
    });
    fixture = TestBed.createComponent(TelegramNewAccountsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
