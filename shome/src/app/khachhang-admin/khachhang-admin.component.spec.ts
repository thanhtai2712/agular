import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhachhangAdminComponent } from './khachhang-admin.component';

describe('KhachhangAdminComponent', () => {
  let component: KhachhangAdminComponent;
  let fixture: ComponentFixture<KhachhangAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhachhangAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhachhangAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
