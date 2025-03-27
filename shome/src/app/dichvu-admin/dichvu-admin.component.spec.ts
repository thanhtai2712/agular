import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DichvuAdminComponent } from './dichvu-admin.component';

describe('DichvuAdminComponent', () => {
  let component: DichvuAdminComponent;
  let fixture: ComponentFixture<DichvuAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DichvuAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DichvuAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
