import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhgiaAdminComponent } from './danhgia-admin.component';

describe('DanhgiaAdminComponent', () => {
  let component: DanhgiaAdminComponent;
  let fixture: ComponentFixture<DanhgiaAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DanhgiaAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DanhgiaAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
