import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChitethongtroComponent } from './chitethongtro.component';

describe('ChitethongtroComponent', () => {
  let component: ChitethongtroComponent;
  let fixture: ComponentFixture<ChitethongtroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ChitethongtroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChitethongtroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
