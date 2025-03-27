import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongdichvuAdminComponent } from './phongdichvu-admin.component';

describe('PhongdichvuAdminComponent', () => {
  let component: PhongdichvuAdminComponent;
  let fixture: ComponentFixture<PhongdichvuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhongdichvuAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhongdichvuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
