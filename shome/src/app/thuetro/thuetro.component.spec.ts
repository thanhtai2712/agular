import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThuetroComponent } from './thuetro.component';

describe('ThuetroComponent', () => {
  let component: ThuetroComponent;
  let fixture: ComponentFixture<ThuetroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ThuetroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThuetroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
