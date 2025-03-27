import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BaidangAdminComponent } from './baidang-admin.component';

describe('BaidangAdminComponent', () => {
  let component: BaidangAdminComponent;
  let fixture: ComponentFixture<BaidangAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BaidangAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BaidangAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
