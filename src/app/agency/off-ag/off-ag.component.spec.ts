import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OffAgComponent } from './off-ag.component';

describe('OffAgComponent', () => {
  let component: OffAgComponent;
  let fixture: ComponentFixture<OffAgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OffAgComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OffAgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
