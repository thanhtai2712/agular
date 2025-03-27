import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HopdongAdminComponent } from './hopdong-admin.component';

describe('HopdongAdminComponent', () => {
  let component: HopdongAdminComponent;
  let fixture: ComponentFixture<HopdongAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HopdongAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HopdongAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
