import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongtroComponent } from './phongtro.component';

describe('PhongtroComponent', () => {
  let component: PhongtroComponent;
  let fixture: ComponentFixture<PhongtroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhongtroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhongtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
