import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpperBannerComponent } from './upper-banner.component';

describe('UpperBannerComponent', () => {
  let component: UpperBannerComponent;
  let fixture: ComponentFixture<UpperBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpperBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpperBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
