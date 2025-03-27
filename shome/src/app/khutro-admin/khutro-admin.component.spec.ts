import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KhutroAdminComponent } from './khutro-admin.component';

describe('KhutroAdminComponent', () => {
  let component: KhutroAdminComponent;
  let fixture: ComponentFixture<KhutroAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [KhutroAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KhutroAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
