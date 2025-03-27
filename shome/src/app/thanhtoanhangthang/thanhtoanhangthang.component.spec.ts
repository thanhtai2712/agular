import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanhtoanhangthangComponent } from './thanhtoanhangthang.component';

describe('ThanhtoanhangthangComponent', () => {
  let component: ThanhtoanhangthangComponent;
  let fixture: ComponentFixture<ThanhtoanhangthangComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThanhtoanhangthangComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanhtoanhangthangComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
