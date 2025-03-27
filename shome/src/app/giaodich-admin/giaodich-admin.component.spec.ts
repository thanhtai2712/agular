import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GiaodichAdminComponent } from './giaodich-admin.component';

describe('GiaodichAdminComponent', () => {
  let component: GiaodichAdminComponent;
  let fixture: ComponentFixture<GiaodichAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GiaodichAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GiaodichAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
