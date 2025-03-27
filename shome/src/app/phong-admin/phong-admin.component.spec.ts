import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhongAdminComponent } from './phong-admin.component';

describe('PhongAdminComponent', () => {
  let component: PhongAdminComponent;
  let fixture: ComponentFixture<PhongAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PhongAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PhongAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
