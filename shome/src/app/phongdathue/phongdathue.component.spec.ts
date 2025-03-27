import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongdathueComponent } from './phongdathue.component';

describe('PhongdathueComponent', () => {
  let component: PhongdathueComponent;
  let fixture: ComponentFixture<PhongdathueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhongdathueComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhongdathueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
