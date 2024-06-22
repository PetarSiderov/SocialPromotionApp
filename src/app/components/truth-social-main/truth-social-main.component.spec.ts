import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TruthSocialMainComponent } from './truth-social-main.component';

describe('TruthSocialMainComponent', () => {
  let component: TruthSocialMainComponent;
  let fixture: ComponentFixture<TruthSocialMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TruthSocialMainComponent]
    });
    fixture = TestBed.createComponent(TruthSocialMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
